'use client';

import React from 'react';

import { getClassNames } from '@/functions/getClassNames';

import './styles.sass';

interface Props {
    className?: string;
    radius?: number | 'full';
    dark?: boolean;
}

export const Skeleton: React.FC<Props> = ({ radius = 8, className = '', dark = false }) => (
    <div
        className={getClassNames(`tc-skeleton ${className}`, {
            'tc-skeleton--dark': dark,
        })}
        style={{ borderRadius: radius === 'full' ? 999 : radius }}
    />
);
