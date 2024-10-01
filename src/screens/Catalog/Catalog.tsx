import React from 'react';

import { GetCatalogResponse } from '@/types/api';
import NoSsr from '@/components/NoSsr/NoSsr';

import ClientCatalog from './ClientCatalog';
import ServerCatalog from './ServerCatalog';

interface Props {
    serverCatalogData?: GetCatalogResponse;
    mainTitle?: string;
}

const Catalog: React.FC<Props> = ({ serverCatalogData, mainTitle }) => (
    <NoSsr fallback={<ServerCatalog serverCatalogData={serverCatalogData} mainTitle={mainTitle} />}>
        <ClientCatalog />
    </NoSsr>
);

export default Catalog;
