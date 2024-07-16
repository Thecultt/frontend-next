'use client';

import React from 'react';

import { LS_KEYS } from '@/constants/keys';
import { useLS } from './useLS';

export const useReplaceLS = () => {
    const [_cart, setCartLS] = useLS<any>(LS_KEYS.cart, {});
    const [_token, setTokenLS] = useLS<string>(LS_KEYS.accessToken, '');

    React.useEffect(() => {
        const oldCartLS = localStorage.getItem('cart');
        if (oldCartLS) {
            setCartLS(JSON.parse(oldCartLS) as any);
            localStorage.removeItem('cart');
        }

        const oldAccessTokenLS = localStorage.getItem('accessToken');
        if (oldAccessTokenLS) {
            setTokenLS(oldAccessTokenLS);
            localStorage.removeItem('accessToken');
        }
    }, []);
};
