import {
    RecoveryPasswordState,
    RecoveryPasswordActions,
    RecoveryPasswordActionTypes,
} from '../types/IRecoveryPassword';

const initialState: RecoveryPasswordState = {
    isSend: false,
};

const recovery_password = (state = initialState, action: RecoveryPasswordActions) => {
    if (action.type === RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_SEND) {
        return {
            ...state,
            isSend: action.payload,
        };
    }

    return state;
};

export default recovery_password;
