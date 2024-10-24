import { CartItem } from '@/models/ICartItem';

export interface ICartItemsObject {
    [article: string]: CartItem;
}

export interface ICartState {
    items: CartItem[];
    isLoading: boolean;
    isVisibleMessage: boolean;
}
