import { UserState, UserActions, UserActionTypes } from '../types/IUser';

const initialState: UserState = {
    isLoaded: false,
    isSending: false,
    user: {},
};

const user = (state = initialState, action: UserActions) => {
    if (action.type === UserActionTypes.SET_USER) {
        if (action.payload.gender === 1) {
            action.payload.gender = 'Женский';
        }

        if (action.payload.gender === 2) {
            action.payload.gender = 'Мужской';
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
