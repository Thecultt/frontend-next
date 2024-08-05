'use client';

import React from 'react';

import { generateUUIDMindbox } from '@/functions/mindbox';
import { useAppUtm } from '@/hooks/useAppUtm';

export const ClientOnly = () => {
    useAppUtm();

    React.useEffect(() => {
        generateUUIDMindbox();
    }, []);

    return null;
};
