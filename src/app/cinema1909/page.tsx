import React from 'react';
import { Metadata } from 'next/types';

import { CinemaArtistic } from '@/screens';
import { APP_TITLE } from '@/constants/app';
import NoSsr from '@/components/NoSsr/NoSsr';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const CinemaArtisticPage = () => (
    <NoSsr>
        <CinemaArtistic />
    </NoSsr>
);

export default CinemaArtisticPage;
