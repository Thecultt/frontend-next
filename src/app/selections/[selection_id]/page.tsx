import React from 'react';

import { Catalog } from '@/screens';
import { ICatalogPageProps } from '@/types/catalog';
import { fetchCatalogServerSide } from '@/functions/fetchCatalogServerSide';

const SelectionPage = async (props: ICatalogPageProps) => {
    const data = await fetchCatalogServerSide(props);

    // TODO remove logs
    console.log('props', props);
    console.log('data', { ...data, items: data.items.map((i) => i.name) });

    return <Catalog serverCatalogData={data} />;
};

export default SelectionPage;
