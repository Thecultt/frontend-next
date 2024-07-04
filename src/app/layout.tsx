import React from 'react';
import { compose } from 'redux';
import { Manrope } from 'next/font/google';
import Script from 'next/script';
import { Metadata, Viewport } from 'next/types';

import 'dayjs/locale/ru';
import dayjs from 'dayjs';

import { App } from '@/components/App/App';
import { Providers } from '@/providers/Providers';
import { APP_TITLE } from '@/constants/app';

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

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

// Default meta data
export const metadata: Metadata = {
    title: APP_TITLE,
};

// TODO add metrics and external scripts

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="ru" className={manropeFont.variable}>
        <body>
            <Providers>
                <App>{children}</App>
            </Providers>

            {/* TODO вынести в Scripts */}
            <Script
                src="https://pay.yandex.ru/sdk/v1/pay.js"
                strategy="lazyOnload"
                // onLoad={() => console.log('Yandex pay loaded')}
            />
        </body>
    </html>
);

export default RootLayout;
