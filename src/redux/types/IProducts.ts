import { Product, ProductPage } from '@/models/IProduct';

export type SortType = 'a' | 'price' | '-price' | 'popular' | 'shuffle';

export enum CatalogFetchType {
    Page,
    More,
}

export interface ProductsStateFilters {
    isParse: boolean;

    search: string;

    price: {
        min: number;
        max: number;
    };

    conditions: { [key: string]: string };
    categories: { [key: string]: string };
    types: { [key: string]: string };
    brands: { [key: string]: string };
    models: { [key: string]: string };
    colors: { [key: string]: string };
    sex: { [key: string]: string };
    availability: { [key: string]: string };
    size: { [key: string]: string };

    category_slug?: string;

    selection: string | null;

    boutique: boolean;
    price_drop: boolean;

    glass_frame: { [key: string]: string };

    sort: SortType;
}

export interface ProductsState {
    items: Product[];
    isLoaded: boolean;

    itemByArticle: ProductPage;
    itemByArticleSimilar: Product[];
    itemByArticleIsLoaded: boolean;

    isFetchMore: boolean;
    isFetchPage: boolean;

    typeFetch: CatalogFetchType;

    currentPage: number;

    pageCount: number;
    itemsCount: number;

    filters: ProductsStateFilters;

    lastSearchString: string;
    catalogScroll: number;
}

export enum ProductActionTypes {
    SET_PRODUCTS_ITEMS = 'SET_PRODUCTS_ITEMS',
    SET_PRODUCTS_ITEM_BY_ARTICLE = 'SET_PRODUCTS_ITEM_BY_ARTICLE',
    SET_PRODUCTS_ITEM_BY_ARTICLE_IS_LOADED = 'SET_PRODUCTS_ITEM_BY_ARTICLE_IS_LOADED',
    SET_PRODUCTS_ITEMS_MORE = 'SET_PRODUCTS_ITEMS_MORE',
    SET_PRODUCTS_ITEMS_PAGE = 'SET_PRODUCTS_ITEMS_PAGE',
    SET_PRODUCTS_IS_LOADED = 'SET_PRODUCTS_IS_LOADED',

    SET_PRODUCTS_IS_FETCH_MORE = 'SET_PRODUCTS_IS_FETCH_MORE',
    SET_PRODUCTS_IS_FETCH_PAGE = 'SET_PRODUCTS_IS_FETCH_PAGE',

    SET_PRODUCTS_TYPE_FETCH = 'SET_PRODUCTS_TYPE_FETCH',

    SET_PRODUCTS_CURRENT_PAGE = 'SET_PRODUCTS_CURRENT_PAGE',
    SET_PRODUCTS_PAGE_COUNT = 'SET_PRODUCTS_PAGE_COUNT',
    SET_PRODUCTS_ITEMS_COUNT = 'SET_PRODUCTS_ITEMS_COUNT',

    SET_PRODUCTS_FILTERS_CATALOG = 'SET_PRODUCTS_FILTERS_CATALOG',
    SET_PRODUCTS_FILTERS_CATALOG_SEARCH = 'SET_PRODUCTS_FILTERS_CATALOG_SEARCH',
    SET_PRODUCTS_FILTERS_CATALOG_PRICE = 'SET_PRODUCTS_FILTERS_CATALOG_PRICE',
    SET_PRODUCTS_FILTERS_CATALOG_CONDITIONS = 'SET_PRODUCTS_FILTERS_CATALOG_CONDITIONS',
    SET_PRODUCTS_FILTERS_CATALOG_CATEGORIES = 'SET_PRODUCTS_FILTERS_CATALOG_CATEGORIES',
    SET_PRODUCTS_FILTERS_CATALOG_TYPES = 'SET_PRODUCTS_FILTERS_CATALOG_TYPES',
    SET_PRODUCTS_FILTERS_CATALOG_BRANDS = 'SET_PRODUCTS_FILTERS_CATALOG_BRANDS',
    SET_PRODUCTS_FILTERS_CATALOG_MODELS = 'SET_PRODUCTS_FILTERS_CATALOG_MODELS',
    SET_PRODUCTS_FILTERS_CATALOG_COLORS = 'SET_PRODUCTS_FILTERS_CATALOG_COLORS',
    SET_PRODUCTS_FILTERS_CATALOG_SEX = 'SET_PRODUCTS_FILTERS_CATALOG_SEX',
    SET_PRODUCTS_FILTERS_CATALOG_AVAILABILITY = 'SET_PRODUCTS_FILTERS_CATALOG_AVAILABILITY',
    SET_PRODUCTS_FILTERS_CATALOG_SIZE = 'SET_PRODUCTS_FILTERS_CATALOG_SIZE',
    SET_PRODUCTS_FILTERS_CATALOG_SELECTION = 'SET_PRODUCTS_FILTERS_CATALOG_SELECTION',
    SET_PRODUCTS_FILTERS_CATALOG_BOUTIQUE = 'SET_PRODUCTS_FILTERS_CATALOG_BOUTIQUE',
    SET_PRODUCTS_FILTERS_CATALOG_GLASS_FRAME = 'SET_PRODUCTS_FILTERS_CATALOG_GLASS_FRAME',
    SET_PRODUCTS_FILTERS_CATALOG_PRICE_DROP = 'SET_PRODUCTS_FILTERS_CATALOG_PRICE_DROP',
    SET_PRODUCTS_FILTERS_CATALOG_SORT = 'SET_PRODUCTS_FILTERS_CATALOG_SORT',

    CLEAR_PRODUCTS_FILTERS = 'CLEAR_PRODUCTS_FILTERS',

    SET_PRODUCTS_LAST_SEARCH_STRING = 'SET_PRODUCTS_LAST_SEARCH_STRING',
    SET_PRODUCTS_SCROLL = 'SET_PRODUCTS_SCROLL',
}

interface setProductsItems {
    type: ProductActionTypes.SET_PRODUCTS_ITEMS;
    payload: Product[];
}

interface setProductsItemByArticle {
    type: ProductActionTypes.SET_PRODUCTS_ITEM_BY_ARTICLE;
    payload: { data: ProductPage; similar: Product[] };
}

interface setProductsItemByArticleIsLoaded {
    type: ProductActionTypes.SET_PRODUCTS_ITEM_BY_ARTICLE_IS_LOADED;
    payload: boolean;
}

interface setProductsItemsMore {
    type: ProductActionTypes.SET_PRODUCTS_ITEMS_MORE;
    payload: Product[];
}

interface setProductsItemsPage {
    type: ProductActionTypes.SET_PRODUCTS_ITEMS_PAGE;
    payload: Product[];
}

interface setProductsIsLoaded {
    type: ProductActionTypes.SET_PRODUCTS_IS_LOADED;
    payload: boolean;
}

interface setProductsIsFetchMore {
    type: ProductActionTypes.SET_PRODUCTS_IS_FETCH_MORE;
    payload: boolean;
}

interface setProductsIsFetchPage {
    type: ProductActionTypes.SET_PRODUCTS_IS_FETCH_PAGE;
    payload: boolean;
}

interface setProductsTypeFetch {
    type: ProductActionTypes.SET_PRODUCTS_TYPE_FETCH;
    payload: CatalogFetchType;
}

interface setProductsPageCurrentPage {
    type: ProductActionTypes.SET_PRODUCTS_CURRENT_PAGE;
    payload: number;
}

interface setProductsPageCount {
    type: ProductActionTypes.SET_PRODUCTS_PAGE_COUNT;
    payload: number;
}

interface setProductsItemsCount {
    type: ProductActionTypes.SET_PRODUCTS_ITEMS_COUNT;
    payload: number;
}

interface setProductsLastSearchString {
    type: ProductActionTypes.SET_PRODUCTS_LAST_SEARCH_STRING;
    payload: string;
}

interface setProductsScroll {
    type: ProductActionTypes.SET_PRODUCTS_SCROLL;
    payload: number;
}

// filters
interface setProductsFilters {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG;
    payload: ProductsStateFilters;
}

interface setProductsFiltersSearch {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SEARCH;
    payload: string;
}

interface setProductsFiltersPrice {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_PRICE;
    payload: {
        min: number;
        max: number;
    };
}

interface setProductsFiltersConditions {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_CONDITIONS;
    payload: string;
}

interface setProductsFiltersCategories {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_CATEGORIES;
    payload: string;
}

interface setProductsFiltersTypes {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_TYPES;
    payload: string;
}

interface setProductsFiltersBrands {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_BRANDS;
    payload: string;
}

interface setProductsFiltersModels {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_MODELS;
    payload: string;
}

interface setProductsFiltersColors {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_COLORS;
    payload: string;
}

interface setProductsFiltersSex {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SEX;
    payload: string;
}

interface setProductsFiltersAvailability {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_AVAILABILITY;
    payload: string;
}

interface setProductsFiltersSize {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SIZE;
    payload: string;
}

interface setProductsFiltersSelection {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SELECTION;
    payload: string;
}

interface setProductsFiltersBoutique {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_BOUTIQUE;
    payload: boolean;
}

interface setProductsFiltersGlassFrame {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_GLASS_FRAME;
    payload: string;
}

interface setProductsFiltersPriceDrop {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_PRICE_DROP;
    payload: boolean;
}

interface setProductsFiltersSort {
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SORT;
    payload: SortType;
}

interface clearProductsFilters {
    type: ProductActionTypes.CLEAR_PRODUCTS_FILTERS;
    payload: undefined;
}

export type ProductTypes =
    | setProductsItems
    | setProductsItemByArticle
    | setProductsItemByArticleIsLoaded
    | setProductsItemsMore
    | setProductsItemsPage
    | setProductsIsLoaded
    | setProductsIsFetchMore
    | setProductsIsFetchPage
    | setProductsTypeFetch
    | setProductsPageCurrentPage
    | setProductsPageCount
    | setProductsItemsCount
    | setProductsLastSearchString
    | setProductsScroll
    | setProductsFilters
    | setProductsFiltersSearch
    | setProductsFiltersPrice
    | setProductsFiltersConditions
    | setProductsFiltersCategories
    | setProductsFiltersTypes
    | setProductsFiltersBrands
    | setProductsFiltersModels
    | setProductsFiltersColors
    | setProductsFiltersSex
    | setProductsFiltersAvailability
    | setProductsFiltersSize
    | setProductsFiltersSelection
    | setProductsFiltersBoutique
    | setProductsFiltersGlassFrame
    | setProductsFiltersPriceDrop
    | setProductsFiltersSort
    | clearProductsFilters;
