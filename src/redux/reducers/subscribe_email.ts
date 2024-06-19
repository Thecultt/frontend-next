import { SubscribeEmailState, SubscribeEmailActions, SubscribeEmailActionTypes } from '../types/ISubscribeEmail';

const initialState: SubscribeEmailState = {
    isSending: false,
    isSend: false,
};

const subscribe_email = (state = initialState, action: SubscribeEmailActions) => {
    if (action.type === SubscribeEmailActionTypes.SET_SUBSCRIBE_EMAIL_IS_SENDING) {
        return {
            ...state,
            isSending: action.payload,
        };
    }

    if (action.type === SubscribeEmailActionTypes.SET_SUBSCRIBE_EMAIL_IS_SEND) {
        return {
            ...state,
            isSend: action.payload,
        };
    }

    return state;
};

export default subscribe_email;
