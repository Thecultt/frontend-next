import React from 'react';
import { Metadata } from 'next/types';

import { APP_TITLE } from '@/constants/app';
import { CinemaArtisticProduct } from '@/screens';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const CinemaArtisticProductPage = () => <CinemaArtisticProduct />;

export default CinemaArtisticProductPage;
