'use client';

import React from 'react';

import { CheckmarkIcon, InfoIcon } from '@/assets/icons';
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
    disabled = false,
    start = false,
    onInfoClick,
    ...props
}) => (
    <label
        className={getClassNames(`tc-radio tc-radio--size-${size} ${className}`, {
            'tc-radio--wide': wide,
            'tc-radio--disabled': disabled,
            'tc-radio--start': start,
        })}
    >
        <input type="radio" className="tc-radio__input" checked={checked} disabled={disabled} {...props} />
        <div className="tc-radio__control">{checked && <CheckmarkIcon className="tc-radio__checkmark" />}</div>
        {defaultChildrenStyles ? <p className="tc-radio__content">{children}</p> : children}
        {onInfoClick && (
            <InfoIcon
                className="tc-radio__info"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onInfoClick();
                }}
            />
        )}
    </label>
);
