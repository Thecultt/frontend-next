'use client';

import React from 'react';

import {
    CatalogProductsPagination,
    CatalogProductsNull,
    ProductCard,
    CatalogProductsConciergeBlock,
} from '@/components';
import { Skeleton } from '@/shared/ui';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { createFakeArray } from '@/functions/createFakeArray';
import { CATALOG_PRODUCTS_LIMIT } from '@/constants/catalog';

const CatalogProducts = () => {
    const { items, itemsCount, isFetchMore, isFetchPage } = useTypedSelector(({ products }) => products);
    const isFetch = isFetchMore || isFetchPage;

    return (
        <div className="catalog-product-wrapper">
            {!isFetch && !items.length ? (
                <CatalogProductsNull />
            ) : (
                <>
                    <div className="catalog-product-blocks-wrapper">
                        {!isFetchPage && items.map((item, index) => <ProductCard key={index} productData={item} />)}

                        {isFetch &&
                            createFakeArray(CATALOG_PRODUCTS_LIMIT).map((_, index) => (
                                <Skeleton key={index} className="product-card-skeleton" />
                            ))}

                        <CatalogProductsConciergeBlock />
                    </div>

                    {itemsCount > CATALOG_PRODUCTS_LIMIT && <CatalogProductsPagination />}
                </>
            )}
        </div>
    );
};

export default CatalogProducts;
