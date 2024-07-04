'use client';

import { useAppUtm } from '@/hooks/useAppUtm';

export const ClientOnly = () => {
    useAppUtm();

    return null;
};
