import { CartItem } from '@/models/ICartItem';

export interface ICartItemsState {
    [key: string]: CartItem;
}

export interface CartState {
    items: ICartItemsState;
    isVisibleMessage: boolean;
    isLoading: boolean;
}

export enum CartActionTypes {
    SET_CART_ITEMS = 'SET_CART_ITEMS',

    ADD_CART_ITEMS = 'ADD_CART_ITEMS',
    CHANGE_CART_ITEMS = 'CHANGE_CART_ITEMS',
    CHANGE_CHECK_CART_ITEMS = 'CHANGE_CHECK_CART_ITEMS',
    REMOVE_CART_ITEMS = 'REMOVE_CART_ITEMS',

    SET_CART_IS_VISIBLE_MESSAGE = 'SET_CART_IS_VISIBLE_MESSAGE',

    SET_CART_IS_LOADING = 'SET_CART_IS_LOADING',
}

interface setCartItems {
    type: CartActionTypes.SET_CART_ITEMS;
    payload: ICartItemsState;
}

interface addCartItems {
    type: CartActionTypes.ADD_CART_ITEMS;
    payload: CartItem;
}

interface changeCartItems {
    type: CartActionTypes.CHANGE_CART_ITEMS;
    payload: {
        article: string;
        data: CartItem;
    };
}

interface changeCheckCartItems {
    type: CartActionTypes.CHANGE_CHECK_CART_ITEMS;
    payload: {
        article: string;
        status: boolean;
    };
}

interface removeCartItems {
    type: CartActionTypes.REMOVE_CART_ITEMS;
    payload: string;
}

interface setCartIsVisibleMessage {
    type: CartActionTypes.SET_CART_IS_VISIBLE_MESSAGE;
    payload: boolean;
}

interface setCartIsLoading {
    type: CartActionTypes.SET_CART_IS_LOADING;
    payload: boolean;
}

export type CartActions =
    | setCartItems
    | addCartItems
    | changeCartItems
    | changeCheckCartItems
    | removeCartItems
    | setCartIsVisibleMessage
    | setCartIsLoading;
