import React from 'react';
import { Metadata } from 'next/types';

import NoSsr from '@/components/NoSsr/NoSsr';
import { SellCreate } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const SellCreatePage = () => (
    <NoSsr>
        <SellCreate />
    </NoSsr>
);

export default SellCreatePage;
