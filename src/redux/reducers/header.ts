import { HeaderState, HeaderActions, HeaderActionTypes } from '../types/IHeader';

const initialState: HeaderState = {
    search: {
        value: '',
        isFetch: false,
        totalCount: 0,
        items: [],
    },
    cartIsVisible: false,
    catalogMenuIsVisible: false,
};

const header = (state = initialState, action: HeaderActions): HeaderState => {
    if (action.type === HeaderActionTypes.SET_HEADER_SEARCH_VALUE) {
        return {
            ...state,
            search: {
                ...state.search,
                value: action.payload,
            },
        };
    }

    if (action.type === HeaderActionTypes.SET_HEADER_SEARCH_IS_FETCH) {
        return {
            ...state,
            search: {
                ...state.search,
                isFetch: action.payload,
            },
        };
    }

    if (action.type === HeaderActionTypes.SET_HEADER_SEARCH_TOTAL_COUNT) {
        return {
            ...state,
            search: {
                ...state.search,
                totalCount: action.payload,
            },
        };
    }

    if (action.type === HeaderActionTypes.SET_HEADER_SEARCH_ITEMS) {
        return {
            ...state,
            search: {
                ...state.search,
                items: action.payload,
            },
        };
    }

    if (action.type === HeaderActionTypes.SET_HEADER_CART_IS_VISIBLE) {
        return {
            ...state,
            cartIsVisible: action.payload,
        };
    }

    if (action.type === HeaderActionTypes.SET_HEADER_CATALOG_MENU_IS_VISIBLE) {
        return {
            ...state,
            catalogMenuIsVisible: action.payload,
        };
    }

    if (action.type === HeaderActionTypes.TOGGLE_HEADER_CATALOG_MENU_IS_VISIBLE) {
        return {
            ...state,
            catalogMenuIsVisible: !state.catalogMenuIsVisible,
        };
    }

    return state;
};

export default header;
