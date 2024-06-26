'use client';

import React from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { getClassNames } from '@/functions/getClassNames';

interface Props extends React.PropsWithChildren, LinkProps {
    className?: string;
    activeClass?: string;
}

export const NavLink: React.FC<Props> = ({ children, className = '', activeClass = 'active', ...props }) => {
    const pathName = usePathname();
    const isActive = pathName === props.href;

    return (
        <Link
            className={getClassNames(className, {
                [activeClass]: isActive,
            })}
            {...props}
        >
            {children}
        </Link>
    );
};
