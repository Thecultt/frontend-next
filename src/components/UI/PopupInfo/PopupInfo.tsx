import React from 'react';
import { useScrollLock, useOnClickOutside } from 'usehooks-ts';

import { usePopupInfo } from '@/hooks/usePopupInfo';

import { Button } from '@/components';

import { XIcon } from '@/assets/icons';

import './style.sass';

export const PopupInfo: React.FC = () => {
    const PopupInfoRef = React.useRef(null);

    const {
        closePopupInfo,
        state: { isOpen, title, content, btn, onClose },
    } = usePopupInfo();

    const { lock, unlock } = useScrollLock();

    React.useEffect(() => {
        if (isOpen) {
            lock();
        } else {
            unlock();
        }
    }, [isOpen]);

    const onClickClose = () => {
        closePopupInfo({
            title: '',
            content: <></>,
            btn: '',
            onClose: () => {},
        });

        if (onClose) onClose();
    };

    useOnClickOutside(PopupInfoRef, onClickClose);

    return (
        <>
            {isOpen && (
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
            )}
        </>
    );
};
