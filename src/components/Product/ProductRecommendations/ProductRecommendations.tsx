'use client';

import React from 'react';

import { CatalogProductsSection } from '@/components';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export const ProductRecommendations = () => {
    const { itemByArticleSimilar } = useTypedSelector(({ products }) => products);

    return (
        <div className="container">
            <CatalogProductsSection title="Может быть интересно" products={itemByArticleSimilar} />
        </div>
    );
};
