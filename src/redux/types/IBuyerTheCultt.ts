import { BuyerTheCulttCategory, BuyerTheCulttProduct } from '../../models/IBuyerTheCultt';

export interface BuyerTheCulttState {
    categories: { [key: string]: BuyerTheCulttCategory };
    isLoadedCategories: boolean;

    product: BuyerTheCulttProduct;
    isLoadedProduct: boolean;

    isSendFormProductPage: boolean;
    isSendFormProductPageSuccess: boolean;

    isSendFormCustomProduct: boolean;
    isSendFormCustomProductSuccess: boolean;
}

export enum BuyerTheCulttActionTypes {
    SET_BUYER_THE_CULTT_CATEGORIES = 'SET_BUYER_THE_CULTT_CATEGORIES',
    SET_BUYER_THE_CULTT_PRODUCT = 'SET_BUYER_THE_CULTT_PRODUCT',
    SET_BUYER_THE_CULTT_IS_LOADED_PRODUCT = 'SET_BUYER_THE_CULTT_IS_LOADED_PRODUCT',

    SET_BUYER_THE_CULTT_IS_SEND_FORM_PRODUCT_PAGE = 'SET_BUYER_THE_CULTT_IS_SEND_FORM_PRODUCT_PAGE',
    SET_BUYER_THE_CULTT_IS_SEND_FORM_PRODUCT_PAGE_SUCCESS = 'SET_BUYER_THE_CULTT_IS_SEND_FORM_PRODUCT_PAGE_SUCCESS',

    SET_BUYER_THE_CULTT_IS_SEND_FORM_CUSTOM_PRODUCT = 'SET_BUYER_THE_CULTT_IS_SEND_FORM_CUSTOM_PRODUCT',
    SET_BUYER_THE_CULTT_IS_SEND_FORM_CUSTOM_PRODUCT_SUCCESS = 'SET_BUYER_THE_CULTT_IS_SEND_FORM_CUSTOM_PRODUCT_SUCCESS',
}

interface setBuyerTheCulttCategories {
    type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_CATEGORIES;
    payload: { [key: string]: BuyerTheCulttCategory };
}

interface setBuyerTheCulttProduct {
    type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_PRODUCT;
    payload: BuyerTheCulttProduct;
}

interface setBuyerTheCulttIsLoadedProduct {
    type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_LOADED_PRODUCT;
    payload: boolean;
}

interface setBuyerTheCulttIsSendFormProductPage {
    type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_PRODUCT_PAGE;
    payload: boolean;
}

interface setBuyerTheCulttIsSendFormProductPageSuccess {
    type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_PRODUCT_PAGE_SUCCESS;
    payload: boolean;
}

interface setBuyerTheCulttIsSendFormCustomProduct {
    type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_CUSTOM_PRODUCT;
    payload: boolean;
}

interface setBuyerTheCulttIsSendFormCustomProductSuccess {
    type: BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_CUSTOM_PRODUCT_SUCCESS;
    payload: boolean;
}

export type BuyerTheCulttActions =
    | setBuyerTheCulttCategories
    | setBuyerTheCulttProduct
    | setBuyerTheCulttIsLoadedProduct
    | setBuyerTheCulttIsSendFormProductPage
    | setBuyerTheCulttIsSendFormProductPageSuccess
    | setBuyerTheCulttIsSendFormCustomProduct
    | setBuyerTheCulttIsSendFormCustomProductSuccess;
