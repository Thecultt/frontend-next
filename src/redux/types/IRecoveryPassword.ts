export interface RecoveryPasswordState {
    isSend: boolean;
}

export enum RecoveryPasswordActionTypes {
    SET_RECOVERY_PASSWORD_IS_SEND = 'SET_RECOVERY_PASSWORD_IS_SEND',
}

interface setRecoveryPasswordIsSend {
    type: RecoveryPasswordActionTypes.SET_RECOVERY_PASSWORD_IS_SEND;
    payload: boolean;
}

export type RecoveryPasswordActions = setRecoveryPasswordIsSend;
