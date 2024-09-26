import { Dispatch } from 'redux';

import $api from '@/http';
import { IProductFilters } from '@/models/IProductFilters';

import { ProductsFiltersTypes, ProductsFiltersActionTypes } from '../types/IProductsFilters';

export const fetchProductsFilters = () => async (dispatch: Dispatch<ProductsFiltersTypes>) => {
    const {
        data: { categories, colors, conditions, min_price, max_price, selections, glass_frame, jewelry_metal_type },
    } = await $api.get<IProductFilters>('/filters_v2');

    dispatch({
        type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_PRICE,
        payload: { min: min_price, max: max_price },
    });

    dispatch({
        type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_CONDITIONS,
        payload: conditions,
    });

    dispatch({
        type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_CATEGORIES,
        payload: categories,
    });

    dispatch({
        type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_COLORS,
        payload: colors,
    });

    dispatch({
        type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_SELECTIONS,
        payload: selections,
    });

    dispatch({
        type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_GLASS_FRAME,
        payload: glass_frame,
    });

    dispatch({
        type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_METAL_TYPES,
        payload: jewelry_metal_type,
    });

    dispatch({
        type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_IS_LOADED,
        payload: true,
    });
};
