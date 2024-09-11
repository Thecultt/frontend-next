import { PopupInfo } from '@/models/IPopupInfo';
import { PopupInfoActionTypes } from '@/redux/types/IPopupInfo';

export const setOpenInfoPopup = (info: PopupInfo) => ({
    type: PopupInfoActionTypes.SET_OPEN_INFO_POPUP,
    payload: info,
});

export const setCloseInfoPopup = (info: PopupInfo) => ({
    type: PopupInfoActionTypes.SET_CLOSE_INFO_POPUP,
    payload: info,
});
