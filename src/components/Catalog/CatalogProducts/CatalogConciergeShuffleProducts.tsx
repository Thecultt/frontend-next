'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import {
    CatalogProductsPagination,
    CatalogProductsNull,
    ProductCard,
    CatalogProductsConciergeBlock,
} from '@/components';
import { Skeleton } from '@/shared/ui';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { createFakeArray } from '@/functions/createFakeArray';
import { shuffleArray } from '@/functions/shuffleArray';
import { CATALOG_PRODUCTS_LIMIT } from '@/constants/catalog';
import { Product } from '@/models/IProduct';
import { ConciergeProduct } from '@/models/IConcierge';
import { fetchConciergeCategories } from '@/redux/actions/concierge';

import { CatalogConciergeProductCard } from './CatalogConciergeProductCard/CatalogConciergeProductCard';

const isProduct = (item: Product | ConciergeProduct): item is Product => 'article' in item;

export const CatalogConciergeShuffleProducts = () => {
    const dispatch = useDispatch();

    const { itemsCount, itemsWithNulls, isFetchMore, isFetchPage } = useTypedSelector(({ products }) => products);
    const { categories, isLoadedCategories } = useTypedSelector(({ concierge }) => concierge);

    const isFetch = isFetchMore || isFetchPage || !isLoadedCategories;

    const conciergeProducts = React.useMemo(() => {
        const categoriesKeys = Object.keys(categories);

        if (!isLoadedCategories || !categoriesKeys.length) {
            return [];
        }

        return shuffleArray(
            categoriesKeys.reduce((state, key) => [...state, ...categories[key].products], [] as ConciergeProduct[]),
        );
    }, [categories, isLoadedCategories, isFetchPage]);

    const products = React.useMemo(() => {
        let index = 0;

        return itemsWithNulls
            .map((item) => {
                if (!item) {
                    const conciergeProduct = conciergeProducts[index];
                    index += 1;
                    return conciergeProduct ?? null;
                }

                return item;
            })
            .filter(Boolean) as Array<Product | ConciergeProduct>;
    }, [itemsWithNulls, conciergeProducts]);

    React.useEffect(() => {
        if (!isLoadedCategories) {
            dispatch(fetchConciergeCategories() as any);
        }
    }, [isLoadedCategories]);

    return (
        <div className="catalog-product-wrapper">
            {!isFetch && !products.length ? (
                <CatalogProductsNull />
            ) : (
                <>
                    <div className="catalog-product-blocks-wrapper">
                        {!isFetchPage && (
                            <>
                                {products.map((item) =>
                                    isProduct(item) ? (
                                        <ProductCard key={item.id} productData={item} />
                                    ) : (
                                        <CatalogConciergeProductCard key={item.id} data={item} />
                                    ),
                                )}

                                <CatalogProductsConciergeBlock />
                            </>
                        )}

                        {isFetch &&
                            createFakeArray(CATALOG_PRODUCTS_LIMIT).map((_, index) => (
                                <Skeleton key={index} className="product-card-skeleton" />
                            ))}
                    </div>

                    {itemsCount > CATALOG_PRODUCTS_LIMIT && <CatalogProductsPagination />}
                </>
            )}
        </div>
    );
};
