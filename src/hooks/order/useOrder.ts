'use client';

import { useSearchParams } from 'next/navigation';
import { useCart } from '../catalog/useCart';

export const useOrder = () => {
    const searchParams = useSearchParams();
    const cartType = searchParams.get('type');

    const isJewelry = cartType === 'jewelry';

    const { cart, jewelryCart, isLoading } = useCart();

    return {
        cartItems: isJewelry ? jewelryCart : cart,
        cartIsLoading: isLoading,
        isJewelry,
    };
};
