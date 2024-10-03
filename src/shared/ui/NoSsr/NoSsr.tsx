'use client';

import React from 'react';
import { useIsClient } from 'usehooks-ts';

interface Props extends React.PropsWithChildren {
    fallback?: React.ReactNode;
}

export const NoSsr: React.FC<Props> = ({ children, fallback = null }) => {
    const isClient = useIsClient();

    return <>{isClient ? children : fallback}</>;
};
