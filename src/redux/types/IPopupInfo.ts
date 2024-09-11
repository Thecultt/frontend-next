import { PopupInfo } from '@/models/IPopupInfo';

export interface PopupInfoState extends PopupInfo {
    isOpen: boolean;
}

export enum PopupInfoActionTypes {
    SET_OPEN_INFO_POPUP = 'SET_OPEN_INFO_POPUP',
    SET_CLOSE_INFO_POPUP = 'SET_CLOSE_INFO_POPUP',
}

interface setOpenPopup {
    type: PopupInfoActionTypes.SET_OPEN_INFO_POPUP;
    payload: PopupInfo;
}

interface setClosePopup {
    type: PopupInfoActionTypes.SET_CLOSE_INFO_POPUP;
}

export type PopupInfoActions = setOpenPopup | setClosePopup;
