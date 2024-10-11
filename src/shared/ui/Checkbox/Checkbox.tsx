'use client';

import React from 'react';

import { CheckmarkIcon } from '@/assets/icons';
import { CheckboxProps } from '@/types/ui';
import { getClassNames } from '@/functions/getClassNames';

import './styles.sass';

export const Checkbox: React.FC<CheckboxProps> = ({
    children,
    checked,
    error,
    className = '',
    size = 'l',
    defaultChildrenStyles = false,
    wide = false,
    ...props
}) => (
    <label
        className={getClassNames(`tc-checkbox tc-checkbox--size-${size} ${className}`, {
            'tc-checkbox--error': !!error,
            'tc-checkbox--wide': wide,
        })}
    >
        <input type="checkbox" className="tc-checkbox__input" checked={checked} {...props} />
        <div className="tc-checkbox__control">{checked && <CheckmarkIcon className="tc-checkbox__checkmark" />}</div>
        {defaultChildrenStyles ? <p className="tc-checkbox__content">{children}</p> : children}
    </label>
);
