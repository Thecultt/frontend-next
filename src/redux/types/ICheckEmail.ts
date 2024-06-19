export interface CheckEmailState {
    isSend: boolean;
    email: string | null;
    isExisting: boolean;
}

export enum CheckEmailActionTypes {
    SET_CHECK_EMAIL_IS_SEND = 'SET_CHECK_EMAIL_IS_SEND',
    SET_CHECK_EMAIL_EMAIL = 'SET_CHECK_EMAIL_EMAIL',
    SET_CHECK_EMAIL_IS_EXISTING = 'SET_IS_EXISTING',
}

interface setCheckEmailIsSend {
    type: CheckEmailActionTypes.SET_CHECK_EMAIL_IS_SEND;
    payload: boolean;
}

interface setCheckEmailEmail {
    type: CheckEmailActionTypes.SET_CHECK_EMAIL_EMAIL;
    payload: string;
}

interface setCheckEmailIsExisting {
    type: CheckEmailActionTypes.SET_CHECK_EMAIL_IS_EXISTING;
    payload: boolean;
}

export type CheckEmailActions = setCheckEmailIsSend | setCheckEmailEmail | setCheckEmailIsExisting;
