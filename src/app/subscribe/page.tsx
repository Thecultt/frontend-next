import React from 'react';
import { Metadata } from 'next/types';

import { SubscribeEmail } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const SubscribePage = () => <SubscribeEmail />;

export default SubscribePage;
