'use client';

import { useCallback } from 'react';

import { LS_KEYS } from '@/constants/keys';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import {
    selectUser,
    selectUserFetchIsLoading,
    selectUserIsLoaded,
    selectUserUpdateIsLoading,
} from '@/redux/slices/user/selectors';

import { useLS } from './useLS';

export const useAuthUser = () => {
    const [accessToken, _setAccessToken, removeAccessToken] = useLS<string | null>(LS_KEYS.accessToken, null);

    const userState = useAppSelector(selectUser);
    const isLoaded = useAppSelector(selectUserIsLoaded);
    const fetchIsLoading = useAppSelector(selectUserFetchIsLoading);
    const updateIsLoading = useAppSelector(selectUserUpdateIsLoading);

    const logout = useCallback(() => {
        removeAccessToken();
        window.location.reload();
    }, []);

    return {
        user: userState,
        isLoaded,
        isLoggedIn: !!accessToken,
        fetchIsLoading,
        updateIsLoading,
        logout,
    };
};
