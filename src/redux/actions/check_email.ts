import axios from 'axios';
import { Dispatch } from 'react';

import { checkWarningEmail } from '@/functions/checkWarningEmail';
import { localStorageService } from '@/services/storage';
import { LS_KEYS } from '@/constants/keys';
import { ReglogStateTypesNotLogin } from '@/types/reglog';

import { CheckEmailActionTypes, CheckEmailActions } from '../types/ICheckEmail';
import { sendRecoveryPassword } from './recovery_password';

export const sendCheckEmail =
    (email: string, callback: (type: ReglogStateTypesNotLogin) => void) =>
    async (dispatch: Dispatch<CheckEmailActions>) => {
        dispatch({
            type: CheckEmailActionTypes.SET_CHECK_EMAIL_EMAIL,
            payload: email,
        });

        dispatch({
            type: CheckEmailActionTypes.SET_CHECK_EMAIL_IS_SEND,
            payload: true,
        });

        localStorageService?.setItem(LS_KEYS.email, email);

        let nextPopupType = ReglogStateTypesNotLogin.LOGIN;

        const ym = window?.ym || (window.ym = []);

        ym(68184745, 'reachGoal', 'login_email');

        await axios
            .post(`${process.env.NEXT_PUBLIC_API_DOMEN}/email_check/`, { email })
            .then(() => {
                if (checkWarningEmail(email)) {
                    nextPopupType = ReglogStateTypesNotLogin.WARNING_BLOCKED_EMAIL_REGISTER;
                } else {
                    nextPopupType = ReglogStateTypesNotLogin.REGISTER;
                }

                dispatch({
                    type: CheckEmailActionTypes.SET_CHECK_EMAIL_IS_SEND,
                    payload: false,
                });
            })
            .catch(({ response: { data } }) => {
                if (data.login_first_time) {
                    nextPopupType = ReglogStateTypesNotLogin.OLD_USER_NEW_PASSWORD;

                    dispatch(sendRecoveryPassword(email) as any);
                } else if (checkWarningEmail(email)) {
                    nextPopupType = ReglogStateTypesNotLogin.WARNING_BLOCKED_EMAIL_LOGIN;
                } else {
                    nextPopupType = ReglogStateTypesNotLogin.LOGIN;
                }

                dispatch({
                    type: CheckEmailActionTypes.SET_CHECK_EMAIL_IS_SEND,
                    payload: false,
                });

                dispatch({
                    type: CheckEmailActionTypes.SET_CHECK_EMAIL_IS_EXISTING,
                    payload: true,
                });
            });

        callback(nextPopupType);
    };
