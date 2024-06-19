'use client';

import { useCallback } from 'react';
import { LS_KEYS } from '@/constants/keys';
import { useLS } from './useLS';
import { useTypedSelector } from './useTypedSelector';

export const useAuthUser = () => {
    const [accessToken, _setAccessToken, removeAccessToken] = useLS<string | null>(LS_KEYS.accessToken, null);
    const userState = useTypedSelector(({ user }) => user);

    const logout = useCallback(() => {
        removeAccessToken();
        window.location.reload();
    }, []);

    return {
        ...userState,
        isLoggedIn: !!accessToken,
        logout,
    };
};
