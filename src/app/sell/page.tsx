import React from 'react';
import { Metadata } from 'next/types';

import { SellInfo } from '@/screens';
import { APP_SELL_TITLE, APP_SELL_DESCRIPTION } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_SELL_TITLE,
    description: APP_SELL_DESCRIPTION,
};

const SellInfoPage = () => <SellInfo />;

export default SellInfoPage;
