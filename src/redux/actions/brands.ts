import { Dispatch } from 'react';

import $api from '@/http';

import { BrandsActions, BrandsActionTypes } from '../types/IBrands';

export const fetchBrands = () => async (dispatch: Dispatch<BrandsActions>) => {
    const {
        data: { brands },
    } = await $api.get<{ brands: { [key: string]: string[] } }>(`/brands/`);

    dispatch({
        type: BrandsActionTypes.SET_BRANDS,
        payload: brands,
    });
};

export const setBrandsLetter = (letter: string) => ({
    type: BrandsActionTypes.SET_BRANDS_LETTER,
    payload: letter,
});

export const setBrandsSearch = (search: string) => ({
    type: BrandsActionTypes.SET_BRANDS_SEARCH,
    payload: search,
});
