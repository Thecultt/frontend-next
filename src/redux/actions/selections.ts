import { Dispatch } from 'redux';

import { selectionsAPI } from '@/services/api';

import { SelectionsActionType, SelectionsActions } from '../types/ISelections';

export const fetchSelections = () => async (dispatch: Dispatch<SelectionsActions>) => {
    try {
        const { selections } = await selectionsAPI.getSelections();

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
