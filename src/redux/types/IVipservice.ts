export interface VipserviceState {
    isSending: boolean;
    isSend: boolean;
}

export enum VipserviceActionTypes {
    SET_VIPSERVICE_IS_SENDING = 'SET_VIPSERVICE_IS_SENDING',
    SET_VIPSERVICE_IS_SEND = 'SET_VIPSERVICE_IS_SEND',
}

interface setVipserviceIsSending {
    type: VipserviceActionTypes.SET_VIPSERVICE_IS_SENDING;
    payload: boolean;
}

interface setVipserviceIsSend {
    type: VipserviceActionTypes.SET_VIPSERVICE_IS_SEND;
    payload: boolean;
}

export type VipserviceActions = setVipserviceIsSending | setVipserviceIsSend;
