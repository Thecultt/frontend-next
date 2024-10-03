'use client';

import React from 'react';

import { CheckmarkIcon } from '@/assets/icons';
import { Noop } from '@/types/functions';

import './styles.sass';

interface Props extends React.PropsWithChildren {
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    className?: string;
    size?: 's' | 'm' | 'l';
    onChange?: Noop;
}

export const Checkbox: React.FC<Props> = ({ children, checked, className = '', size = 'l', ...props }) => (
    <label className={`tc-checkbox tc-checkbox--size-${size} ${className}`}>
        <input type="checkbox" className="tc-checkbox__input" checked={checked} {...props} />
        <div className="tc-checkbox__control">{checked && <CheckmarkIcon className="tc-checkbox__checkmark" />}</div>
        {children}
    </label>
);
