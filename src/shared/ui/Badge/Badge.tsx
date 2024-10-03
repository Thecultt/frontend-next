'use client';

import React from 'react';

import { getClassNames } from '@/functions/getClassNames';
import { Noop } from '@/types/functions';

import './styles.sass';

interface Props extends React.PropsWithChildren {
    className?: string;
    isGreen?: boolean;
    onClick?: Noop;
}

export const Badge: React.FC<Props> = ({ children, className = '', isGreen = false, onClick }) => (
    <span
        className={getClassNames(`tc-badge ${className}`, {
            'tc-badge--green': isGreen,
            'tc-badge--clickable': !!onClick,
        })}
        onClick={onClick}
    >
        {children}
    </span>
);
