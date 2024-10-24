'use client';

import React from 'react';

import { CartItem } from '@/models/ICartItem';
import { useAuthUser } from '@/hooks/useAuthUser';
import { sendMindbox } from '@/functions/mindbox';
import { pushDataLayer } from '@/functions/pushDataLayer';
import {
    addItemToCart,
    removeItemFromCartByArticle,
    setCartIsVisibleMessage,
    toggleItemChecked,
} from '@/redux/slices/cart/slice';
import { selectCartIsLoading, selectCartIsVisibleMessage, selectCartItems } from '@/redux/slices/cart/selectors';
import { checkAvailabilityCartItems } from '@/redux/slices/cart/asyncActions';

import { useAppDispatch } from '../redux/useAppDispatch';
import { useAppSelector } from '../redux/useAppSelector';

export const useCart = () => {
    const dispatch = useAppDispatch();

    const {
        user: { email },
    } = useAuthUser();

    const allCart = useAppSelector(selectCartItems);
    const isLoading = useAppSelector(selectCartIsLoading);
    const isVisibleMessage = useAppSelector(selectCartIsVisibleMessage);

    const cart = React.useMemo(() => allCart.filter((item) => !item.is_jewelry), [allCart]);
    const jewelryCart = React.useMemo(() => allCart.filter((item) => item.is_jewelry), [allCart]);

    const toggleChecked = (article: string) => {
        dispatch(toggleItemChecked(article));
    };

    const removeFromCart = (article: string) => {
        dispatch(removeItemFromCartByArticle(article));

        try {
            const item = allCart.find((item) => item.article === article);

            if (!item) {
                throw new Error('Cart item not found');
            }

            pushDataLayer('remove_from_cart', {
                items: [
                    {
                        item_name: item.name,
                        item_id: `${item.id}`,
                        price: `${item.price}`,
                        item_brand: item.manufacturer,
                        item_category: item.category,
                        item_category2: item.subcategory,
                        item_category3: '-',
                        item_category4: '-',
                        item_list_name: 'Search Results',
                        item_list_id: item.article,
                        index: 1,
                        quantity: 1,
                    },
                ],
            });

            sendMindbox('Website.ClearCart', {
                customer: {
                    email: email ?? '',
                },
                removeProductFromList: {
                    product: {
                        ids: {
                            website: item.id,
                        },
                    },
                    pricePerItem: item.price,
                },
                executionDateTimeUtc: new Date(),
            });
        } catch (e) {
            console.error('removeFromCart metrics', e);
        }
    };

    const addToCart = (item: CartItem) => {
        dispatch(addItemToCart(item));
        dispatch(setCartIsVisibleMessage(true));

        try {
            pushDataLayer('add_to_cart', {
                items: [
                    {
                        item_name: item.name,
                        item_id: `${item.id}`,
                        price: `${item.price}`,
                        item_brand: item.manufacturer,
                        item_category: item.category,
                        item_category2: item.subcategory,
                        item_category3: '-',
                        item_category4: '-',
                        item_list_name: 'Search Results',
                        item_list_id: item.article,
                        index: 1,
                        quantity: 1,
                    },
                ],
            });

            sendMindbox('Website.SetCart', {
                addProductToList: {
                    product: {
                        ids: {
                            website: item.id,
                        },
                    },
                    pricePerItem: item.price,
                },
                customer: {
                    email: email ?? '',
                },
            });
        } catch (e) {
            console.error('addToCart metrics', e);
        }

        setTimeout(() => {
            dispatch(setCartIsVisibleMessage(false));
        }, 5000);
    };

    const checkAvailabilityCart = (items?: CartItem[]) => {
        dispatch(checkAvailabilityCartItems(items ?? []));
    };

    return {
        allCart,
        cart,
        jewelryCart,
        isLoading,
        isVisibleMessage,
        isMoreOneCart: jewelryCart.length > 0 && cart.length > 0,
        removeFromCart,
        addToCart,
        checkAvailabilityCart,
        toggleChecked,
    };
};
