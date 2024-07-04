import React from 'react';
import { Metadata } from 'next/types';

import { VipService } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const VipServicePage = () => <VipService />;

export default VipServicePage;
