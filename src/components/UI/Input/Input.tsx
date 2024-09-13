'use client';

import React from 'react';
import { useOnClickOutside, useToggle } from 'usehooks-ts';
import { AnimatePresence, motion } from 'framer-motion';

import { getClassNames } from '@/functions/getClassNames';
import { InfoIcon } from '@/assets/icons';
import { DEFAULT_TRANSITION } from '@/constants/animation';
import { InputProps } from '@/types/ui';

import './styles.sass';

export const Input: React.FC<InputProps> = ({
    label,
    error,
    info,
    className = '',
    type = 'text',
    theme = 'white',
    placeholder = label,
    ...inputProps
}) => {
    const infoRef = React.useRef<HTMLDivElement>(null);
    const infoButtonRef = React.useRef<HTMLButtonElement>(null);

    const [infoIsVisible, toggleInfoVisible, setInfoVisible] = useToggle(false);

    useOnClickOutside<HTMLDivElement | HTMLButtonElement>([infoRef, infoButtonRef], () => setInfoVisible(false));

    return (
        <div
            className={getClassNames(`tc-input tc-input--theme-${theme} ${className}`, {
                'tc-input--error': !!error,
            })}
        >
            <div className="tc-input__wrapper">
                <label className="tc-input__l-wrapper">
                    <input type={type} className="tc-input__field" placeholder={placeholder} {...inputProps} />
                    <span className="tc-input__label">{label}</span>
                </label>

                {!!info && (
                    <>
                        <div className="tc-input__r-wrapper">
                            <button
                                ref={infoButtonRef}
                                type="button"
                                className="tc-input-info"
                                onClick={toggleInfoVisible}
                            >
                                <InfoIcon className="tc-input-info__icon" />
                            </button>
                        </div>

                        <AnimatePresence>
                            {infoIsVisible && (
                                <motion.div
                                    ref={infoRef}
                                    key="input-info-message"
                                    className="tc-input-info-message"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={DEFAULT_TRANSITION}
                                >
                                    {info}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                )}
            </div>

            <AnimatePresence>
                {!!error && (
                    <motion.p
                        key="input-error"
                        className="tc-input__error"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={DEFAULT_TRANSITION}
                    >
                        {error}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};
