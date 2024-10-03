'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { APP_ROUTE } from '@/constants/routes';
import { useAuthUser } from '@/hooks/useAuthUser';
import { ReglogStateTypesNotLogin } from '@/types/reglog';
import { PageLoader } from '@/shared/ui';

interface Props extends React.PropsWithChildren {
    withRedirect?: boolean;
}

export const PrivateLayout: React.FC<Props> = ({ withRedirect = false, children }) => {
    const router = useRouter();
    const pathname = usePathname();
    const { isLoggedIn } = useAuthUser();

    React.useEffect(() => {
        if (!isLoggedIn) {
            const route = withRedirect
                ? `${APP_ROUTE.home}?redirect=${pathname}#${ReglogStateTypesNotLogin.REGLOG}`
                : APP_ROUTE.home;
            router.replace(route);
        }
    }, [router, isLoggedIn]);

    return !isLoggedIn ? <PageLoader /> : <>{children}</>;
};
