'use client';

import React from 'react';
import { useScrollLock, useOnClickOutside } from 'usehooks-ts';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/shared/ui/Button/Button';
import { IPopup } from '@/models/IPopup';
import { XIcon } from '@/assets/icons';
import { Noop } from '@/types/functions';
import { DEFAULT_TRANSITION } from '@/constants/animation';

import './styles.sass';

interface Props extends React.PropsWithChildren, Omit<IPopup, 'content'> {
    onClose: Noop;
    maxWidth?: string;
    contentKey?: React.Key;
}

export const Popup: React.FC<Props> = ({
    children,
    isOpen,
    title,
    btn,
    maxWidth = '450px',
    contentKey,
    onClose,
    callbackClose,
}) => {
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
                        key="popup-backdrop"
                        className="tc-popup-backdrop"
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={DEFAULT_TRANSITION}
                    />

                    <motion.div
                        key={contentKey ?? 'popup'}
                        className="tc-popup"
                        initial={{ opacity: 0, y: 30 }}
                        exit={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={DEFAULT_TRANSITION}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="tc-popup-content" style={{ maxWidth }} ref={PopupRef}>
                            <XIcon className="tc-popup-content-close" onClick={onCloseWrapper} />

                            {title && <h3 className="tc-popup-content__title">{title}</h3>}

                            <div className="tc-popup-content__content">
                                {typeof children === 'string' || typeof children === 'number' ? (
                                    <p className="tc-popup-content__text">{children}</p>
                                ) : (
                                    children
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
