import { IProductFilters } from '@/models/IProductFilters';

export interface ProductsFiltersState {
    isLoaded: boolean;
    price: { min: number; max: number };
    conditions: IProductFilters['conditions'];
    categories: IProductFilters['categories'];
    colors: IProductFilters['colors'];
    selections: IProductFilters['selections'];
    glass_frame: IProductFilters['glass_frame'];
    jewelry_metal_type: IProductFilters['jewelry_metal_type'];
}

export enum ProductsFiltersActionTypes {
    SET_PRODUCTS_FILTERS_IS_LOADED = 'SET_PRODUCTS_FILTERS_IS_LOADED',
    SET_PRODUCTS_FILTERS_PRICE = 'SET_PRODUCTS_FILTERS_PRICE',
    SET_PRODUCTS_FILTERS_CONDITIONS = 'SET_PRODUCTS_FILTERS_CONDITIONS',
    SET_PRODUCTS_FILTERS_CATEGORIES = 'SET_PRODUCTS_FILTERS_CATEGORIES',
    SET_PRODUCTS_FILTERS_COLORS = 'SET_PRODUCTS_FILTERS_COLORS',
    SET_PRODUCTS_FILTERS_SELECTIONS = 'SET_PRODUCTS_FILTERS_SELECTIONS',
    SET_PRODUCTS_FILTERS_GLASS_FRAME = 'SET_PRODUCTS_FILTERS_GLASS_FRAME',
    SET_PRODUCTS_FILTERS_METAL_TYPES = 'SET_PRODUCTS_FILTERS_METAL_TYPES',
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
    payload: IProductFilters['conditions'];
}

interface setProductsFiltersCategory {
    type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_CATEGORIES;
    payload: IProductFilters['categories'];
}

interface setProductsFiltersColors {
    type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_COLORS;
    payload: IProductFilters['colors'];
}

interface setProductsFiltersSelections {
    type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_SELECTIONS;
    payload: IProductFilters['selections'];
}

interface setProductsFiltersGlassFrame {
    type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_GLASS_FRAME;
    payload: IProductFilters['glass_frame'];
}

interface setProductsFiltersMetalTypes {
    type: ProductsFiltersActionTypes.SET_PRODUCTS_FILTERS_METAL_TYPES;
    payload: IProductFilters['jewelry_metal_type'];
}

export type ProductsFiltersTypes =
    | setProductsFiltersIsLoaded
    | setProductsFiltersPrice
    | setProductsFiltersConditions
    | setProductsFiltersCategory
    | setProductsFiltersColors
    | setProductsFiltersSelections
    | setProductsFiltersGlassFrame
    | setProductsFiltersMetalTypes;
