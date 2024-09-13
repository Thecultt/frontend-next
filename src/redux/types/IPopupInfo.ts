import { Popup, PopupContent } from '@/models/IPopup';

export interface PopupInfoState extends Popup {}

export enum PopupInfoActionTypes {
    SET_OPEN_INFO_POPUP = 'SET_OPEN_INFO_POPUP',
    SET_CLOSE_INFO_POPUP = 'SET_CLOSE_INFO_POPUP',
}

interface setOpenPopup {
    type: PopupInfoActionTypes.SET_OPEN_INFO_POPUP;
    payload: PopupContent;
}

interface setClosePopup {
    type: PopupInfoActionTypes.SET_CLOSE_INFO_POPUP;
}

export type PopupInfoActions = setOpenPopup | setClosePopup;
