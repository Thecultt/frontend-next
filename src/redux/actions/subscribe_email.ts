import { Dispatch } from 'react';

import { SubscribeEmailActions, SubscribeEmailActionTypes } from '../types/ISubscribeEmail';
import { sendMindbox } from '@/functions/mindbox';

export const sendSubscribeEmail = (data: { email: string; type: string }) => {
    return async (dispatch: Dispatch<SubscribeEmailActions>) => {
        dispatch({
            type: SubscribeEmailActionTypes.SET_SUBSCRIBE_EMAIL_IS_SENDING,
            payload: true,
        });

        try {
            await sendMindbox('KlientImportPriPodpiskeZaGuide', {
                customer: {
                    email: data.email,
                    customFields: {
                        tipKlienta: data.type,
                        istochnikPodpiski: 'FormaSGaidom',
                    },
                    subscriptions: [
                        {
                            pointOfContact: 'Email',
                            isSubscribed: true,
                        },
                    ],
                },
                executionDateTimeUtc: new Date(),
            });

            dispatch({
                type: SubscribeEmailActionTypes.SET_SUBSCRIBE_EMAIL_IS_SEND,
                payload: true,
            });

            dispatch({
                type: SubscribeEmailActionTypes.SET_SUBSCRIBE_EMAIL_IS_SENDING,
                payload: false,
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const setIsSendSubscribeEmail = (status: boolean) => ({
    type: SubscribeEmailActionTypes.SET_SUBSCRIBE_EMAIL_IS_SEND,
    payload: status,
});
