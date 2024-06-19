import { RegisterState, RegisterActions, RegisterActionTypes } from '../types/IRegister';

const initialState: RegisterState = {
    isSend: false,
};

const register = (state = initialState, action: RegisterActions) => {
    if (action.type === RegisterActionTypes.SET_REGISTER_IS_SEND) {
        return {
            ...state,
            isSend: action.payload,
        };
    }

    return state;
};

export default register;
