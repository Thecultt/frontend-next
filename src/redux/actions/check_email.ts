import axios from 'axios';
import { Dispatch } from 'react';

import { checkWarningEmail } from '@/functions/checkWarningEmail';
import { ReglogStateTypesNotLogin } from '@/types/reglog';
import { sendReachGoal } from '@/functions/yandex';

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

        let nextPopupType = ReglogStateTypesNotLogin.LOGIN;

        sendReachGoal('login_email');

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

export const setCheckEmailValue = (email: string) => ({
    type: CheckEmailActionTypes.SET_CHECK_EMAIL_EMAIL,
    payload: email,
});
