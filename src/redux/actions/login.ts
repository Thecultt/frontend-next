import axios from 'axios';
import { SubmissionError } from 'redux-form';
import { Dispatch } from 'react';

import { localStorageService } from '@/services/storage';
import { LS_KEYS } from '@/constants/keys';
import { sendMindbox } from '@/functions/mindbox';
import { sendReachGoal } from '@/functions/yandex';

import { LoginActions, LoginActionTypes } from '../types/ILogin';

export const sendLogin = (body: { username: string | null; password: string }) => {
    return async (dispatch: Dispatch<LoginActions>) => {
        dispatch({
            type: LoginActionTypes.SET_LOGIN_IS_SEND,
            payload: true,
        });

        return axios
            .post(`${process.env.NEXT_PUBLIC_API_DOMEN}/login/`, body)
            .then(({ data }) => {
                localStorageService?.setItem(LS_KEYS.accessToken, data.access as string, { value: 1, unit: 'month' });
                localStorageService?.setItem(LS_KEYS.refreshToken, data.refresh as string, { value: 1, unit: 'month' });

                window?.dataLayer?.push({ ecommerce: null }); // Clear the previous ecommerce object.
                window?.dataLayer?.push({
                    event: 'login',
                    ecommerce: {
                        timestamp: Math.floor(Date.now() / 1000),
                    },
                });

                sendReachGoal('login_password');

                try {
                    sendMindbox('Website.AuthorizeCustomer', {
                        customer: {
                            ids: {
                                websiteID: `${data.id}`,
                            },
                            email: `${body.username}`,
                        },
                        executionDateTimeUtc: new Date(),
                    });
                } catch (e) {
                    console.log(e);
                }

                const redirectReglog = localStorageService?.getItem<string>(LS_KEYS.redirectReglog, '');
                if (redirectReglog) {
                    window.location.href = redirectReglog;
                } else {
                    window.location.hash = '';
                    window.location.reload();
                }

                dispatch({
                    type: LoginActionTypes.SET_LOGIN_IS_SEND,
                    payload: false,
                });
            })
            .catch(() => {
                dispatch({
                    type: LoginActionTypes.SET_LOGIN_IS_SEND,
                    payload: false,
                });

                throw new SubmissionError({
                    password: 'Неверный пароль',
                });
            });
    };
};
