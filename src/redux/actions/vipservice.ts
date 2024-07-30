import { Dispatch } from 'redux';

import $api from '@/http';

import { VipserviceActions, VipserviceActionTypes } from '../types/IVipservice';

export const sendVipserviceForm =
    (data: { phone: string; name: string }) => async (dispatch: Dispatch<VipserviceActions>) => {
        dispatch({
            type: VipserviceActionTypes.SET_VIPSERVICE_IS_SENDING,
            payload: true,
        });

        await $api.post(`/create_concierge/`, data);

        window?.dataLayer?.push({ ecommerce: null }); // Clear the previous ecommerce object.
        window?.dataLayer?.push({
            event: 'concierge_send_application',
            ecommerce: {
                timestamp: Math.floor(Date.now() / 1000),
            },
        });

        dispatch({
            type: VipserviceActionTypes.SET_VIPSERVICE_IS_SENDING,
            payload: false,
        });

        dispatch({
            type: VipserviceActionTypes.SET_VIPSERVICE_IS_SEND,
            payload: true,
        });
    };

export const setVipserviceIsSend = (status: boolean) => ({
    type: VipserviceActionTypes.SET_VIPSERVICE_IS_SEND,
    payload: status,
});
