import { useDispatch } from 'react-redux';

import { PopupInfo } from '@/models/IPopupInfo';

import { setOpenInfoPopup, setCloseInfoPopup } from '@/redux/actions/popup_info';

import { useTypedSelector } from './useTypedSelector';

export const usePopupInfo = () => {
    const dispatch = useDispatch();

    const popupState = useTypedSelector(({ popup_info }) => popup_info);

    const openPopupInfo = (info: PopupInfo) => {
        dispatch(setOpenInfoPopup(info));
    };

    const closePopupInfo = (info: PopupInfo) => {
        dispatch(setCloseInfoPopup(info));
    };

    return {
        openPopupInfo,
        closePopupInfo,
        state: popupState,
    };
};
