'use client';

import React from 'react';
import Link from 'next/link';

import { Noop } from '@/types/functions';
import { getClassNames } from '@/functions/getClassNames';

import './styles.sass';

interface Props {
    // Common props
    className?: string;
    label?: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    disabled?: boolean;
    theme?: 'dark' | 'light' | 'transparent';
    size?: 'm' | 'l';
    wide?: boolean;
    onClick?: Noop;
    // Link props
    href?: string;
    target?: React.HTMLAttributeAnchorTarget;
}

export const Button: React.FC<Props> = ({
    label,
    className = '',
    type = 'button',
    icon,
    iconPosition = 'left',
    theme = 'dark',
    size = 'l',
    disabled = false,
    wide = false,
    href,
    target,
    onClick,
}) => {
    const classNames = getClassNames(`tc-button tc-button--theme-${theme} tc-button--size-${size} ${className}`, {
        'tc-button--disabled': disabled,
        'tc-button--wide': wide,
        'tc-button--link': !!href,
    });

    if (href) {
        return (
            <Link
                className={classNames}
                href={href}
                target={target}
                onClick={disabled ? (e) => e.preventDefault() : onClick}
                aria-disabled={disabled}
            >
                {icon && iconPosition === 'left' && <span className="tc-button__icon">{icon}</span>}
                {label && <span className="tc-button__label">{label}</span>}
                {icon && iconPosition === 'right' && <span className="tc-button__icon">{icon}</span>}
            </Link>
        );
    }

    return (
        <button className={classNames} disabled={disabled} type={type} onClick={onClick}>
            {icon && iconPosition === 'left' && <span className="tc-button__icon">{icon}</span>}
            {label && <span className="tc-button__label">{label}</span>}
            {icon && iconPosition === 'right' && <span className="tc-button__icon">{icon}</span>}
        </button>
    );
};
