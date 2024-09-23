'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';

import { sendSubmitOrder } from '@/redux/actions/order';
import { removeCartItemByArticle } from '@/redux/actions/cart';
import { APP_ROUTE } from '@/constants/routes';

import { useCart } from '../catalog/useCart';

export const useOrder = () => {
    const dispatch = useDispatch();
    const router = useRouter();

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

    const submitOrder = (orderId: number) => {
        const updateCart = () => {
            cartItems.forEach((item) => {
                if (item.checked) {
                    dispatch(removeCartItemByArticle(item.article));
                }
            });
        };

        dispatch(
            sendSubmitOrder(orderId, () => {
                updateCart();
                router.push(`${APP_ROUTE.order}/${orderId}`);
            }) as any,
        );
    };

    return {
        cartItems,
        cartSum,
        cartIsLoading,
        isJewelry,
        submitOrder,
    };
};
