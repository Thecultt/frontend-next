'use client';

import React from 'react';

import { usePopupInfo } from '@/hooks/usePopupInfo';
import { NewPopup } from '@/components';

export const PopupInfo: React.FC = () => {
    const {
        closePopupInfo,
        state: { isOpen, title, content, btn, callbackClose },
    } = usePopupInfo();

    return (
        <NewPopup
            isOpen={isOpen}
            onClose={closePopupInfo}
            callbackClose={callbackClose}
            title={title}
            content={content}
            btn={btn}
        />
    );
};
