'use client';

import React from 'react';

import { Popup } from '@/shared/ui';
import { usePopupInfo } from '@/hooks/usePopupInfo';

export const PopupInfo: React.FC = () => {
    const {
        closePopupInfo,
        state: { isOpen, title, content, btn, callbackClose },
    } = usePopupInfo();

    return (
        <Popup isOpen={isOpen} onClose={closePopupInfo} callbackClose={callbackClose} title={title} btn={btn}>
            {content}
        </Popup>
    );
};
