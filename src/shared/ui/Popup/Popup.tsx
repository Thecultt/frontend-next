'use client';

import React from 'react';
import { useScrollLock, useOnClickOutside } from 'usehooks-ts';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/shared/ui/Button/Button';
import { Popup as PopupModel } from '@/models/IPopup';
import { XIcon } from '@/assets/icons';
import { Noop } from '@/types/functions';
import { DEFAULT_TRANSITION } from '@/constants/animation';

import './styles.sass';

interface Props extends PopupModel {
    onClose: Noop;
}

export const Popup: React.FC<Props> = ({ isOpen, title, content, btn, onClose, callbackClose }) => {
    const PopupRef = React.useRef(null);

    const { lock, unlock } = useScrollLock();

    const onCloseWrapper = () => {
        onClose();
        callbackClose?.();
    };

    useOnClickOutside(PopupRef, onCloseWrapper);

    React.useEffect(() => {
        isOpen ? lock() : unlock();
    }, [isOpen]);

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <>
                    <motion.div
                        className="tc-popup-backdrop"
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={DEFAULT_TRANSITION}
                    />

                    <motion.div
                        key="popup"
                        className="tc-popup"
                        initial={{ opacity: 0, y: 30 }}
                        exit={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={DEFAULT_TRANSITION}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="tc-popup-content" ref={PopupRef}>
                            <XIcon className="tc-popup-content-close" onClick={onCloseWrapper} />

                            {title && <h3 className="tc-popup-content__title">{title}</h3>}

                            <div className="tc-popup-content__content">
                                {typeof content === 'string' || typeof content === 'number' ? (
                                    <p className="tc-popup-content__text">{content}</p>
                                ) : (
                                    content
                                )}
                            </div>

                            {btn && (
                                <div className="tc-popup-content-btn">
                                    <Button
                                        label={btn.label}
                                        href={btn.href}
                                        onClick={() => {
                                            btn?.onClick?.();
                                            onCloseWrapper();
                                        }}
                                        wide
                                    />
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
