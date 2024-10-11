import axios from 'axios';

import { store } from '@/redux/store';
import { setIsNotificationServerError } from '@/redux/actions/notifications_server';
import { localStorageService } from '@/services/storage';
import { LS_KEYS } from '@/constants/keys';
import { APP_ROUTE } from '@/constants/routes';
import { API_DOMAIN } from '@/constants/env';
import { authAPI } from '@/services/api';

const $api = axios.create({
    baseURL: API_DOMAIN,
    withCredentials: false,
});

$api.interceptors.request.use((config: any) => {
    config.headers.Authorization = `${localStorageService?.getItem<string>(LS_KEYS.accessToken, '')}`;

    return config;
});

$api.interceptors.response.use(
    (config: any) => config,
    async (error: any) => {
        const originalRequest = error.config;

        if (error.response) {
            if (error.response.status == 500) {
                store.dispatch(setIsNotificationServerError(true, 'Ошибка сервера') as any);
            }

            if (error.response.status == 401 && error.config && !error.config._isRetry) {
                originalRequest._isRetry = true;

                try {
                    const refresh = localStorageService?.getItem<string>(LS_KEYS.refreshToken);

                    if (refresh) {
                        const { data } = await authAPI.refreshToken(refresh);
                        localStorageService?.setItem(LS_KEYS.accessToken, data.access);

                        return $api.request(originalRequest);
                    }
                } catch (e) {
                    if (localStorageService?.hasItem(LS_KEYS.accessToken)) {
                        localStorageService?.removeItem(LS_KEYS.accessToken);
                        window.location.href = APP_ROUTE.home;
                    }
                }
            }
        }

        throw error;
    },
);

export default $api;
