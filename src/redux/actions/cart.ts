import { Dispatch } from 'redux';

import $api from '@/http';
import { ProductPage } from '@/models/IProduct';
import { CartItem } from '@/models/ICartItem';
import { sendMindbox } from '@/functions/mindbox';
import { pushDataLayer } from '@/functions/pushDataLayer';

import { CartActionTypes, CartActions, ICartItemsState } from '../types/ICart';

export const checkAvailabilityCartItems = (items: CartItem[]) => async (dispatch: Dispatch<CartActions>) => {
    dispatch({
        type: CartActionTypes.SET_CART_IS_LOADING,
        payload: true,
    });

    await Promise.all(
        items.map(async (item) => {
            const {
                data: {
                    id,
                    images,
                    manufacturer,
                    category,
                    subcategory,
                    name,
                    price,
                    old_price,
                    availability,
                    is_trial,
                    condition,
                    is_jewelry,
                },
            } = await $api.get<ProductPage>(`/product/${item.article}`);

            const canBuy = !!availability && !is_trial;

            dispatch({
                type: CartActionTypes.CHANGE_CART_ITEMS,
                payload: {
                    article: item.article,
                    data: {
                        id,
                        checked: !canBuy ? false : item.checked,
                        article: item.article,
                        category,
                        subcategory,
                        image: images[0],
                        manufacturer,
                        name,
                        price: price ?? 0,
                        old_price,
                        availability,
                        is_trial,
                        condition,
                        is_jewelry,
                    },
                },
            });
        }),
    );

    dispatch({
        type: CartActionTypes.SET_CART_IS_LOADING,
        payload: false,
    });
};

export const addCartItem = (item: CartItem, email?: string) => {
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
            email: email ? email : '',
        },
    });

    return {
        type: CartActionTypes.ADD_CART_ITEMS,
        payload: item,
    };
};

export const changeCheckCartItem = (article: string, status: boolean) => ({
    type: CartActionTypes.CHANGE_CHECK_CART_ITEMS,
    payload: { article, status },
});

export const removeCartItem = (item: CartItem, email?: string) => {
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

    return {
        type: CartActionTypes.REMOVE_CART_ITEMS,
        payload: item.article,
    };
};

export const removeCartItemByArticle = (article: string) => ({
    type: CartActionTypes.REMOVE_CART_ITEMS,
    payload: article,
});

export const setCartIsVisibleMessage = (status: boolean) => ({
    type: CartActionTypes.SET_CART_IS_VISIBLE_MESSAGE,
    payload: status,
});

export const setCartItems = (cart: ICartItemsState) => ({
    type: CartActionTypes.SET_CART_ITEMS,
    payload: cart,
});
