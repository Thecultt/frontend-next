import React from 'react';
import { Metadata } from 'next/types';

import NoSsr from '@/components/NoSsr/NoSsr';
import { Catalog } from '@/screens';

export const metadata: Metadata = {
    title: 'Ресейл-платформа культовых сумок | THECULTT',
};

const CatalogPage = () => (
    <NoSsr>
        <Catalog />
    </NoSsr>
);

export default CatalogPage;
