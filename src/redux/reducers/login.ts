import { LoginState, LoginActions, LoginActionTypes } from '../types/ILogin';

const initialState: LoginState = {
    isSend: false,
};

const login = (state = initialState, action: LoginActions) => {
    if (action.type === LoginActionTypes.SET_LOGIN_IS_SEND) {
        return {
            ...state,
            isSend: action.payload,
        };
    }

    return state;
};

export default login;
