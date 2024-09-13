'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOnClickOutside, useToggle } from 'usehooks-ts';

import { DEFAULT_TRANSITION } from '@/constants/animation';
import { getClassNames } from '@/functions/getClassNames';
import { ChevronDownIcon, InfoIcon } from '@/assets/icons';
import { IOption, MultiSelectProps, SelectProps, SingleSelectProps } from '@/types/ui';

import { Option } from './Option';
import './styles.sass';

export const Select: React.FC<SelectProps> = ({
    label,
    value,
    options,
    error,
    info,
    onChange,
    theme = 'white',
    className = '',
    placeholder = label,
    disabled = false,
    isMulti = false,
}) => {
    const selectRef = React.useRef<HTMLDivElement>(null);
    const infoRef = React.useRef<HTMLDivElement>(null);
    const infoIconRef = React.useRef<HTMLDivElement>(null);

    const [isOpened, toggleIsOpened, setIsOpened] = useToggle(false);
    const [infoIsVisible, toggleInfoVisible, setInfoVisible] = useToggle(false);

    const values = React.useMemo(
        () => (!value ? [] : isMulti ? (value as string[]) : [value as string]),
        [value, isMulti],
    );
    const selectedOptions = React.useMemo(() => {
        if (!values.length || !options.length) {
            return [];
        }

        return values.reduce((state, currenValue) => {
            const foundItem = options.find((option) => option.value === currenValue);
            if (foundItem) {
                return [...state, foundItem];
            }

            return state;
        }, [] as IOption[]);
    }, [options, values]);

    const handleChange = (value: string) => {
        if (isMulti) {
            (onChange as MultiSelectProps['onChange'])?.(
                values.includes(value) ? values.filter((item) => item !== value) : [...values, value],
            );
        } else {
            (onChange as SingleSelectProps['onChange'])?.(value);
            setIsOpened(false);
        }
    };

    const handleInfoClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        toggleInfoVisible();
        isOpened && setIsOpened(false);
    };

    useOnClickOutside(selectRef, () => setIsOpened(false));
    useOnClickOutside([infoRef, infoIconRef], () => setInfoVisible(false));

    return (
        <div
            ref={selectRef}
            className={getClassNames(`tc-select tc-select--theme-${theme} ${className}`, {
                'tc-select--opened': isOpened,
                'tc-select--has-value': values.length > 0,
                'tc-select--multi': isMulti,
                'tc-select--disabled': disabled,
                'tc-select--error': !!error,
            })}
        >
            <div className="tc-select__wrapper">
                <button
                    type="button"
                    className="tc-select-control"
                    onClick={toggleIsOpened}
                    tabIndex={0}
                    role="combobox"
                    aria-controls="listbox"
                    aria-haspopup="listbox"
                    aria-expanded={isOpened}
                >
                    <div className="tc-select-control__l-wrapper">
                        <span className="tc-select-control__label">{label}</span>
                        <span className="tc-select-control__value">
                            {selectedOptions.length > 0
                                ? selectedOptions.map((item) => item.label).join(', ')
                                : placeholder}
                        </span>
                    </div>
                    <div className="tc-select-control__r-wrapper">
                        <div className="tc-select-icon-btn tc-select-icon-btn-arrow">
                            <ChevronDownIcon className="tc-select-icon-btn__icon" />
                        </div>
                        {!!info && (
                            <div
                                ref={infoIconRef}
                                className="tc-select-icon-btn tc-select-icon-btn-info"
                                onClick={handleInfoClick}
                            >
                                <InfoIcon className="tc-select-icon-btn__icon" />
                            </div>
                        )}
                    </div>
                </button>

                <AnimatePresence>
                    {isOpened && !disabled && (
                        <motion.div
                            key="select-options"
                            className="tc-select-options"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={DEFAULT_TRANSITION}
                            role="listbox"
                        >
                            <div className="tc-select-options__wrapper">
                                {options.map((item) => (
                                    <Option
                                        key={item.value}
                                        label={item.label}
                                        selected={values.includes(item.value)}
                                        onClick={() => handleChange(item.value)}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {!!info && infoIsVisible && (
                        <motion.div
                            ref={infoRef}
                            key="select-info"
                            className="tc-select-info"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={DEFAULT_TRANSITION}
                        >
                            {info}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {!!error && (
                    <motion.p
                        key="select-error"
                        className="tc-select__error"
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
