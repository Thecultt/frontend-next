import { Middleware } from '@reduxjs/toolkit';
import isEqual from 'lodash.isequal';

import { localStorageService } from '@/services/storage';
import { LS_KEYS } from '@/constants/keys';

import { RootState } from '../store';

export const localStorageMiddleware: Middleware = (storeAPI) => (next) => (action: any) => {
    const prevState: RootState = storeAPI.getState();
    const result = next(action);
    const currentState: RootState = storeAPI.getState();

    if ((action.type as string).startsWith('cart') && !isEqual(currentState.cart.items, prevState.cart.items)) {
        localStorageService?.setItem(LS_KEYS.cart, currentState.cart.items);
    }

    return result;
};
