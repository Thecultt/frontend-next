import type { Metadata } from 'next/types';

import { Home } from '@/screens';
import NoSsr from '@/components/NoSsr/NoSsr';

export const metadata: Metadata = {
    title: 'Ресейл-платформа культовых сумок | THECULTT',
};

const HomePage = () => (
    <NoSsr>
        <Home />
    </NoSsr>
);

export default HomePage;
