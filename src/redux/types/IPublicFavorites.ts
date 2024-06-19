import { Product } from '@/models/IProduct';

export interface PublicFavoritesState {
    items: { [key: string]: Product };
    name: string;
    isLoaded: boolean;
}

export enum PublicFavoritesActionTypes {
    SET_PUBLIC_FAVORITES_ITEMS = 'SET_PUBLIC_FAVORITES_ITEMS',
    SET_PUBLIC_FAVORITES_NAME = 'SET_PUBLIC_FAVORITES_NAME',
}

interface setPublicFavoritesItems {
    type: PublicFavoritesActionTypes.SET_PUBLIC_FAVORITES_ITEMS;
    payload: Product[];
}

interface setPublicFavoritesName {
    type: PublicFavoritesActionTypes.SET_PUBLIC_FAVORITES_NAME;
    payload: string;
}

export type PublicFavoritesActions = setPublicFavoritesItems | setPublicFavoritesName;
