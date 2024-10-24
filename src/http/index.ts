import axios from 'axios';

import { localStorageService } from '@/services/storage';
import { LS_KEYS } from '@/constants/keys';
import { APP_ROUTE } from '@/constants/routes';
import { API_DOMAIN } from '@/constants/env';
import { authAPI } from '@/services/api';
import { showToast } from '@/shared/ui';

const clearTokens = () => {
    localStorageService?.removeItem(LS_KEYS.accessToken);
    localStorageService?.removeItem(LS_KEYS.refreshToken);
};

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
                showToast.error('Ошибка сервера');
            }

            if (error.response.status == 401 && !originalRequest._isRetry) {
                originalRequest._isRetry = true;

                try {
                    const refresh = localStorageService?.getItem<string>(LS_KEYS.refreshToken);

                    if (!refresh) {
                        throw new Error('Refresh token not found');
                    }

                    const { data } = await authAPI.refreshToken(refresh);
                    localStorageService?.setItem(LS_KEYS.accessToken, data.access);

                    return $api.request(originalRequest);
                } catch (e) {
                    clearTokens();
                    window.location.href = APP_ROUTE.home;
                }
            }
        }

        return Promise.reject(error);
    },
);

export default $api;
