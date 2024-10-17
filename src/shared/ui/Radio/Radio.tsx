'use client';

import React from 'react';

import { CheckmarkIcon } from '@/assets/icons';
import { RadioProps } from '@/types/ui';
import { getClassNames } from '@/functions/getClassNames';

import './styles.sass';

export const Radio: React.FC<RadioProps> = ({
    children,
    checked,
    className = '',
    size = 'l',
    defaultChildrenStyles = false,
    wide = false,
    ...props
}) => (
    <label
        className={getClassNames(`tc-radio tc-radio--size-${size} ${className}`, {
            'tc-radio--wide': wide,
        })}
    >
        <input type="radio" className="tc-radio__input" checked={checked} {...props} />
        <div className="tc-radio__control">{checked && <CheckmarkIcon className="tc-radio__checkmark" />}</div>
        {defaultChildrenStyles ? <p className="tc-radio__content">{children}</p> : children}
    </label>
);
