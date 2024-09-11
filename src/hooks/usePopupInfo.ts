import { useDispatch } from 'react-redux';
import { useScrollLock } from 'usehooks-ts';

import { PopupInfo } from '@/models/IPopupInfo';

import { setOpenInfoPopup, setCloseInfoPopup } from '@/redux/actions/popup_info';

import { useTypedSelector } from './useTypedSelector';

export const usePopupInfo = () => {
    const dispatch = useDispatch();

    const popupState = useTypedSelector(({ popup_info }) => popup_info);

    const { lock, unlock } = useScrollLock();

    const openPopupInfo = (info: PopupInfo) => {
        dispatch(setOpenInfoPopup(info));

        lock();
    };

    const closePopupInfo = () => {
        dispatch(setCloseInfoPopup());

        unlock();
    };

    return {
        openPopupInfo,
        closePopupInfo,
        state: popupState,
    };
};
