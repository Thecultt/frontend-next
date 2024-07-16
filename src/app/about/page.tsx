import React from 'react';
import { Metadata } from 'next/types';

import { About } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const AuthPage = () => <About />;

export default AuthPage;
