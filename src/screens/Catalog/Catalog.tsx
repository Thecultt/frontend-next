import React from 'react';

import { GetCatalogResponse } from '@/types/api';

import ClientCatalog from './ClientCatalog';

interface Props {
    serverCatalogData: GetCatalogResponse;
}

const Catalog: React.FC<Props> = ({ serverCatalogData }) => {
    return <ClientCatalog serverItems={serverCatalogData.items} />;
};

export default Catalog;
