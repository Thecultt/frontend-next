'use client';

import React from 'react';

import $api from '@/http';
import { CatalogProductsSection } from '@/components';
import { Product } from '@/models/IProduct';
import { APP_ROUTE } from '@/constants/routes';

const AlyonaDoletskayaProductSection: React.FC = () => {
    const [items, setItems] = React.useState<Product[]>([]);

    React.useEffect(() => {
        $api.get<{ items: Product[] }>(
            `/catalog/?category=Сумки&category=Аксессуары&category=Обувь&category=Одежда&availability=1&availability=-1&selections=1`,
        ).then(({ data }) => {
            setItems(data.items);
        });
    }, []);

    return (
        <div className="container">
            <CatalogProductsSection title="Архив Алёны Долецкой" titleLink={APP_ROUTE.catalog} products={items} />
        </div>
    );
};

export default AlyonaDoletskayaProductSection;
