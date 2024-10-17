'use client';

import { useCallback } from 'react';

import { LS_KEYS } from '@/constants/keys';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { selectUser, selectUserIsLoaded } from '@/redux/slices/user/selectors';

import { useLS } from './useLS';

export const useAuthUser = () => {
    const [accessToken, _setAccessToken, removeAccessToken] = useLS<string | null>(LS_KEYS.accessToken, null);

    const userState = useAppSelector(selectUser);
    const isLoaded = useAppSelector(selectUserIsLoaded);

    const logout = useCallback(() => {
        removeAccessToken();
        window.location.reload();
    }, []);

    return {
        user: userState,
        isLoaded,
        isLoggedIn: !!accessToken,
        logout,
    };
};
