import React from 'react';
import { Metadata } from 'next/types';

import { PublicFavorites } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const PublicFavoritesPage = () => <PublicFavorites />;

export default PublicFavoritesPage;
