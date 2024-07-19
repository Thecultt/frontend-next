import axios from 'axios';

import store from '@/redux/store';
import { setIsNotificationServerError } from '@/redux/actions/notifications_server';
import { localStorageService } from '@/services/storage';
import { LS_KEYS } from '@/constants/keys';
import { APP_ROUTE } from '@/constants/routes';

const $api = axios.create({
    withCredentials: false,
    baseURL: process.env.NEXT_PUBLIC_API_DOMEN,
});

$api.interceptors.request.use((config: any) => {
    config.headers.Authorization = `${localStorageService?.getItem<string>(LS_KEYS.accessToken, '')}`;

    return config;
});

$api.interceptors.response.use(
    (config: any) => {
        return config;
    },
    async (error: any) => {
        const originalRequest = error.config;

        if (error.response) {
            if (error.response.status == 500) {
                store.dispatch(setIsNotificationServerError(true, 'Ошибка сервера') as any);
            }

            if (error.response.status == 401 && error.config && !error.config._isRetry) {
                originalRequest._isRetry = true;

                try {
                    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_DOMEN}/api/token/refresh/`, {
                        refresh: localStorageService?.getItem(LS_KEYS.refreshToken),
                    });

                    localStorageService?.setItem(LS_KEYS.accessToken, response.data.access);

                    return $api.request(originalRequest);
                } catch (e) {
                    if (localStorageService?.getItem(LS_KEYS.accessToken)) {
                        localStorageService?.removeItem(LS_KEYS.accessToken);
                        window.location.reload();
                    }
                }
            }
        }

        throw error;
    },
);

export default $api;
