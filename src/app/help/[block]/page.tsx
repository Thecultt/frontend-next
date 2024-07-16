import React from 'react';
import { Metadata } from 'next/types';

import { Faq } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const FaqBlockPage = () => <Faq />;

export default FaqBlockPage;
