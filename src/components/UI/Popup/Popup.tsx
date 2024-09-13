'use client';

import React from 'react';
import { useScrollLock, useOnClickOutside } from 'usehooks-ts';
import { motion, AnimatePresence } from 'framer-motion';

import { Popup as PopupModel } from '@/models/IPopup';
import { Button } from '@/components';
import { XIcon } from '@/assets/icons';
import { Noop } from '@/types/functions';

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
                        transition={{ duration: 0.2 }}
                    ></motion.div>

                    <motion.div
                        key="popup"
                        className="tc-popup"
                        initial={{ opacity: 0, y: 30 }}
                        exit={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="tc-popup-content" ref={PopupRef}>
                            <XIcon className="tc-popup-content-close" onClick={onCloseWrapper} />

                            <h3 className="tc-popup-content__title">{title}</h3>

                            {content}

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
