import { Dispatch } from 'react';

import $api from '@/http';
import { Product } from '@/models/IProduct';
import { sendMindbox } from '@/functions/mindbox';
import { pushDataLayer } from '@/functions/pushDataLayer';

import { FavoritesActionTypes, FavoritesActions } from '../types/IFavorites';

export const fetchFavorites = () => async (dispatch: Dispatch<FavoritesActions>) => {
    const {
        data: { items },
    } = await $api.get<{ items: Product[] }>(`/favorite-products/`);

    sendMindbox('Website.SetWishList', {
        productList: items.map((product) => ({
            product: {
                ids: {
                    website: `${product.id}`,
                },
            },
            count: 1,
            pricePerItem: product.price,
        })),
    });

    dispatch({
        type: FavoritesActionTypes.SET_FAVORITES_ITEMS,
        payload: items,
    });
};

export const sendSaveFavorite = (item: Product) => async (dispatch: Dispatch<FavoritesActions>) => {
    await $api.post(`/add-favorite-product/${item.id}/`);

    pushDataLayer('add_to_wishlist', {
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
        currency: 'RUB',
        value: `${item.price}`,
    });

    dispatch(fetchFavorites() as any);
};

export const sendRemoveFavorite = (item: Product) => async (dispatch: Dispatch<FavoritesActions>) => {
    await $api.delete(`/remove-favorite-product/${item.id}/`);

    try {
        sendMindbox('Website.RemoveFromWishList', {
            removeProductFromList: {
                product: {
                    ids: {
                        website: `${item.id}`,
                    },
                },
                pricePerItem: item.price,
            },
        });
    } catch (e) {
        console.log(e);
    }

    dispatch(fetchFavorites() as any);
};
