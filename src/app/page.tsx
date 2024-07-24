import type { Metadata } from 'next/types';

import { Home } from '@/screens';
import NoSsr from '@/components/NoSsr/NoSsr';
import { APP_TITLE, APP_DESCRIPTION } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
};

const HomePage = () => (
    <NoSsr>
        <Home />
    </NoSsr>
);

export default HomePage;
