import React from 'react';
import { Metadata } from 'next/types';

import { FaqReturn } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const FaqReturnPage = () => <FaqReturn />;

export default FaqReturnPage;
