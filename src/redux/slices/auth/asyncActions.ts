import { createAsyncThunk } from '@reduxjs/toolkit';

import { authAPI } from '@/services/api';
import {
    CheckEmailResponse,
    IAccessRefreshTokens,
    LoginRequest,
    RecoveryPasswordConfirmRequest,
    RegisterRequest,
} from '@/types/api';
import { ReglogStateTypesNotLogin } from '@/types/reglog';
import { localStorageService } from '@/services/storage';
import { checkWarningEmail } from '@/functions/checkWarningEmail';
import { pushDataLayer } from '@/functions/pushDataLayer';
import { sendMindbox } from '@/functions/mindbox';
import { sendReachGoal } from '@/functions/yandex';
import { LS_KEYS } from '@/constants/keys';
import { isAxiosError } from '@/functions/isAxiosError';
import { Noop } from '@/types/functions';
import { APP_ROUTE } from '@/constants/routes';

import { setEmail } from './slice';

const setTokens = (tokens: IAccessRefreshTokens) => {
    try {
        localStorageService?.setItem(LS_KEYS.accessToken, tokens.access, { value: 1, unit: 'month' });
        localStorageService?.setItem(LS_KEYS.refreshToken, tokens.refresh, { value: 1, unit: 'month' });
    } catch (e) {
        console.error('Error in setTokens', e);
    }
};

export const login = createAsyncThunk('auth/login', async (request: LoginRequest) => {
    const { data } = await authAPI.login(request);
    setTokens({ access: data.access, refresh: data.refresh });

    try {
        pushDataLayer('login');
        sendReachGoal('login_password');
        await sendMindbox('Website.AuthorizeCustomer', {
            customer: {
                ids: {
                    websiteID: `${data.id}`,
                },
                email: request.username,
            },
            executionDateTimeUtc: new Date(),
        });
    } catch (e) {
        console.error('Login metrics error', e);
    }

    const redirectReglog = localStorageService?.getItem<string>(LS_KEYS.redirectReglog, '');
    if (redirectReglog) {
        window.location.href = redirectReglog;
    } else {
        window.location.hash = '';
        window.location.reload();
    }
});

interface CheckEmailParams {
    email: string;
    callback: (type: ReglogStateTypesNotLogin) => void;
}

export const checkEmail = createAsyncThunk(
    'auth/checkEmail',
    async ({ email, callback }: CheckEmailParams, { dispatch }) => {
        dispatch(setEmail(email));

        const isWarningEmail = checkWarningEmail(email);
        const nextPopupType = await authAPI
            .checkEmail(email)
            .then(() =>
                isWarningEmail
                    ? ReglogStateTypesNotLogin.WARNING_BLOCKED_EMAIL_REGISTER
                    : ReglogStateTypesNotLogin.REGISTER,
            )
            .catch((e) => {
                if (isAxiosError<CheckEmailResponse>(e) && e.response && e.response.data.login_first_time) {
                    dispatch(recoveryPassword({ email }));
                    return ReglogStateTypesNotLogin.OLD_USER_NEW_PASSWORD;
                }

                return isWarningEmail
                    ? ReglogStateTypesNotLogin.WARNING_BLOCKED_EMAIL_LOGIN
                    : ReglogStateTypesNotLogin.LOGIN;
            });

        callback(nextPopupType);
        sendReachGoal('login_email');
    },
);

interface RecoveryPasswordParams {
    email: string;
    callback?: Noop;
}

export const recoveryPassword = createAsyncThunk(
    'auth/recoveryPassword',
    async ({ email, callback }: RecoveryPasswordParams) =>
        authAPI.recoveryPassword(email).then(() => {
            sendReachGoal('forgot_password');
            callback?.();
        }),
);

export const recoveryPasswordConfirm = createAsyncThunk(
    'auth/recoveryPasswordConfirm',
    async (payload: RecoveryPasswordConfirmRequest) =>
        authAPI.recoveryPasswordConfirm(payload).then(({ data }) => {
            setTokens(data);
            window.location.href = APP_ROUTE.home;
        }),
);

export const register = createAsyncThunk('auth/register', async (payload: RegisterRequest) =>
    authAPI.register(payload).then(({ data }) => {
        setTokens({ access: data.access, refresh: data.refresh });
        pushDataLayer('registration');

        const redirectReglog = localStorageService?.getItem<string>(LS_KEYS.redirectReglog, '');
        if (payload.promoCheckbox) {
            try {
                const mindboxOperation =
                    redirectReglog === APP_ROUTE.order
                        ? 'KlientImportPriPodpiskeVZakaze'
                        : 'KlientImportPriPodpiskeRegaLK';

                sendMindbox(mindboxOperation, {
                    customer: {
                        ids: {
                            websiteID: data.id,
                        },
                        discountCard: {
                            ids: {
                                number: '',
                            },
                        },
                        birthDate: '',
                        sex: '',
                        timeZone: '',
                        lastName: '',
                        firstName: payload.name,
                        middleName: payload.lastname,
                        fullName: '',
                        area: {
                            ids: {
                                externalId: '',
                            },
                        },
                        customFields: {
                            tipKlienta: '',
                            gorod: '',
                            istochnikPodpiski: 'PriRegistraciiLK',
                        },
                        email: payload.email,
                        mobilePhone: '',
                        subscriptions: [
                            {
                                pointOfContact: 'Email',
                                isSubscribed: payload.promoCheckbox,
                            },
                        ],
                    },
                    executionDateTimeUtc: new Date(),
                });
            } catch (e) {
                console.error('Register metrics error', e);
            }
        }

        if (redirectReglog) {
            window.location.href = `${redirectReglog}#${ReglogStateTypesNotLogin.WELCOME}`;
        } else {
            window.location.hash = ReglogStateTypesNotLogin.WELCOME;
            window.location.reload();
        }
    }),
);
