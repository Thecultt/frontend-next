import { WaitingState, WaitingActions, WaitingActionTypes } from '../types/IWaiting';

const initialState: WaitingState = {
    items: [],
    isLoaded: false,
};

const waiting = (state = initialState, action: WaitingActions) => {
    if (action.type === WaitingActionTypes.SET_WAITING_ITEMS) {
        return {
            ...state,
            items: action.payload,
            isLoaded: true,
        };
    }

    return state;
};

export default waiting;
