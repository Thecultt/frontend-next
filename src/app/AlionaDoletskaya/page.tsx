import React from 'react';
import { Metadata } from 'next/types';

import { AlyonaDoletskaya } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const AlyonaDoletskayaPage = () => <AlyonaDoletskaya />;

export default AlyonaDoletskayaPage;
