import { ConciergeCategory, ConciergeProduct } from '../../models/IConcierge';

export interface ConciergeState {
    currentCategory: string;
    currentBrand: string;

    categories: { [key: string]: ConciergeCategory };
    isLoadedCategories: boolean;

    product: ConciergeProduct;
    isLoadedProduct: boolean;

    isSendFormProductPage: boolean;
    isSendFormProductPageSuccess: boolean;

    isSendFormCustomProduct: boolean;
    isSendFormCustomProductSuccess: boolean;
}

export enum ConciergeActionTypes {
    SET_CONCIERGE_CURRENT_CATEGORY = 'SET_CONCIERGE_CURRENT_CATEGORY',
    SET_CONCIERGE_CURRENT_BRAND = 'SET_CONCIERGE_CURRENT_BRAND',

    SET_CONCIERGE_CATEGORIES = 'SET_CONCIERGE_CATEGORIES',
    SET_CONCIERGE_PRODUCT = 'SET_CONCIERGE_PRODUCT',
    SET_CONCIERGE_IS_LOADED_PRODUCT = 'SET_CONCIERGE_IS_LOADED_PRODUCT',

    SET_CONCIERGE_IS_SEND_FORM_PRODUCT_PAGE = 'SET_CONCIERGE_IS_SEND_FORM_PRODUCT_PAGE',
    SET_CONCIERGE_IS_SEND_FORM_PRODUCT_PAGE_SUCCESS = 'SET_CONCIERGE_IS_SEND_FORM_PRODUCT_PAGE_SUCCESS',

    SET_CONCIERGE_IS_SEND_FORM_CUSTOM_PRODUCT = 'SET_CONCIERGE_IS_SEND_FORM_CUSTOM_PRODUCT',
    SET_CONCIERGE_IS_SEND_FORM_CUSTOM_PRODUCT_SUCCESS = 'SET_CONCIERGE_IS_SEND_FORM_CUSTOM_PRODUCT_SUCCESS',
}

interface setConciergeCurrentCategory {
    type: ConciergeActionTypes.SET_CONCIERGE_CURRENT_CATEGORY;
    payload: string;
}

interface setConciergeCurrentBrand {
    type: ConciergeActionTypes.SET_CONCIERGE_CURRENT_BRAND;
    payload: string;
}

interface setConciergeCategories {
    type: ConciergeActionTypes.SET_CONCIERGE_CATEGORIES;
    payload: { [key: string]: ConciergeCategory };
}

interface setConciergeProduct {
    type: ConciergeActionTypes.SET_CONCIERGE_PRODUCT;
    payload: ConciergeProduct;
}

interface setConciergeIsLoadedProduct {
    type: ConciergeActionTypes.SET_CONCIERGE_IS_LOADED_PRODUCT;
    payload: boolean;
}

interface setConciergeIsSendFormProductPage {
    type: ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_PRODUCT_PAGE;
    payload: boolean;
}

interface setConciergeIsSendFormProductPageSuccess {
    type: ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_PRODUCT_PAGE_SUCCESS;
    payload: boolean;
}

interface setConciergeIsSendFormCustomProduct {
    type: ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_CUSTOM_PRODUCT;
    payload: boolean;
}

interface setConciergeIsSendFormCustomProductSuccess {
    type: ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_CUSTOM_PRODUCT_SUCCESS;
    payload: boolean;
}

export type ConciergeActions =
    | setConciergeCurrentCategory
    | setConciergeCurrentBrand
    | setConciergeCategories
    | setConciergeProduct
    | setConciergeIsLoadedProduct
    | setConciergeIsSendFormProductPage
    | setConciergeIsSendFormProductPageSuccess
    | setConciergeIsSendFormCustomProduct
    | setConciergeIsSendFormCustomProductSuccess;
