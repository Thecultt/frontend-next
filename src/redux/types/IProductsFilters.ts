import { ProductsFiltersCategory } from '@/models/IProductFilters';

export interface ProductsFiltersState {
    isLoaded: boolean;

    price: { min: number; max: number };
    conditions: string[];
    categories: { [key: string]: ProductsFiltersCategory };
    colors: { [key: string]: string };
    selections: { [key: string]: string };
    glass_frame: string[];
}

export enum ProductsFiltersActionTypes {
    SET_PRODUCTS_FILTERS_IS_LOADED = 'SET_PRODUCTS_FILTERS_IS_LOADED',
    SET_PRODUCTS_FILTERS_PRICE = 'SET_PRODUCTS_FILTERS_PRICE',
    SET_PRODUCTS_FILTERS_CONDITIONS = 'SET_PRODUCTS_FILTERS_CONDITIONS',
    SET_PRODUCTS_FILTERS_CATEGORIES = 'SET_PRODUCTS_FILTERS_CATEGORIES',
    SET_PRODUCTS_FILTERS_COLORS = 'SET_PRODUCTS_FILTERS_COLORS',
    SET_PRODUCTS_FILTERS_SELECTIONS = 'SET_PRODUCTS_FILTERS_SELECTIONS',
    SET_PRODUCTS_FILTERS_GLASS_FRAME = 'SET_PRODUCTS_FILTERS_GLASS_FRAME',
}

interface setProductsFiltersIsLoaded {
    type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_IS_LOADED;
    payload: boolean;
}

interface setProductsFiltersPrice {
    type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_PRICE;
    payload: { min: number; max: number };
}

interface setProductsFiltersConditions {
    type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_CONDITIONS;
    payload: string[];
}

interface setProductsFiltersCategory {
    type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_CATEGORIES;
    payload: { [key: string]: ProductsFiltersCategory };
}

interface setProductsFiltersColors {
    type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_COLORS;
    payload: { [key: string]: string };
}

interface setProductsFiltersSelections {
    type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_SELECTIONS;
    payload: { [key: string]: string };
}

interface setProductsFiltersGlassFrame {
    type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_GLASS_FRAME;
    payload: string[];
}

export type ProductsFiltersTypes =
    | setProductsFiltersIsLoaded
    | setProductsFiltersPrice
    | setProductsFiltersConditions
    | setProductsFiltersCategory
    | setProductsFiltersColors
    | setProductsFiltersSelections
    | setProductsFiltersGlassFrame;
