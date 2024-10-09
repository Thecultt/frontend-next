import { Dispatch } from 'react';

import { brandsAPI } from '@/services/api';

import { BrandsActions, BrandsActionTypes } from '../types/IBrands';

export const fetchBrands = () => async (dispatch: Dispatch<BrandsActions>) => {
    try {
        const { data } = await brandsAPI.getBrands();

        dispatch({
            type: BrandsActionTypes.SET_BRANDS,
            payload: data.brands,
        });
    } catch (e) {
        console.error('fetchBrands', e);
    }
};

export const setBrandsLetter = (letter: string) => ({
    type: BrandsActionTypes.SET_BRANDS_LETTER,
    payload: letter,
});

export const setBrandsSearch = (search: string) => ({
    type: BrandsActionTypes.SET_BRANDS_SEARCH,
    payload: search,
});
