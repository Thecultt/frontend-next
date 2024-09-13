import { PopupInfoState, PopupInfoActionTypes, PopupInfoActions } from '@/redux/types/IPopupInfo';

const initialState: PopupInfoState = {
    isOpen: false,
    title: '',
    content: '',
    btn: '',
    callbackClose: () => {},
};

const popup_info = (state = initialState, action: PopupInfoActions) => {
    if (action.type === PopupInfoActionTypes.SET_OPEN_INFO_POPUP) {
        return {
            ...state,

            isOpen: true,
            ...action.payload,
        };
    }

    if (action.type === PopupInfoActionTypes.SET_CLOSE_INFO_POPUP) {
        return {
            ...state,

            isOpen: false,
            title: '',
            content: '',
            btn: '',
            callbackClose: () => {},
        };
    }

    return state;
};

export default popup_info;
