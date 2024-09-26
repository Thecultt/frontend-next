'use client';

import React from 'react';

import { CatalogProductsPagination, CatalogProductsNull, ProductCard, Skeleton, NoSsr } from '@/components';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { createFakeArray } from '@/functions/createFakeArray';
import { CATALOG_PRODUCTS_LIMIT } from '@/constants/catalog';
import { Product } from '@/models/IProduct';

interface Props {
    serverItems?: Product[];
}

const CatalogProducts: React.FC<Props> = ({ serverItems }) => {
    const { items, itemsCount, isFetchMore, isFetchPage } = useTypedSelector(({ products }) => products);
    const isFetch = isFetchMore || isFetchPage;

    const renderServerProducts = () => {
        if (!serverItems) {
            return null;
        }

        return (
            <div className="catalog-product-wrapper">
                {serverItems.length > 0 ? (
                    <div className="catalog-product-blocks-wrapper">
                        {serverItems.map((item) => (
                            <ProductCard key={item.id} productData={item} />
                        ))}
                    </div>
                ) : (
                    <CatalogProductsNull />
                )}
            </div>
        );
    };

    return (
        <NoSsr fallback={renderServerProducts()}>
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
                        </div>

                        {itemsCount > CATALOG_PRODUCTS_LIMIT && <CatalogProductsPagination />}
                    </>
                )}
            </div>
        </NoSsr>
    );
};

export default CatalogProducts;
