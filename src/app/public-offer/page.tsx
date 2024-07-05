import React from 'react';
import { Metadata } from 'next/types';

import { FaqPublicOfferte } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const PublicOfferPage = () => <FaqPublicOfferte />;

export default PublicOfferPage;
