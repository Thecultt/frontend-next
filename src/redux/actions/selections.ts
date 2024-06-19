import { Dispatch } from 'redux';

import $api from '@/http';
import { ISelection } from '@/models/ISelection';

import { SelectionsActionType, SelectionsActions } from '../types/ISelections';

interface ISelectionsResponse {
    selections: ISelection[];
}

export const fetchSelections = () => async (dispatch: Dispatch<SelectionsActions>) => {
    try {
        const {
            data: { selections },
        } = await $api.get<ISelectionsResponse>('/selections');

        dispatch({
            type: SelectionsActionType.SET_ITEMS,
            payload: selections,
        });
    } catch (e) {
        dispatch({
            type: SelectionsActionType.SET_ITEMS,
            payload: [],
        });
    }
};
