import React from 'react';
import { Metadata } from 'next/types';

import { CinemaArtistic } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const CinemaArtisticPage = () => <CinemaArtistic />;

export default CinemaArtisticPage;
