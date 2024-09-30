import React from 'react';

import { ICatalogPageProps } from '@/types/catalog';
import { Catalog } from '@/screens';
import { catalogAPI } from '@/services/api';
import { parseCatalogSearchParams } from '@/functions/parseCatalogSearchParams';

export const revalidate = 24 * 60 * 60;

const CatalogPage = async (props: ICatalogPageProps) => {
    const data = await catalogAPI.getCatalog(parseCatalogSearchParams(props));

    return <Catalog serverCatalogData={data} />;
};

export default CatalogPage;
