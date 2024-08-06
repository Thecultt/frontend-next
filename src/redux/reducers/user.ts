import { GENDER_IDS, GENDERS } from '@/constants/catalog';

import { UserState, UserActions, UserActionTypes } from '../types/IUser';

const initialState: UserState = {
    isLoaded: false,
    isSending: false,
    user: {},
};

const user = (state = initialState, action: UserActions) => {
    if (action.type === UserActionTypes.SET_USER) {
        if (action.payload.gender === GENDER_IDS.female) {
            action.payload.gender = GENDERS.female;
        }

        if (action.payload.gender === GENDER_IDS.male) {
            action.payload.gender = GENDERS.male;
        }

        return {
            ...state,
            isLoaded: true,
            user: action.payload,
        };
    }

    if (action.type === UserActionTypes.SET_USER_IS_SENDING) {
        return {
            ...state,
            isSending: action.payload,
        };
    }

    return state;
};

export default user;
