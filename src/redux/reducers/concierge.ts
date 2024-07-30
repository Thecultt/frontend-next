import { ConciergeState, ConciergeActions, ConciergeActionTypes } from '../types/IConcierge';

const initialState: ConciergeState = {
    currentCategory: '',
    currentBrand: '',

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

const concierge = (state = initialState, action: ConciergeActions) => {
    if (action.type === ConciergeActionTypes.SET_CONCIERGE_CURRENT_CATEGORY) {
        return {
            ...state,
            currentCategory: action.payload,
            currentBrand: '',
        };
    }

    if (action.type === ConciergeActionTypes.SET_CONCIERGE_CURRENT_BRAND) {
        return {
            ...state,
            currentBrand: action.payload,
        };
    }

    if (action.type === ConciergeActionTypes.SET_CONCIERGE_CATEGORIES) {
        return {
            ...state,
            categories: action.payload,
            isLoadedCategories: true,
        };
    }

    if (action.type === ConciergeActionTypes.SET_CONCIERGE_PRODUCT) {
        return {
            ...state,
            product: action.payload,
            isLoadedProduct: true,
        };
    }

    if (action.type === ConciergeActionTypes.SET_CONCIERGE_IS_LOADED_PRODUCT) {
        return {
            ...state,
            isLoadedProduct: action.payload,
        };
    }

    if (action.type === ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_PRODUCT_PAGE) {
        return {
            ...state,
            isSendFormProductPage: action.payload,
        };
    }

    if (action.type === ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_PRODUCT_PAGE_SUCCESS) {
        return {
            ...state,
            isSendFormProductPageSuccess: action.payload,
        };
    }

    if (action.type === ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_CUSTOM_PRODUCT) {
        return {
            ...state,
            isSendFormCustomProduct: action.payload,
        };
    }

    if (action.type === ConciergeActionTypes.SET_CONCIERGE_IS_SEND_FORM_CUSTOM_PRODUCT_SUCCESS) {
        return {
            ...state,
            isSendFormCustomProductSuccess: action.payload,
        };
    }

    return state;
};

export default concierge;
