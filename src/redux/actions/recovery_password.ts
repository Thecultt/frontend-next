import axios from 'axios';
import { Dispatch } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { LS_KEYS } from '@/constants/keys';
import { localStorageService } from '@/services/storage';
import { getPath } from '@/functions/getPath';
import { ReglogStateTypesNotLogin } from '@/types/reglog';

import { RecoveryPasswordActions, RecoveryPasswordActionTypes } from '../types/IRecoveryPassword';

export const sendRecoveryPassword = (email: string, isRedirect?: boolean, router?: AppRouterInstance) => {
    return async (dispatch: Dispatch<RecoveryPasswordActions>) => {
        dispatch({
            type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_SEND,
            payload: true,
        });

        return axios
            .post(`${process.env.NEXT_PUBLIC_API_DOMEN}/reset_password/`, {
                email,
            })
            .then(() => {
                // TODO
                // const ym = window.ym || (window.ym = []);
                // ym(68184745, 'reachGoal', 'forgot_password');

                if (isRedirect) {
                    const { pathname, search } = window.location;
                    router?.replace(
                        getPath({ pathname, search, hash: ReglogStateTypesNotLogin.RECOVERY_PASSWORD_SUCCESS }),
                    );
                }

                dispatch({
                    type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_SEND,
                    payload: false,
                });
            })
            .catch(() => {
                dispatch({
                    type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_SEND,
                    payload: false,
                });

                // if (response) {
                // 	throw new SubmissionError({
                // 		email: "Неверный пароль",
                // 	});
                // }
            });
    };
};

export const sendRecoveryPasswordConfirmed = (password: string, code: string) => {
    return async (dispatch: Dispatch<RecoveryPasswordActions>) => {
        dispatch({
            type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_SEND,
            payload: true,
        });

        return axios
            .post(`${process.env.NEXT_PUBLIC_API_DOMEN}/reset_password_confirm/`, { password, code })
            .then(({ data }) => {
                localStorageService?.setItem(LS_KEYS.accessToken, data.access as string, { value: 1, unit: 'month' });

                window.location.href = '/';

                dispatch({
                    type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_SEND,
                    payload: false,
                });
            })
            .catch(({ response }) => {
                dispatch({
                    type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_SEND,
                    payload: false,
                });
            });
    };
};
