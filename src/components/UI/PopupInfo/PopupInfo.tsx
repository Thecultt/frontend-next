'use client';

import React from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { usePopupInfo } from '@/hooks/usePopupInfo';
import { Button } from '@/components';
import { XIcon } from '@/assets/icons';

import './styles.sass';

export const PopupInfo: React.FC = () => {
    const PopupInfoRef = React.useRef(null);

    const {
        closePopupInfo,
        state: { isOpen, title, content, btn, onClose },
    } = usePopupInfo();

    const onClickClose = () => {
        closePopupInfo();

        onClose?.();
    };

    useOnClickOutside(PopupInfoRef, onClickClose);

    return (
        isOpen && (
            <div className="tc-popup-info">
                <div className="tc-popup-info-content" ref={PopupInfoRef}>
                    <XIcon className="tc-popup-info-content-close" onClick={onClickClose} />

                    <h3 className="tc-popup-info-content__title">{title}</h3>

                    {content}

                    {btn && (
                        <div className="tc-popup-info-content-btn">
                            <Button label={btn} wide />
                        </div>
                    )}
                </div>
            </div>
        )
    );
};
