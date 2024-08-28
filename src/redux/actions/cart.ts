import { Dispatch } from 'redux';

import $api from '@/http';
import { ProductPage } from '@/models/IProduct';
import { CartItem } from '@/models/ICartItem';
import { sendMindbox } from '@/functions/mindbox';
import { localStorageService } from '@/services/storage';
import { LS_KEYS } from '@/constants/keys';
import { pushDataLayer } from '@/functions/pushDataLayer';

import { CartActionTypes, CartActions, ICartItemsState } from '../types/ICart';

export const checkAvailabilityCartItems = (items: ICartItemsState) => async (dispatch: Dispatch<CartActions>) => {
    dispatch({
        type: CartActionTypes.SET_CART_IS_LOADING,
        payload: true,
    });

    await Promise.all(
        Object.keys(items).map(async (article) => {
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
                },
            } = await $api.get<ProductPage>(`/product/${article}`);

            const canBuy = !!availability && !is_trial;

            dispatch({
                type: CartActionTypes.CHANGE_CART_ITEMS,
                payload: {
                    article,
                    data: {
                        id,
                        checked: !canBuy ? false : items[article].checked,
                        article,
                        category,
                        subcategory,
                        image: images[0],
                        manufacturer,
                        name,
                        price,
                        old_price,
                        availability,
                        is_trial,
                        condition,
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

export const addCartItem = (item: CartItem) => {
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
            email: `${localStorageService?.getItem<string>(LS_KEYS.email, '')}`,
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

export const removeCartItem = (item: CartItem) => {
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
            email: `${localStorageService?.getItem<string>(LS_KEYS.email, '')}`,
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

export const setCartIsVisibleMessage = (status: boolean) => ({
    type: CartActionTypes.SET_CART_IS_VISIBLE_MESSAGE,
    payload: status,
});

export const setCartItems = (cart: ICartItemsState) => ({
    type: CartActionTypes.SET_CART_ITEMS,
    payload: cart,
});
