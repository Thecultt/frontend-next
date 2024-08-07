'use client';

import React from 'react';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useIsClient } from 'usehooks-ts';

import { getPath } from '@/functions/getPath';

const getHash = () =>
    typeof window !== 'undefined' ? decodeURIComponent(window.location.hash.replace('#', '')) : null;

export const useHash = () => {
    const [hash, setHash] = React.useState(getHash());

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const search = searchParams.toString();

    const params = useParams();
    const isClient = useIsClient();

    const changeHash = (newHash: string) => {
        router.replace(getPath({ pathname, search, hash: newHash }), { scroll: false });
    };

    const removeHash = () => {
        router.replace(getPath({ pathname, search }), { scroll: false });
    };

    React.useEffect(() => {
        setHash(getHash());
    }, [params]);

    return { hash: isClient ? hash || null : null, changeHash, removeHash };
};
