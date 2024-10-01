import { Dispatch } from 'react';

import { brandsAPI } from '@/services/api';

import { BrandsActions, BrandsActionTypes } from '../types/IBrands';

export const fetchBrands = () => async (dispatch: Dispatch<BrandsActions>) => {
    const { brands } = await brandsAPI.getBrands();

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
