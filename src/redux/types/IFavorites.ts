import { Product } from '@/models/IProduct';

export interface FavoritesState {
    items: { [key: string]: Product };
    isLoaded: boolean;
}

export enum FavoritesActionTypes {
    SET_FAVORITES_ITEMS = 'SET_FAVORITES_ITEMS',
}

interface setFavoritesItems {
    type: FavoritesActionTypes.SET_FAVORITES_ITEMS;
    payload: Product[];
}

export type FavoritesActions = setFavoritesItems;
