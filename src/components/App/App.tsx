'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAuthUser } from '@/hooks/useAuthUser';
import { checkAvailabilityCartItems } from '@/redux/actions/cart';
import { fetchFavorites } from '@/redux/actions/favorites';
import { fetchFirstProductsCatalog } from '@/redux/actions/products';
import { fetchProductsFilters } from '@/redux/actions/products_filters';
import { fetchSelections } from '@/redux/actions/selections';
import { fetchUser } from '@/redux/actions/user';
import NoSsr from '@/components/NoSsr/NoSsr';
import {
    Footer,
    Header,
    NotificationsServer,
    PopupInfo,
    Reglog,
    WaitingListCreate,
    WaitingListDelete,
} from '@/components';
import { useReplaceLS } from '@/hooks/useReplaceLS';
import { CATALOG_PAGES } from '@/constants/routes';
import { useCart } from '@/hooks/catalog/useCart';

import { ClientOnly } from './ClientOnly';
import { Preloader } from './Preloader';

export const App = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
    const pathname = usePathname();

    const isLoadedFilters = useTypedSelector(({ products_filters }) => products_filters.isLoaded);
    const isLoadedProducts = useTypedSelector(({ products }) => products.isLoaded);
    const isLoadedSelections = useTypedSelector(({ selections }) => selections.isLoaded);

    const { allCart } = useCart();

    const { isLoggedIn, isLoaded: isLoadedUser, user } = useAuthUser();

    React.useEffect(() => {
        if (isLoggedIn) {
            dispatch(fetchFavorites() as any);
            dispatch(fetchUser() as any);
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
            dispatch(fetchSelections() as any);
        }

        dispatch(checkAvailabilityCartItems(allCart) as any);
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
                <Reglog />
                <NotificationsServer />
                <WaitingListCreate />
                <WaitingListDelete />

                <PopupInfo />
            </NoSsr>

            <div className="wrapper" id="wrapper">
                <NoSsr>
                    <Header />
                </NoSsr>

                {children}

                <Footer subscribeBlockId="footer-email" />
            </div>
        </>
    );
};
