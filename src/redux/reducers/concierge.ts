import { ConciergeState, ConciergeActionTypes, ConciergeActions } from '../types/IConcierge';

const initialState: ConciergeState = {
    isSending: false,
    isSend: false,
};

const concierge = (state = initialState, action: ConciergeActions) => {
    if (action.type === ConciergeActionTypes.SET_CONCIERGE_IS_SENDING) {
        return {
            ...state,
            isSending: action.payload,
        };
    }

    if (action.type === ConciergeActionTypes.SET_CONCIERGE_IS_SEND) {
        return {
            ...state,
            isSend: action.payload,
        };
    }

    return state;
};

export default concierge;
