import { localStorageService } from '@/services/storage';
import { LS_KEYS } from '@/constants/keys';

import { CheckEmailState, CheckEmailActions, CheckEmailActionTypes } from '../types/ICheckEmail';

const initialState: CheckEmailState = {
    isSend: false,
    email: '',
    isExisting: false,
};

const check_email = (state = initialState, action: CheckEmailActions) => {
    if (action.type === CheckEmailActionTypes.SET_CHECK_EMAIL_IS_SEND) {
        return {
            ...state,
            isSend: action.payload,
        };
    }

    if (action.type === CheckEmailActionTypes.SET_CHECK_EMAIL_EMAIL) {
        return {
            ...state,
            email: action.payload,
        };
    }

    if (action.type === CheckEmailActionTypes.SET_CHECK_EMAIL_IS_EXISTING) {
        return {
            ...state,
            isExisting: action.payload,
        };
    }

    return state;
};

export default check_email;
