'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { addCartItem, changeCheckCartItem, removeCartItem, setCartIsVisibleMessage } from '@/redux/actions/cart';
import { CartItem } from '@/models/ICartItem';

import { useTypedSelector } from '../useTypedSelector';

export const useCart = () => {
    const dispatch = useDispatch();

    const { items, isLoading, isVisibleMessage } = useTypedSelector(({ cart }) => cart);

    const mappedItems = Object.keys(items).map((article) => items[article]);

    const cart = React.useMemo(() => mappedItems.filter((item) => !item.is_jewelry), [mappedItems]);
    const jewelryCart = React.useMemo(() => mappedItems.filter((item) => item.is_jewelry), [mappedItems]);

    const changeCheck = (article: string, status: boolean) => {
        dispatch(changeCheckCartItem(article, status));
    };

    const removeFromCart = (item: CartItem) => {
        dispatch(removeCartItem(item));
    };

    const addToCart = (item: CartItem) => {
        dispatch(setCartIsVisibleMessage(true));

        dispatch(addCartItem(item));

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
