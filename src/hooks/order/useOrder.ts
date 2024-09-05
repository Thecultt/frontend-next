'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

import { useCart } from '../catalog/useCart';

export const useOrder = () => {
    const searchParams = useSearchParams();
    const cartType = searchParams.get('type');

    const isJewelry = cartType === 'jewelry';

    const { cart, jewelryCart, isLoading: cartIsLoading } = useCart();

    const cartItems = React.useMemo(() => (isJewelry ? jewelryCart : cart), [isJewelry, cart, jewelryCart]);
    const cartSum = React.useMemo(
        () =>
            cartItems
                .filter((item) => item.checked && !!item.availability && !item.is_trial)
                .reduce((acc, cur) => acc + cur.price, 0),
        [cartItems],
    );

    return {
        cartItems,
        cartSum,
        cartIsLoading,
        isJewelry,
    };
};
