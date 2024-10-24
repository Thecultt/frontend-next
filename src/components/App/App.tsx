'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAuthUser } from '@/hooks/useAuthUser';
import { fetchFavorites } from '@/redux/actions/favorites';
import { fetchFirstProductsCatalog } from '@/redux/actions/products';
import { fetchProductsFilters } from '@/redux/actions/products_filters';
import { NoSsr, Toaster } from '@/shared/ui';
import { StaticHeader } from '@/components/static/StaticHeader';
import { StaticFooter } from '@/components/static/StaticFooter';
import { Footer, Header, PopupInfo, Reglog, WaitingListCreate, WaitingListDelete } from '@/components';
import { useReplaceLS } from '@/hooks/useReplaceLS';
import { CATALOG_PAGES } from '@/constants/routes';
import { useCart } from '@/hooks/catalog/useCart';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { fetchSelections } from '@/redux/slices/selections/asyncActions';
import { fetchClientAttributes } from '@/redux/slices/user/asyncActions';
import { selectSelectionsIsLoaded } from '@/redux/slices/selections/selectors';

import { ClientOnly } from './ClientOnly';
import { Preloader } from './Preloader';

export const App = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();
    const pathname = usePathname();

    const isLoadedFilters = useTypedSelector(({ products_filters }) => products_filters.isLoaded);
    const isLoadedProducts = useTypedSelector(({ products }) => products.isLoaded);
    const isLoadedSelections = useAppSelector(selectSelectionsIsLoaded);

    const { checkAvailabilityCart } = useCart();

    const { isLoggedIn, isLoaded: isLoadedUser, user } = useAuthUser();

    React.useEffect(() => {
        if (isLoggedIn) {
            dispatch(fetchFavorites() as any);
            dispatch(fetchClientAttributes());
        }
    }, [isLoggedIn]);

    React.useEffect(() => {
        if (!isLoadedFilters) {
            dispatch(fetchProductsFilters() as any);
        }

        if (!isLoadedProducts && CATALOG_PAGES.every((page) => !pathname.startsWith(page))) {
            dispatch(fetchFirstProductsCatalog() as any);
        }

        if (!isLoadedSelections) {
            dispatch(fetchSelections());
        }

        checkAvailabilityCart();
    }, []);

    React.useEffect(() => {
        if (isLoadedUser) {
            window.dataLayer = window?.dataLayer || [];
            window?.dataLayer?.push({ user_id: `${user.user_id}` });
        }
    }, [isLoadedUser]);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useReplaceLS();

    return (
        <>
            <Preloader />

            <NoSsr>
                <ClientOnly />
                <Toaster />

                <PopupInfo />

                <Reglog />
                <WaitingListCreate />
                <WaitingListDelete />
            </NoSsr>

            <div className="wrapper" id="wrapper">
                <NoSsr fallback={<StaticHeader />}>
                    <Header />
                </NoSsr>

                {children}

                <NoSsr fallback={<StaticFooter />}>
                    <Footer subscribeBlockId="footer-email" />
                </NoSsr>
            </div>
        </>
    );
};
