import { Product, ProductPage } from '@/models/IProduct';

export type SortType = 'a' | 'price' | '-price' | 'popular' | 'shuffle';

export enum CatalogFetchType {
    Page,
    More,
}

export interface ProductsState {
    items: Product[];
    itemsWithNulls: Array<Product | null>;
    isLoaded: boolean;

    itemByArticle: ProductPage | null;
    itemByArticleSimilar: Product[];
    itemByArticleIsLoaded: boolean;

    isFetchMore: boolean;
    isFetchPage: boolean;

    typeFetch: CatalogFetchType;

    currentPage: number;

    pageCount: number;
    itemsCount: number;

    lastSearchString: string;
    catalogScroll: number;
}

export enum ProductActionTypes {
    SET_PRODUCTS_ITEMS = 'SET_PRODUCTS_ITEMS',
    SET_PRODUCTS_ITEM_BY_ARTICLE = 'SET_PRODUCTS_ITEM_BY_ARTICLE',
    SET_PRODUCTS_ITEM_BY_ARTICLE_IS_LOADED = 'SET_PRODUCTS_ITEM_BY_ARTICLE_IS_LOADED',
    SET_PRODUCTS_SIMILAR = 'SET_PRODUCTS_SIMILAR',
    SET_PRODUCTS_ITEMS_MORE = 'SET_PRODUCTS_ITEMS_MORE',
    SET_PRODUCTS_ITEMS_PAGE = 'SET_PRODUCTS_ITEMS_PAGE',
    SET_PRODUCTS_IS_LOADED = 'SET_PRODUCTS_IS_LOADED',

    SET_PRODUCTS_IS_FETCH_MORE = 'SET_PRODUCTS_IS_FETCH_MORE',
    SET_PRODUCTS_IS_FETCH_PAGE = 'SET_PRODUCTS_IS_FETCH_PAGE',

    SET_PRODUCTS_TYPE_FETCH = 'SET_PRODUCTS_TYPE_FETCH',

    SET_PRODUCTS_CURRENT_PAGE = 'SET_PRODUCTS_CURRENT_PAGE',
    SET_PRODUCTS_PAGE_COUNT = 'SET_PRODUCTS_PAGE_COUNT',
    SET_PRODUCTS_ITEMS_COUNT = 'SET_PRODUCTS_ITEMS_COUNT',

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

interface setProductSimilar {
    type: ProductActionTypes.SET_PRODUCTS_SIMILAR;
    payload: Product[];
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
    | setProductSimilar;
