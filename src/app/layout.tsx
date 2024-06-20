'use client';

import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { Manrope } from 'next/font/google';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

import 'dayjs/locale/ru';
import dayjs from 'dayjs';

import store from '@/redux/store';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAuthUser } from '@/hooks/useAuthUser';
import { checkAvailabilityCartItems } from '@/redux/actions/cart';
import { fetchFavorites } from '@/redux/actions/favorites';
import { fetchFirstProductsCatalog } from '@/redux/actions/products';
import { fetchProductsFilters } from '@/redux/actions/products_filters';
import { fetchSelections } from '@/redux/actions/selections';
import { fetchUser } from '@/redux/actions/user';
import NoSsr from '@/components/NoSsr/NoSsr';
import { Footer, Header, Reglog } from '@/components';
import { useAppUtm } from '@/hooks/useAppUtm';
import { useReplaceLS } from '@/hooks/useReplaceLS';

import 'react-dots-loader/index.css';
import '@/assets/sass/style.sass';

dayjs.locale('ru');

// TODO Sentry init

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        cp: any;
        dataLayer: any;
        YaPay: any;
        mindbox: any;
        ym: any;
    }
}

const manropeFont = Manrope({
    weight: ['400', '500', '600'],
    style: 'normal',
    subsets: ['cyrillic', 'latin'],
    variable: '--font-manrope',
    display: 'swap',
});

const App = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch();
    const pathname = usePathname();

    const isLoadedFilters = useTypedSelector(({ products_filters }) => products_filters.isLoaded);
    const isLoadedProducts = useTypedSelector(({ products }) => products.isLoaded);
    const isLoadedSelections = useTypedSelector(({ selections }) => selections.isLoaded);
    const cartItems = useTypedSelector(({ cart }) => cart.items);

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

        if (!isLoadedProducts) {
            dispatch(fetchFirstProductsCatalog() as any);
        }

        if (!isLoadedSelections) {
            dispatch(fetchSelections() as any);
        }

        dispatch(checkAvailabilityCartItems(cartItems) as any);
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

    useAppUtm();
    useReplaceLS();

    return (
        <div className="wrapper" id="wrapper">
            <NoSsr>
                <Header />
                <Reglog />
                {/* TODO
                    <NotificationsServer />
                    <WaitingListCreate />
                    <WaitingListDelete />
                */}
            </NoSsr>

            {children}

            <NoSsr>
                <Footer />
            </NoSsr>
        </div>
    );
};

// TODO add metrics and external scripts

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ru" className={manropeFont.variable}>
            <body>
                <Provider store={store}>
                    <React.Suspense>
                        <App>{children}</App>
                    </React.Suspense>
                </Provider>

                <Script
                    src="https://pay.yandex.ru/sdk/v1/pay.js"
                    strategy="lazyOnload"
                    onLoad={() => console.log('Yandex pay loaded')}
                />
            </body>
        </html>
    );
};

export default RootLayout;
