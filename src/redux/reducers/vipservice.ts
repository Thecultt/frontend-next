import { VipserviceState, VipserviceActionTypes, VipserviceActions } from '../types/IVipservice';

const initialState: VipserviceState = {
    isSending: false,
    isSend: false,
};

const vipservice = (state = initialState, action: VipserviceActions) => {
    if (action.type === VipserviceActionTypes.SET_VIPSERVICE_IS_SENDING) {
        return {
            ...state,
            isSending: action.payload,
        };
    }

    if (action.type === VipserviceActionTypes.SET_VIPSERVICE_IS_SEND) {
        return {
            ...state,
            isSend: action.payload,
        };
    }

    return state;
};

export default vipservice;
