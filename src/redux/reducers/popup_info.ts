import { PopupInfoState, PopupInfoActionTypes, PopupInfoActions } from '@/redux/types/IPopupInfo';

const initialState: PopupInfoState = {
    isOpen: false,
    title: '',
    content: '',
    btn: undefined,
    callbackClose: () => {},
};

const popup_info = (state = initialState, action: PopupInfoActions): PopupInfoState => {
    if (action.type === PopupInfoActionTypes.SET_OPEN_INFO_POPUP) {
        return {
            ...state,

            isOpen: true,
            ...action.payload,
        };
    }

    if (action.type === PopupInfoActionTypes.SET_CLOSE_INFO_POPUP) {
        return initialState;
    }

    return state;
};

export default popup_info;
