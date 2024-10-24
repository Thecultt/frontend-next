import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LS_KEYS } from '@/constants/keys';
import { CartItem } from '@/models/ICartItem';
import { localStorageService } from '@/services/storage';

import { ICartItemsObject, ICartState } from './types';
import { checkAvailabilityCartItems } from './asyncActions';

const getInitialCartItems = () => {
    try {
        const items = localStorageService?.getItem<ICartItemsObject | CartItem[] | null>(LS_KEYS.cart, null);
        if (!items) {
            return [];
        }

        return Array.isArray(items) ? items : Object.keys(items).map((article) => items[article]);
    } catch (e) {
        return [];
    }
};

const initialState: ICartState = {
    items: getInitialCartItems(),
    isLoading: false,
    isVisibleMessage: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
        },
        removeItemFromCartByArticle: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.article !== action.payload);
        },
        toggleItemChecked: (state, action: PayloadAction<string>) => {
            state.items = state.items.map((item) => {
                if (item.article === action.payload) {
                    return {
                        ...item,
                        checked: !item.checked,
                    };
                }

                return item;
            });
        },
        setCartIsVisibleMessage: (state, action: PayloadAction<boolean>) => {
            state.isVisibleMessage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(checkAvailabilityCartItems.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(checkAvailabilityCartItems.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
        });
        builder.addCase(checkAvailabilityCartItems.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const { addItemToCart, removeItemFromCartByArticle, toggleItemChecked, setCartIsVisibleMessage } =
    cartSlice.actions;

export default cartSlice.reducer;
