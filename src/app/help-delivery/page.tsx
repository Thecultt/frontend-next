import React from 'react';
import { Metadata } from 'next/types';

import { FaqDelivery } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const FaqDeliveryPage = () => <FaqDelivery />;

export default FaqDeliveryPage;
