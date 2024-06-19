import { ISelection } from '@/models/ISelection';

export interface ISelectionsState {
    isLoaded: boolean;
    items: ISelection[];
}

export enum SelectionsActionType {
    SET_ITEMS = 'SET_ITEMS',
}

interface setSelections {
    type: SelectionsActionType.SET_ITEMS;
    payload: ISelection[];
}

export type SelectionsActions = setSelections;
