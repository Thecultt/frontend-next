import { Product } from '@/models/IProduct';

export interface HeaderState {
    search: {
        value: string;
        isFetch: boolean;
        totalCount: number;
        items: Product[];
    };
    cartIsVisible: boolean;
    catalogMenuIsVisible: boolean;
}

export enum HeaderActionTypes {
    SET_HEADER_SEARCH_VALUE = 'SET_HEADER_SEARCH_VALUE',
    SET_HEADER_SEARCH_IS_FETCH = 'SET_HEADER_SEARCH_IS_FETCH',
    SET_HEADER_SEARCH_TOTAL_COUNT = 'SET_HEADER_SEARCH_TOTAL_COUNT',
    SET_HEADER_SEARCH_ITEMS = 'SET_HEADER_SEARCH_ITEMS',

    SET_HEADER_CART_IS_VISIBLE = 'SET_HEADER_CART_IS_VISIBLE',

    SET_HEADER_CATALOG_MENU_IS_VISIBLE = 'SET_HEADER_CATALOG_MENU_IS_VISIBLE',
    TOGGLE_HEADER_CATALOG_MENU_IS_VISIBLE = 'TOGGLE_HEADER_CATALOG_MENU_IS_VISIBLE',
}

interface setHeaderSearchValue {
    type: HeaderActionTypes.SET_HEADER_SEARCH_VALUE;
    payload: string;
}

interface setHeaderSearchIsFetch {
    type: HeaderActionTypes.SET_HEADER_SEARCH_IS_FETCH;
    payload: boolean;
}

interface setHeaderSearchTotalCount {
    type: HeaderActionTypes.SET_HEADER_SEARCH_TOTAL_COUNT;
    payload: any;
}

interface setHeaderSearchItems {
    type: HeaderActionTypes.SET_HEADER_SEARCH_ITEMS;
    payload: Product[];
}

interface setHeaderCartIsVisible {
    type: HeaderActionTypes.SET_HEADER_CART_IS_VISIBLE;
    payload: boolean;
}

interface setHeaderCatalogMenuIsVisible {
    type: HeaderActionTypes.SET_HEADER_CATALOG_MENU_IS_VISIBLE;
    payload: boolean;
}

interface toggleHeaderCatalogMenuIsVisible {
    type: HeaderActionTypes.TOGGLE_HEADER_CATALOG_MENU_IS_VISIBLE;
    payload: undefined;
}

export type HeaderActions =
    | setHeaderSearchValue
    | setHeaderSearchItems
    | setHeaderSearchTotalCount
    | setHeaderSearchIsFetch
    | setHeaderCartIsVisible
    | setHeaderCatalogMenuIsVisible
    | toggleHeaderCatalogMenuIsVisible;
