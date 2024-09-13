import { PopupContent } from '@/models/IPopup';
import { PopupInfoActionTypes } from '@/redux/types/IPopupInfo';

export const setOpenInfoPopup = (info: PopupContent) => ({
    type: PopupInfoActionTypes.SET_OPEN_INFO_POPUP,
    payload: info,
});

export const setCloseInfoPopup = () => ({
    type: PopupInfoActionTypes.SET_CLOSE_INFO_POPUP,
});
