import { createAsyncThunk } from '@reduxjs/toolkit';

import { orderAPI } from '@/services/api';
import { CheckPromoCodeErrorResponse, CreateOrderErrorResponse, CreateOrderRequest } from '@/types/api';
import { IOrderCreateData } from '@/types/order';
import { Noop } from '@/types/functions';
import { isAxiosError } from '@/functions/isAxiosError';
import { formatMoney } from '@/functions/formatMoney';
import { getUtm } from '@/functions/getUtm';
import { YM_KEYS } from '@/constants/keys';
import { showToast } from '@/shared/ui';

interface CheckPromoCodeParams {
    promoCode: string;
    totalPrice: number;
}

export const checkPromoCode = createAsyncThunk(
    'order/checkPromoCode',
    async ({ promoCode, totalPrice }: CheckPromoCodeParams, { rejectWithValue }) => {
        try {
            const { data } = await orderAPI.checkPromoCode(promoCode);

            if (data.card_sum_from && totalPrice < data.card_sum_from) {
                return rejectWithValue(`Промокод не действителен на корзину менее ${formatMoney(data.card_sum_from)}`);
            }

            return { ...data, name: promoCode };
        } catch (e) {
            console.error('checkPromoCode', e);

            if (isAxiosError<CheckPromoCodeErrorResponse>(e) && e.response && e.response.data.message) {
                return rejectWithValue(e.response.data.message);
            }

            return rejectWithValue('Промокод не найден');
        }
    },
);

interface CreateOrderParams {
    data: IOrderCreateData;
    onSuccess: (orderId: number, orderNum: string) => void;
}

export const createOrder = createAsyncThunk(
    'order/createOrder',
    async ({ data, onSuccess }: CreateOrderParams, { rejectWithValue, dispatch }) => {
        try {
            const ymUidRow = localStorage.getItem(YM_KEYS.uid);
            const ymUid = ymUidRow ? JSON.parse(ymUidRow) ?? '' : '';

            const utm = getUtm();

            const requestData: CreateOrderRequest = {
                ...data,
                ...utm,
                [YM_KEYS.uid]: ymUid,
            };

            const { data: responseData } = await orderAPI.createOrder(requestData);

            if (responseData.link) {
                window.location.href = responseData.link;
                return;
            }

            onSuccess(responseData.order_id, responseData.order_num);
        } catch (e) {
            console.error('createOrder', e);

            if (isAxiosError<CreateOrderErrorResponse>(e) && e.response && e.response.data.message) {
                showToast.error(e.response.data.message);
                return rejectWithValue(e.response.data.message);
            }

            return rejectWithValue(null);
        }
    },
);

interface SubmitOrderParams {
    orderId: number;
    onSuccess?: Noop;
}

export const submitOrder = createAsyncThunk(
    'order/submitOrder',
    async ({ orderId, onSuccess }: SubmitOrderParams, { rejectWithValue }) => {
        try {
            await orderAPI.submitOrder(orderId);
            onSuccess?.();
        } catch (e) {
            console.error('submitOrder', e);
            return rejectWithValue(null);
        }
    },
);
