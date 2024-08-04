'use client';

import { generateUUIDMindbox } from '@/functions/mindbox';
import { useAppUtm } from '@/hooks/useAppUtm';

export const ClientOnly = () => {
    useAppUtm();

    generateUUIDMindbox();

    return null;
};
