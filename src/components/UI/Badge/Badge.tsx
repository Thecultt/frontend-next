import React from 'react';

import { getClassNames } from '@/functions/getClassNames';
import { Noop } from '@/types/functions';

interface Props extends React.PropsWithChildren {
    className?: string;
    isGreen?: boolean;
    onClick?: Noop;
}

export const Badge: React.FC<Props> = ({ children, className = '', isGreen = false, onClick }) => (
    <span
        className={getClassNames(`badge ${className}`, {
            'badge--green': isGreen,
            'badge--clickable': !!onClick,
        })}
        onClick={onClick}
    >
        {children}
    </span>
);
