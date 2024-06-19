export interface RegisterState {
    isSend: boolean;
}

export enum RegisterActionTypes {
    SET_REGISTER_IS_SEND = 'SET_REGISTER_IS_SEND',
}

interface setRegisterIsSend {
    type: RegisterActionTypes.SET_REGISTER_IS_SEND;
    payload: boolean;
}

export type RegisterActions = setRegisterIsSend;
