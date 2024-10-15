'use client';

import React from 'react';

import { getClassNames } from '@/functions/getClassNames';
import { Noop } from '@/types/functions';
import { BadgeTheme } from '@/types/ui';
import { InfoIcon } from '@/assets/icons';

import './styles.sass';

interface Props extends React.PropsWithChildren {
    className?: string;
    theme?: BadgeTheme;
    onClick?: Noop;
}

export const Badge: React.FC<Props> = ({ children, className = '', theme = 'default', onClick }) => {
    const isClickable = !!onClick;

    return (
        <span
            className={getClassNames(`tc-badge tc-badge--${theme} ${className}`, {
                'tc-badge--clickable': isClickable,
            })}
            onClick={onClick}
        >
            {children}
            {isClickable && <InfoIcon className="tc-badge__icon" />}
        </span>
    );
};
