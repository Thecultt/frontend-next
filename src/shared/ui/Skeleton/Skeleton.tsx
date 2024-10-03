'use client';

import React from 'react';

import './styles.sass';

interface Props {
    className?: string;
    radius?: number | 'full';
}

export const Skeleton: React.FC<Props> = ({ radius = 8, className = '' }) => (
    <div className={`tc-skeleton ${className}`} style={{ borderRadius: radius === 'full' ? 999 : radius }} />
);
