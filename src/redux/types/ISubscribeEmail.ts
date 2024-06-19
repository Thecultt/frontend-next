export interface SubscribeEmailState {
    isSending: boolean;
    isSend: boolean;
}

export enum SubscribeEmailActionTypes {
    SET_SUBSCRIBE_EMAIL_IS_SENDING = 'SET_SUBSCRIBE_EMAIL_IS_SENDING',
    SET_SUBSCRIBE_EMAIL_IS_SEND = 'SET_SUBSCRIBE_EMAIL_IS_SEND',
}

interface setSubscribeEmailIsSending {
    type: SubscribeEmailActionTypes.SET_SUBSCRIBE_EMAIL_IS_SENDING;
    payload: boolean;
}

interface setSubscribeEmailIsSend {
    type: SubscribeEmailActionTypes.SET_SUBSCRIBE_EMAIL_IS_SEND;
    payload: boolean;
}

export type SubscribeEmailActions = setSubscribeEmailIsSending | setSubscribeEmailIsSend;
