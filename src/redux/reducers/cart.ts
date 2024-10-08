import { localStorageService } from '@/services/storage';
import { LS_KEYS } from '@/constants/keys';

import { CartState, CartActions, CartActionTypes, ICartItemsState } from '../types/ICart';

const initialState: CartState = {
    items: localStorageService?.getItem<ICartItemsState>(LS_KEYS.cart, {}) || {},
    isVisibleMessage: false,
    isLoading: false,
};

const cart = (state = initialState, action: CartActions): CartState => {
    if (action.type === CartActionTypes.SET_CART_ITEMS) {
        const newItems = action.payload;
        const hasItems = Object.keys(newItems).length > 0;

        if (hasItems) {
            localStorageService?.setItem(LS_KEYS.cart, newItems);
        } else {
            localStorageService?.removeItem(LS_KEYS.cart);
        }

        return {
            ...state,
            items: newItems,
        };
    }

    if (action.type === CartActionTypes.ADD_CART_ITEMS) {
        const newItems: ICartItemsState = {
            ...state.items,
            [action.payload.article]: action.payload,
        };
        localStorageService?.setItem(LS_KEYS.cart, newItems);

        return {
            ...state,
            items: newItems,
        };
    }

    if (action.type === CartActionTypes.CHANGE_CART_ITEMS) {
        const newItems: ICartItemsState = {
            ...state.items,
            [action.payload.article]: action.payload.data,
        };
        localStorageService?.setItem(LS_KEYS.cart, newItems);

        return {
            ...state,
            items: newItems,
        };
    }

    if (action.type === CartActionTypes.CHANGE_CHECK_CART_ITEMS) {
        const newItems: ICartItemsState = {
            ...state.items,
            [action.payload.article]: { ...state.items[action.payload.article], checked: action.payload.status },
        };
        localStorageService?.setItem(LS_KEYS.cart, newItems);

        return {
            ...state,
            items: newItems,
        };
    }

    if (action.type === CartActionTypes.REMOVE_CART_ITEMS) {
        const { [action.payload]: _removedArticle, ...newItems } = state.items;
        localStorageService?.setItem(LS_KEYS.cart, newItems);

        return {
            ...state,
            items: newItems,
        };
    }

    if (action.type === CartActionTypes.SET_CART_IS_VISIBLE_MESSAGE) {
        return {
            ...state,
            isVisibleMessage: action.payload,
        };
    }

    if (action.type === CartActionTypes.SET_CART_IS_LOADING) {
        return {
            ...state,
            isLoading: action.payload,
        };
    }

    return state;
};

export default cart;
