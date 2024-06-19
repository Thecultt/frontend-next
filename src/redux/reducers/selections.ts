import { ISelectionsState, SelectionsActionType, SelectionsActions } from '../types/ISelections';

const initialState: ISelectionsState = {
    isLoaded: false,
    items: [],
};

const selectionsReducer = (state = initialState, action: SelectionsActions): ISelectionsState => {
    switch (action.type) {
        case SelectionsActionType.SET_ITEMS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        default:
            return state;
    }
};

export default selectionsReducer;
