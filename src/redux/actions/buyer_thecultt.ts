import { Dispatch } from 'redux';

import $api from '@/http/';
import { BuyerTheCulttCategory, BuyerTheCulttProduct } from '@/models/IBuyerTheCultt';

import { BuyerTheCulttActions, BuyerTheCulttActionTypes } from '../types/IBuyerTheCultt';

export const fetchBuyerTheCulttCategories = () => async (dispatch: Dispatch<BuyerTheCulttActions>) => {
    const { data } = await $api.get<{
        [key: string]: BuyerTheCulttCategory;
    }>(`/buyer_goods`);

    dispatch({
        type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_CATEGORIES,
        payload: data,
    });
};

export const fetchBuyerTheCulttProduct = (id: string) => async (dispatch: Dispatch<BuyerTheCulttActions>) => {
    dispatch({
        type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_LOADED_PRODUCT,
        payload: false,
    });

    const { data } = await $api.get<BuyerTheCulttProduct>(`/buyer_good/${id}`);

    dispatch({
        type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_PRODUCT,
        payload: data,
    });
};

export const sendBuyerTheCulttProductApplication =
    (info: { fio: string; phone: string; email: string }, good_id: number) =>
    (dispatch: Dispatch<BuyerTheCulttActions>) => {
        dispatch({
            type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_PRODUCT_PAGE,
            payload: true,
        });

        $api.post<BuyerTheCulttProduct>(`/send_goods_request/`, {
            ...info,
            good_id,
        }).then(() => {
            dispatch({
                type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_PRODUCT_PAGE_SUCCESS,
                payload: true,
            });

            dispatch({
                type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_PRODUCT_PAGE,
                payload: false,
            });
        });
    };

export const setBuyerTheCulttProductIsSendFormProductPage = (status: boolean) => ({
    type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_PRODUCT_PAGE_SUCCESS,
    payload: status,
});

export const sendBuyerTheCulttProductCustomApplication =
    (info: { fio: string; phone: string; email: string; brand: string; good_link: string; additional_link: string }) =>
    (dispatch: Dispatch<BuyerTheCulttActions>) => {
        dispatch({
            type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_CUSTOM_PRODUCT,
            payload: true,
        });

        $api.post<BuyerTheCulttProduct>(`/send_custom_goods_request/`, info).then(() => {
            dispatch({
                type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_CUSTOM_PRODUCT_SUCCESS,
                payload: true,
            });

            dispatch({
                type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_CUSTOM_PRODUCT,
                payload: false,
            });
        });
    };

export const setBuyerTheCulttProductIsSendFormCustomProduct = (status: boolean) => ({
    type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_CUSTOM_PRODUCT_SUCCESS,
    payload: status,
});
