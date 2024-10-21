'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { TextareaProps } from '@/types/ui';
import { getClassNames } from '@/functions/getClassNames';
import { DEFAULT_TRANSITION } from '@/constants/animation';

import './styles.sass';

export const Textarea: React.FC<TextareaProps> = ({
    label,
    error,
    className = '',
    theme = 'white',
    placeholder = label,
    ...textareaProps
}) => (
    <div
        className={getClassNames(`tc-textarea tc-textarea--theme-${theme} ${className}`, {
            'tc-textarea--error': !!error,
        })}
    >
        <label className="tc-textarea__wrapper">
            <textarea className="tc-textarea__field" placeholder={placeholder} {...textareaProps} />
            <span className="tc-textarea__label">{label}</span>
        </label>

        <AnimatePresence>
            {!!error && (
                <motion.p
                    key="textarea-error"
                    className="tc-textarea__error"
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
