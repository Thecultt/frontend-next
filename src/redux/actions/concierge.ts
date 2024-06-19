import { Dispatch } from 'redux';

import $api from '@/http';

import { ConciergeActions, ConciergeActionTypes } from '../types/IConcierge';

export const sendConciergeForm =
    (data: { phone: string; name: string }) => async (dispatch: Dispatch<ConciergeActions>) => {
        dispatch({
            type: ConciergeActionTypes.SET_CONCIERGE_IS_SENDING,
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
            type: ConciergeActionTypes.SET_CONCIERGE_IS_SENDING,
            payload: false,
        });

        dispatch({
            type: ConciergeActionTypes.SET_CONCIERGE_IS_SEND,
            payload: true,
        });
    };

export const setConciergeIsSend = (status: boolean) => ({
    type: ConciergeActionTypes.SET_CONCIERGE_IS_SEND,
    payload: status,
});
