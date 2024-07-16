import React from 'react';
import { Metadata } from 'next/types';

import { Exchange } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const ExchangePage = () => <Exchange />;

export default ExchangePage;
