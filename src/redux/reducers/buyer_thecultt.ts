import { BuyerTheCulttState, BuyerTheCulttActions, BuyerTheCulttActionTypes } from '../types/IBuyerTheCultt';

const initialState: BuyerTheCulttState = {
    categories: {},
    isLoadedCategories: false,

    product: {
        id: 0,
        title: '',
        price: '',
        description: '',
        image: '',
        brand: '',
    },
    isLoadedProduct: false,

    isSendFormProductPage: false,
    isSendFormProductPageSuccess: false,

    isSendFormCustomProduct: false,
    isSendFormCustomProductSuccess: false,
};

const buyer_thecultt = (state = initialState, action: BuyerTheCulttActions) => {
    if (action.type === BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_CATEGORIES) {
        return {
            ...state,
            categories: action.payload,
            isLoadedCategories: true,
        };
    }

    if (action.type === BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_PRODUCT) {
        return {
            ...state,
            product: action.payload,
            isLoadedProduct: true,
        };
    }

    if (action.type === BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_LOADED_PRODUCT) {
        return {
            ...state,
            isLoadedProduct: action.payload,
        };
    }

    if (action.type === BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_PRODUCT_PAGE) {
        return {
            ...state,
            isSendFormProductPage: action.payload,
        };
    }

    if (action.type === BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_PRODUCT_PAGE_SUCCESS) {
        return {
            ...state,
            isSendFormProductPageSuccess: action.payload,
        };
    }

    if (action.type === BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_CUSTOM_PRODUCT) {
        return {
            ...state,
            isSendFormCustomProduct: action.payload,
        };
    }

    if (action.type === BuyerTheCulttActionTypes.SET_BUYER_THE_CULTT_IS_SEND_FORM_CUSTOM_PRODUCT_SUCCESS) {
        return {
            ...state,
            isSendFormCustomProductSuccess: action.payload,
        };
    }

    return state;
};

export default buyer_thecultt;
