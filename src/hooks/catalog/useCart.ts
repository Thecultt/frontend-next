'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { addCartItem, changeCheckCartItem, removeCartItem, setCartIsVisibleMessage } from '@/redux/actions/cart';
import { CartItem } from '@/models/ICartItem';
import { useAuthUser } from '@/hooks/useAuthUser';

import { useTypedSelector } from '../useTypedSelector';

export const useCart = () => {
    const dispatch = useDispatch();

    const {
        user: { email },
    } = useAuthUser();
    const { items, isLoading, isVisibleMessage } = useTypedSelector(({ cart }) => cart);

    const mappedItems = Object.keys(items).map((article) => items[article]);

    const cart = React.useMemo(() => mappedItems.filter((item) => !item.is_jewelry), [mappedItems]);
    const jewelryCart = React.useMemo(() => mappedItems.filter((item) => item.is_jewelry), [mappedItems]);

    const changeCheck = (article: string, status: boolean) => {
        dispatch(changeCheckCartItem(article, status));
    };

    const removeFromCart = (item: CartItem) => {
        dispatch(removeCartItem(item, email));
    };

    const addToCart = (item: CartItem) => {
        dispatch(setCartIsVisibleMessage(true));

        dispatch(addCartItem(item, email));

        setTimeout(() => {
            dispatch(setCartIsVisibleMessage(false));
        }, 5000);
    };

    return {
        allCart: mappedItems,
        cart,
        jewelryCart,
        isLoading,
        isVisibleMessage,
        changeCheck,
        removeFromCart,
        addToCart,
    };
};
