import { WaitingListItem } from '@/models/IWaitingListItem';

export interface WaitingState {
    items: WaitingListItem[];
    isLoaded: boolean;
}

export enum WaitingActionTypes {
    SET_WAITING_ITEMS = 'SET_WAITING_ITEMS',
}

interface setWaitingItems {
    type: WaitingActionTypes.SET_WAITING_ITEMS;
    payload: WaitingListItem[];
}

export type WaitingActions = setWaitingItems;
