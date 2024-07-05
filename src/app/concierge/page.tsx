import React from 'react';
import { Metadata } from 'next/types';

import { ConciergeMain } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const ConciergeMainPage = () => <ConciergeMain />;

export default ConciergeMainPage;
