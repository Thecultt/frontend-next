import React from 'react';
import { compose } from 'redux';
import { Manrope } from 'next/font/google';
import localFont from 'next/font/local';
import { Metadata, Viewport } from 'next/types';

import 'dayjs/locale/ru';
import dayjs from 'dayjs';

import { App } from '@/components/App/App';
import { Scripts } from '@/components/App/Scripts';
import { Providers } from '@/providers/Providers';
import { APP_TITLE, APP_DESCRIPTION } from '@/constants/app';

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
    weight: ['400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['cyrillic', 'latin'],
    variable: '--font-manrope',
    display: 'swap',
});

const ltSuperiorMonoFont = localFont({
    src: '../assets/fonts/ltsuperiormono-bold.otf',
    style: 'normal',
    weight: '700',
    variable: '--font-ltsuperiormono',
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

// Default meta data
export const metadata: Metadata = {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
};

// TODO add metrics and external scripts

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="ru" className={`${manropeFont.variable} ${ltSuperiorMonoFont.variable}`}>
        <body>
            <Scripts />

            <Providers>
                <App>{children}</App>
            </Providers>
        </body>
    </html>
);

export default RootLayout;
