import React from 'react';
import { compose } from 'redux';
import { Viewport } from 'next/types';
import NextTopLoader from 'nextjs-toploader';

import 'dayjs/locale/ru';
import dayjs from 'dayjs';

import { App } from '@/components/App/App';
import { Scripts } from '@/components/App/Scripts';
import { Providers } from '@/providers/Providers';
import { MAIN_META } from '@/constants/meta';
import { ltSuperiorMonoFont, manropeFont } from '@/constants/fonts';

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

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

// Default meta data
export const metadata = MAIN_META;

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="ru" className={`${manropeFont.variable} ${ltSuperiorMonoFont.variable}`}>
        <body>
            <NextTopLoader zIndex={99999999} showSpinner={false} shadow={false} color="#285141" />

            <Providers>
                <App>{children}</App>
            </Providers>

            <Scripts />
        </body>
    </html>
);

export default RootLayout;
