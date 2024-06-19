import { Dispatch } from 'react';

import $api from '@/http';
import { CabinetSellOption } from '@/models/ICabinetSellOption';
import { YM_KEYS } from '@/constants/keys';
import { getUtm } from '@/functions/getUtm';

import {
    CabinetSellActionTypes,
    CabinetSellActions,
    CabinetSellTypes,
    CabinetSellStepKeys,
} from '../types/ICabinetSell';

export const setCabinetSellCurrentStep = (step: CabinetSellStepKeys) => ({
    type: CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_STEP,
    payload: step,
});

export const setCabinetSellCurrentType = (type: CabinetSellTypes) => ({
    type: CabinetSellActionTypes.SET_CABINET_SELL_CURRENT_TYPE,
    payload: type,
});

export const sendCreateCabinetSell = (data: any) => (dispatch: Dispatch<CabinetSellActions>) => {
    dispatch({
        type: CabinetSellActionTypes.SET_CABINET_SELL_IS_SENDING,
        payload: true,
    });

    const ymUidRow = localStorage.getItem(YM_KEYS.uid);
    const ymUid = ymUidRow ? JSON.parse(ymUidRow) || '' : '';

    const utm = getUtm();

    const requestData = {
        ...data,
        ...utm,
        [YM_KEYS.uid]: ymUid,
    };

    $api.post('/create_sell/', requestData).then(({ data }) => {
        window?.dataLayer?.push({ ecommerce: null }); // Clear the previous ecommerce object.
        window?.dataLayer?.push({
            event: 'application_sent',
            ecommerce: {
                applacation_id: data.id,
                timestamp: Math.floor(Date.now() / 1000),
            },
        });

        dispatch({
            type: CabinetSellActionTypes.SET_CABINET_SELL_IS_SEND,
            payload: true,
        });

        dispatch({
            type: CabinetSellActionTypes.SET_CABINET_SELL_IS_SENDING,
            payload: false,
        });

        localStorage.removeItem('sell-info-form');
        localStorage.removeItem('sell-images-form');
        localStorage.removeItem('sell-contact-form');
    });
};

export const sendCreateCabinetSellImage = async (image: any) => {
    const { images } = await $api
        .post<{ images: string[] }>(`/upload_images/`, { images: [image] })
        .then(({ data }) => data);

    return images[0];
};

export const fetchCabinetSellParameters = () => async (dispatch: Dispatch<CabinetSellActions>) => {
    const { data } = await $api.get<CabinetSellOption[]>(`/sell_options/`);

    const newObj: { [key: string]: CabinetSellOption } = {};

    data.map((item) => {
        newObj[item.name] = item;
    });

    dispatch({
        type: CabinetSellActionTypes.SET_CABINET_SELL_PARAMETERS,
        payload: newObj,
    });
};

export const fetchCabinetSellsList = () => async (dispatch: Dispatch<CabinetSellActions>) => {
    const { data } = await $api.get(`/sells/`);

    dispatch({
        type: CabinetSellActionTypes.SET_CABINET_SELL_SELLS_LIST,
        payload: data,
    });

    // const newObj: { [key: string]: CabinetSellOption } = {}

    // data.map((item) => {
    // 	newObj[item.name] = item
    // })

    // dispatch({
    // 	type: CabinetSellActionTypes.SET_CABINET_SELL_PARAMETERS,
    // 	payload: newObj
    // })
};
