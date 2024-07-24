import React from 'react';
import { Metadata } from 'next/types';

import { Auth } from '@/screens';
import { APP_AUTH_TITLE, APP_AUTH_DESCRIPTION } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_AUTH_TITLE,
    description: APP_AUTH_DESCRIPTION,
};

const AuthPage = () => <Auth />;

export default AuthPage;
