import type { Metadata } from 'next/types';

import { Home } from '@/screens';
import NoSsr from '@/components/NoSsr/NoSsr';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const HomePage = () => (
    <NoSsr>
        <Home />
    </NoSsr>
);

export default HomePage;
