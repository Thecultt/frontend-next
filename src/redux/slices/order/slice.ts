import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

import { IOrderFormValues } from '@/screens/Order/types';

import { IOrderState } from './types';
import { checkPromoCode, createOrder, submitOrder } from './asyncActions';

const initialState: IOrderState = {
    deliveryPrice: 0,
    promoCode: null,
    promoCodeIsLoading: false,
    promoCodeError: '',
    createOrderIsLoading: false,
    submitOrderIsLoading: false,
    tempForm: null,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setDeliveryPrice: (state, action: PayloadAction<number>) => {
            state.deliveryPrice = action.payload;
        },
        resetPromoCode: (state) => {
            state.promoCode = null;
            state.promoCodeIsLoading = false;
            state.promoCodeError = '';
        },
        setTempForm: (state, action: PayloadAction<IOrderFormValues>) => {
            state.tempForm = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(checkPromoCode.pending, (state) => {
            state.promoCodeIsLoading = true;
        });
        builder.addCase(checkPromoCode.fulfilled, (state, action) => {
            state.promoCodeIsLoading = false;
            state.promoCode = action.payload;
            state.promoCodeError = '';
        });
        builder.addCase(checkPromoCode.rejected, (state, action) => {
            state.promoCodeIsLoading = false;
            state.promoCode = null;
            state.promoCodeError = action.payload as string;
        });

        builder.addCase(createOrder.pending, (state) => {
            state.createOrderIsLoading = true;
        });

        builder.addCase(submitOrder.pending, (state) => {
            state.submitOrderIsLoading = true;
        });

        builder.addMatcher(isAnyOf(createOrder.fulfilled, createOrder.rejected), (state) => {
            state.createOrderIsLoading = false;
        });
        builder.addMatcher(isAnyOf(submitOrder.fulfilled, submitOrder.rejected), (state) => {
            state.submitOrderIsLoading = false;
        });
    },
});

export const { setDeliveryPrice, resetPromoCode, setTempForm } = orderSlice.actions;

export default orderSlice.reducer;
