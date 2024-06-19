import React from 'react';
import { Metadata } from 'next/types';

import NoSsr from '@/components/NoSsr/NoSsr';

export const metadata: Metadata = {
    title: 'Ресейл-платформа культовых сумок | THECULTT',
};

const CatalogPage = () => {
    return <NoSsr>Catalog</NoSsr>;
};

export default CatalogPage;
