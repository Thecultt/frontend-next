'use client';

import React from 'react';

import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { CatalogProductsSection } from '@/components';
import { CATEGORY_SLUGS } from '@/constants/catalog';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { fetchNewProducts } from '@/redux/slices/catalog/asyncActions';
import { selectCatalogNewProducts, selectCatalogNewProductsIsLoaded } from '@/redux/slices/catalog/selectors';

export const HomeNewProducts = () => {
    const dispatch = useAppDispatch();

    const newProducts = useAppSelector(selectCatalogNewProducts);
    const newProductsIsLoaded = useAppSelector(selectCatalogNewProductsIsLoaded);

    React.useEffect(() => {
        if (!newProductsIsLoaded) {
            dispatch(fetchNewProducts());
        }
    }, [newProductsIsLoaded]);

    return (
        <CatalogProductsSection
            title="Новинки"
            titleLink={getCatalogFiltersUrl({
                category_slug: CATEGORY_SLUGS.new,
            })}
            products={newProducts}
        />
    );
};
