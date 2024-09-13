import React from 'react';
import { useScrollLock, useOnClickOutside } from 'usehooks-ts';

import { Popup as PopupModel } from '@/models/IPopup';
import { Button } from '@/components';
import { XIcon } from '@/assets/icons';
import { Noop } from '@/types/functions';

import './styles.sass';

interface Props extends PopupModel {
    onClose: Noop;
}

export const Popup: React.FC<Props> = ({ isOpen, title, content, btn, onClose }) => {
    const PopupRef = React.useRef(null);

    const { lock, unlock } = useScrollLock();

    useOnClickOutside(PopupRef, onClose);

    React.useEffect(() => {
        isOpen ? lock() : unlock();
    }, [isOpen]);

    return (
        isOpen && (
            <div className="tc-popup">
                <div className="tc-popup-content" ref={PopupRef}>
                    <XIcon className="tc-popup-content-close" onClick={onClose} />

                    <h3 className="tc-popup-content__title">{title}</h3>

                    {content}

                    {btn && (
                        <div className="tc-popup-content-btn">
                            <Button label={btn} wide />
                        </div>
                    )}
                </div>
            </div>
        )
    );
};
