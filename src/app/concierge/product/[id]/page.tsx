import React from 'react';
import { Metadata } from 'next/types';

import { ConciergeProduct } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const ConciergeProductPage = () => <ConciergeProduct />;

export default ConciergeProductPage;
