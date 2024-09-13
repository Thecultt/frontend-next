'use client';

import { useDispatch } from 'react-redux';

import { PopupContent } from '@/models/IPopup';

import { setOpenInfoPopup, setCloseInfoPopup } from '@/redux/actions/popup_info';

import { useTypedSelector } from './useTypedSelector';

export const usePopupInfo = () => {
    const dispatch = useDispatch();

    const popupState = useTypedSelector(({ popup_info }) => popup_info);

    const openPopupInfo = (info: PopupContent) => {
        dispatch(setOpenInfoPopup(info));
    };

    const closePopupInfo = () => {
        dispatch(setCloseInfoPopup());
    };

    return {
        openPopupInfo,
        closePopupInfo,
        state: popupState,
    };
};
