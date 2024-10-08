import React from 'react';

import { ProductPage } from '@/models/IProduct';
import { NoSsr } from '@/shared/ui';

import { ClientProduct } from './ClientProduct';
import { ServerProduct } from './ServerProduct';

interface Props {
    serverProductData: ProductPage;
}

const Product: React.FC<Props> = ({ serverProductData }) => (
    <NoSsr fallback={<ServerProduct data={serverProductData} />}>
        <ClientProduct serverProductData={serverProductData} />
    </NoSsr>
);

export default Product;
