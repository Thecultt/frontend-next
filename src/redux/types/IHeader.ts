import { Product } from '@/models/IProduct';

export interface HeaderState {
    search: {
        value: string;

        isFetch: boolean;

        totalCount: number;

        items: Product[];
    };
}

export enum HeaderActionTypes {
    SET_HEADER_SEARCH_VALUE = 'SET_HEADER_SEARCH_VALUE',
    SET_HEADER_SEARCH_IS_FETCH = 'SET_HEADER_SEARCH_IS_FETCH',
    SET_HEADER_SEARCH_TOTAL_COUNT = 'SET_HEADER_SEARCH_TOTAL_COUNT',
    SET_HEADER_SEARCH_ITEMS = 'SET_HEADER_SEARCH_ITEMS',
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

export type HeaderActions =
    | setHeaderSearchValue
    | setHeaderSearchItems
    | setHeaderSearchTotalCount
    | setHeaderSearchIsFetch;
