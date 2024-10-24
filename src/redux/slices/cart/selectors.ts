import { RootState } from '@/redux/store';

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartIsLoading = (state: RootState) => state.cart.isLoading;
export const selectCartIsVisibleMessage = (state: RootState) => state.cart.isVisibleMessage;
