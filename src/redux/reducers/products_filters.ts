import { ProductsFiltersState, ProductsFiltersTypes, ProductsFiltersActionTypes } from '../types/IProductsFilters';

const initialState: ProductsFiltersState = {
    isLoaded: false,
    price: { min: 0, max: 0 },
    conditions: [],
    glass_frame: [],
    categories: {},
    colors: {},
    selections: {},
};

const products_filters = (state = initialState, action: ProductsFiltersTypes) => {
    if (action.type === ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_IS_LOADED) {
        return {
            ...state,
            isLoaded: action.payload,
        };
    }

    if (action.type === ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_PRICE) {
        return {
            ...state,
            price: action.payload,
        };
    }

    if (action.type === ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_CONDITIONS) {
        return {
            ...state,
            conditions: action.payload,
        };
    }

    if (action.type === ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_CATEGORIES) {
        return {
            ...state,
            categories: action.payload,
        };
    }

    if (action.type === ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_COLORS) {
        return {
            ...state,
            colors: action.payload,
        };
    }

    if (action.type === ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_SELECTIONS) {
        return {
            ...state,
            selections: action.payload,
        };
    }

    if (action.type === ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_GLASS_FRAME) {
        return {
            ...state,
            glass_frame: action.payload,
        };
    }

    return state;
};

export default products_filters;
