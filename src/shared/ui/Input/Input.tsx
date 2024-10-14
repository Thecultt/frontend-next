'use client';

import React from 'react';
import { useOnClickOutside, useToggle } from 'usehooks-ts';
import { AnimatePresence, motion } from 'framer-motion';
import MaskInput from 'react-input-mask';

import { getClassNames } from '@/functions/getClassNames';
import { InfoIcon } from '@/assets/icons';
import { DEFAULT_TRANSITION } from '@/constants/animation';
import { InputProps, IOption } from '@/types/ui';

import { Spinner } from '../Spinner/Spinner';
import './styles.sass';

const getHintValue = (hint: string | IOption) => (typeof hint === 'string' ? hint : hint.value);
const getHintLabel = (hint: string | IOption) => (typeof hint === 'string' ? hint : hint.label);

export const Input: React.FC<InputProps> = ({
    label,
    error,
    info,
    disabled,
    maskProps,
    value,
    className = '',
    type = 'text',
    theme = 'white',
    placeholder = label,
    hints = [],
    needFilterHints = true,
    hintsIsLoading = false,
    renderHint,
    onFocus,
    onChange,
    ...inputProps
}) => {
    const mainRef = React.useRef<HTMLDivElement>(null);
    const infoRef = React.useRef<HTMLDivElement>(null);
    const infoButtonRef = React.useRef<HTMLButtonElement>(null);

    const [infoIsVisible, toggleInfoVisible, setInfoVisible] = useToggle(false);
    const [hintsIsVisible, _toggleHintsVisible, setHintsVisible] = useToggle(false);

    const filteredHints = React.useMemo(() => {
        if (!value || !needFilterHints) {
            return hints;
        }

        return hints.filter((x) => getHintLabel(x).toLowerCase().indexOf(value.toString().toLowerCase()) >= 0);
    }, [value, hints, needFilterHints]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const handleHintClick = (hint: string) => {
        setHintsVisible(false);
        onChange?.(hint);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setHintsVisible(true);
        onFocus?.(e);
    };

    const commonProps = {
        value,
        type,
        placeholder,
        disabled,
        className: 'tc-input__field',
        onChange: handleChange,
        onFocus: handleFocus,
    };

    useOnClickOutside<HTMLDivElement | HTMLButtonElement>([infoRef, infoButtonRef], () => setInfoVisible(false));
    useOnClickOutside(mainRef, () => setHintsVisible(false));

    React.useEffect(() => {
        if (infoIsVisible) {
            setHintsVisible(false);
        }
    }, [infoIsVisible]);

    return (
        <div
            ref={mainRef}
            className={getClassNames(`tc-input tc-input--theme-${theme} ${className}`, {
                'tc-input--error': !!error,
            })}
        >
            <div className="tc-input__wrapper">
                <label className="tc-input__l-wrapper">
                    {maskProps ? (
                        <MaskInput {...commonProps} {...maskProps} {...inputProps} />
                    ) : (
                        <input {...commonProps} {...inputProps} />
                    )}

                    <span className="tc-input__label">{label}</span>
                </label>

                <AnimatePresence>
                    {hintsIsVisible && (filteredHints.length > 0 || hintsIsLoading) && !disabled && (
                        <motion.div
                            key="input-hints"
                            className="tc-input-hints"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={DEFAULT_TRANSITION}
                        >
                            <div className="tc-input-hints__wrapper">
                                {hintsIsLoading ? (
                                    <div className="tc-input-hints__loading">
                                        <Spinner />
                                    </div>
                                ) : (
                                    filteredHints.map((hint) => (
                                        <button
                                            key={getHintValue(hint)}
                                            type="button"
                                            className="tc-input-hints__button"
                                            onClick={() => handleHintClick(getHintValue(hint))}
                                        >
                                            {typeof hint !== 'string' && !!renderHint
                                                ? renderHint(hint)
                                                : getHintLabel(hint)}
                                        </button>
                                    ))
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

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
