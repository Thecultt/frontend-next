'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { submitOrder as sendSubmitOrder } from '@/redux/slices/order/asyncActions';
import {
    selectOrderCreateIsLoading,
    selectOrderDeliveryPrice,
    selectOrderPromoCode,
    selectOrderSubmitIsLoading,
} from '@/redux/slices/order/selectors';
import { APP_ROUTE } from '@/constants/routes';
import { SEARCH_PARAMS_KEYS } from '@/constants/keys';

import { useCart } from '../catalog/useCart';
import { useAppSelector } from '../redux/useAppSelector';
import { useAppDispatch } from '../redux/useAppDispatch';

export const useOrder = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const searchParams = useSearchParams();
    const cartType = searchParams.get(SEARCH_PARAMS_KEYS.type);

    const isJewelry = cartType === 'jewelry';

    const deliveryPrice = useAppSelector(selectOrderDeliveryPrice);
    const promoCode = useAppSelector(selectOrderPromoCode);
    const orderCreateIsLoading = useAppSelector(selectOrderCreateIsLoading);
    const orderSubmitIsLoading = useAppSelector(selectOrderSubmitIsLoading);

    const orderIsLoading = orderCreateIsLoading || orderSubmitIsLoading;

    const { cart, jewelryCart, isLoading: cartIsLoading, removeFromCart } = useCart();

    const cartItems = React.useMemo(() => (isJewelry ? jewelryCart : cart), [isJewelry, cart, jewelryCart]);
    const availableCartItems = React.useMemo(
        () => cartItems.filter((item) => !!item.availability && !item.is_trial),
        [cartItems],
    );
    const checkedCartItems = React.useMemo(
        () => availableCartItems.filter((item) => item.checked),
        [availableCartItems],
    );

    const cartSum = React.useMemo(() => checkedCartItems.reduce((acc, cur) => acc + cur.price, 0), [checkedCartItems]);

    const submitOrder = (orderId: number) => {
        const updateCart = () => {
            checkedCartItems.forEach((item) => {
                removeFromCart(item.article);
            });
        };

        dispatch(
            sendSubmitOrder({
                orderId,
                onSuccess: () => {
                    updateCart();
                    router.push(`${APP_ROUTE.order}/${orderId}`);
                },
            }),
        );
    };

    return {
        cartItems,
        availableCartItems,
        checkedCartItems,
        cartSum,
        cartIsLoading,
        isJewelry,
        deliveryPrice,
        promoCode,
        orderIsLoading,
        submitOrder,
    };
};
