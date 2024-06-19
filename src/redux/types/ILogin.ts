export interface LoginState {
    isSend: boolean;
}

export enum LoginActionTypes {
    SET_LOGIN_IS_SEND = 'SET_LOGIN_IS_SEND',
}

interface setLoginIsSend {
    type: LoginActionTypes.SET_LOGIN_IS_SEND;
    payload: boolean;
}

export type LoginActions = setLoginIsSend;
