export interface ConciergeState {
    isSending: boolean;
    isSend: boolean;
}

export enum ConciergeActionTypes {
    SET_CONCIERGE_IS_SENDING = 'SET_CONCIERGE_IS_SENDING',
    SET_CONCIERGE_IS_SEND = 'SET_CONCIERGE_IS_SEND',
}

interface setConciergeIsSending {
    type: ConciergeActionTypes.SET_CONCIERGE_IS_SENDING;
    payload: boolean;
}

interface setConciergeIsSend {
    type: ConciergeActionTypes.SET_CONCIERGE_IS_SEND;
    payload: boolean;
}

export type ConciergeActions = setConciergeIsSending | setConciergeIsSend;
