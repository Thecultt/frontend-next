'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import { Manrope } from 'next/font/google';
import Script from 'next/script';

import 'dayjs/locale/ru';
import dayjs from 'dayjs';

import { App } from '@/components/App/App';
import store from '@/redux/store';

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

// TODO add metrics and external scripts

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="ru" className={manropeFont.variable}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </head>
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

export default RootLayout;
