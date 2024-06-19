import { Order } from '@/models/IOrder';

export interface HistoryOrdersState {
    items: Order[];
    isLoaded: boolean;
}

export enum HistoryOrdersActionTypes {
    SET_HISTORY_ORDERS_ITEMS = 'SET_HISTORY_ORDERS_ITEMS',
}

interface setHistoryOrdersItems {
    type: HistoryOrdersActionTypes.SET_HISTORY_ORDERS_ITEMS;
    payload: Order[];
}

export type HistoryOrdersActions = setHistoryOrdersItems;
