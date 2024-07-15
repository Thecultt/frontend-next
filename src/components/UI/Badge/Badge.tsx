import { getClassNames } from '@/functions/getClassNames';
import React from 'react';

interface Props extends React.PropsWithChildren {
    className?: string;
    isGreen?: boolean;
}

export const Badge: React.FC<Props> = ({ children, className = '', isGreen = false }) => (
    <span
        className={getClassNames(`badge ${className}`, {
            'badge--green': isGreen,
        })}
    >
        {children}
    </span>
);
