import { Dispatch } from 'redux';

import $api from '@/http/';
import { ConciergeCategory, ConciergeProduct } from '@/models/IConcierge';

import { ConciergeActions, ConciergeActionTypes } from '../types/IConcierge';

export const setConciergeCurrentCategory = (category: string) => ({
    type: ConciergeActionTypes.SET_CONCIERGE_CURRENT_CATEGORY,
    payload: category,
});

export const setConciergeCurrentBrand = (brand: string) => ({
    type: ConciergeActionTypes.SET_CONCIERGE_CURRENT_BRAND,
    payload: brand,
});

export const fetchConciergeCategories = () => async (dispatch: Dispatch<ConciergeActions>) => {
    const { data } = await $api.get<{
        [key: string]: ConciergeCategory;
    }>(`/buyer_goods`);

    dispatch({
        type: ConciergeActionTypes.SET_CONCIERGE_CURRENT_CATEGORY,
        payload: Object.keys(data)[0],
    });

    dispatch({
        type: ConciergeActionTypes.SET_CONCIERGE_CATEGORIES,
        payload: data,
    });
};

export const fetchConciergeProduct = (id: string) => async (dispatch: Dispatch<ConciergeActions>) => {
    dispatch({
        type: ConciergeActionTypes.SET_CONCIERGE_IS_LOADED_PRODUCT,
        payload: false,
    });

    const { data } = await $api.get<ConciergeProduct>(`/buyer_good/${id}`);

    dispatch({
        type: ConciergeActionTypes.SET_CONCIERGE_PRODUCT,
        payload: data,
    });
};

export const sendConciergeProductApplication =
    (info: { fio: string; phone: string; email: string }, good_id: number) =>
    (dispatch: Dispatch<ConciergeActions>) => {
        dispatch({
            type: ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_PRODUCT_PAGE,
            payload: true,
        });

        $api.post<ConciergeProduct>(`/send_goods_request/`, {
            ...info,
            good_id,
        }).then(() => {
            dispatch({
                type: ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_PRODUCT_PAGE_SUCCESS,
                payload: true,
            });

            dispatch({
                type: ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_PRODUCT_PAGE,
                payload: false,
            });
        });
    };

export const setConciergeProductIsSendFormProductPage = (status: boolean) => ({
    type: ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_PRODUCT_PAGE_SUCCESS,
    payload: status,
});

export const sendConciergeProductCustomApplication =
    (info: { fio: string; phone: string; email: string; brand: string; good_link: string; additional_link: string }) =>
    (dispatch: Dispatch<ConciergeActions>) => {
        dispatch({
            type: ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_CUSTOM_PRODUCT,
            payload: true,
        });

        $api.post<ConciergeProduct>(`/send_custom_goods_request/`, info).then(() => {
            dispatch({
                type: ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_CUSTOM_PRODUCT_SUCCESS,
                payload: true,
            });

            dispatch({
                type: ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_CUSTOM_PRODUCT,
                payload: false,
            });
        });
    };

export const setConciergeProductIsSendFormCustomProduct = (status: boolean) => ({
    type: ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_CUSTOM_PRODUCT_SUCCESS,
    payload: status,
});
