'use client';

import React from 'react';

import { getClassNames } from '@/functions/getClassNames';
import { Noop } from '@/types/functions';
import { CheckIcon } from '@/assets/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { DEFAULT_TRANSITION } from '@/constants/animation';

interface Props {
    label: string;
    selected: boolean;
    onClick: Noop;
}

export const Option: React.FC<Props> = ({ label, selected, onClick }) => (
    <button
        type="button"
        className={getClassNames('tc-select-option', {
            'tc-select-option--selected': selected,
        })}
        onClick={onClick}
        role="option"
        aria-selected={selected}
    >
        <span className="tc-select-option__label">{label}</span>
        <AnimatePresence mode="wait" initial={false}>
            {selected && (
                <motion.span
                    key="select-option-check"
                    style={{ display: 'flex' }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={DEFAULT_TRANSITION}
                >
                    <CheckIcon className="tc-select-option__icon" />
                </motion.span>
            )}
        </AnimatePresence>
    </button>
);
