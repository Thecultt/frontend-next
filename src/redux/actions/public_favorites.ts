import { Dispatch } from 'react';

import $api from '@/http';
import { Product } from '@/models/IProduct';

import { PublicFavoritesActions, PublicFavoritesActionTypes } from '../types/IPublicFavorites';

export const fetchPublicFavorites = (userId: string) => async (dispatch: Dispatch<PublicFavoritesActions>) => {
    const {
        data: { items, name },
    } = await $api.get<{ items: Product[]; name: string }>(`/favorite-products/${userId}`);

    dispatch({
        type: PublicFavoritesActionTypes.SET_PUBLIC_FAVORITES_NAME,
        payload: name,
    });

    dispatch({
        type: PublicFavoritesActionTypes.SET_PUBLIC_FAVORITES_ITEMS,
        payload: items,
    });
};
