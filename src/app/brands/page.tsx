import React from 'react';
import { Metadata } from 'next/types';

import { Brands } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const BrandsPage = () => <Brands />;

export default BrandsPage;
