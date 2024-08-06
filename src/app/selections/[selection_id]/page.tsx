import React from 'react';
import { Metadata } from 'next/types';

import NoSsr from '@/components/NoSsr/NoSsr';
import { Catalog } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const SelectionPage = () => (
    <NoSsr>
        <Catalog />
    </NoSsr>
);

export default SelectionPage;
