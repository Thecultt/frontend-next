import React from 'react';

import { ICatalogPageProps } from '@/types/catalog';
import { Catalog } from '@/screens';
import { fetchCatalogServerSide } from '@/functions/fetchCatalogServerSide';

export const revalidate = 3600;

const CatalogPage = async (props: ICatalogPageProps) => {
    const data = await fetchCatalogServerSide(props);

    // TODO remove logs
    console.log('props', props);
    console.log('data', { ...data, items: data.items.map((i) => i.name) });

    return <Catalog serverCatalogData={data} />;
};

export default CatalogPage;
