'use client';

import React from 'react';
import { useIsClient } from 'usehooks-ts';

import { FullscreenLoader } from '@/shared/ui';

export const Preloader = () => {
    const isClient = useIsClient();

    if (isClient) {
        return null;
    }

    return <FullscreenLoader />;
};
