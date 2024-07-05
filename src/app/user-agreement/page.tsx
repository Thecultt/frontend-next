import React from 'react';
import { Metadata } from 'next/types';

import { FaqUserAgreement } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const UserAgreementPage = () => <FaqUserAgreement />;

export default UserAgreementPage;
