import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchBrands } from '@/redux/actions/brands';
import { CATEGORY_SLUG_NAMES, SORT } from '@/constants/catalog';
import { getBrandNameBySlug } from '@/functions/getBrandNameBySlug';

import { useCatalogFilters } from './useCatalogFilters';
import { useTypedSelector } from '../useTypedSelector';

export const useCatalogFiltersTitle = () => {
    const dispatch = useDispatch();

    const { filters } = useCatalogFilters();
    const { categories: fetchedCategories, selections } = useTypedSelector(({ products_filters }) => products_filters);
    const { allBrands, isLoaded } = useTypedSelector(({ brands }) => brands);

    React.useEffect(() => {
        if (!isLoaded) {
            dispatch(fetchBrands() as any);
        }
    }, [isLoaded]);

    return React.useMemo(() => {
        if (filters.boutique) {
            return 'Из бутика';
        }

        if (filters.price_drop) {
            return 'THE CULTT SALE';
        }

        if (filters.selection) {
            return selections[filters.selection]?.category;
        }

        if (filters.search) {
            return filters.search;
        }

        if (filters.category_slug) {
            return CATEGORY_SLUG_NAMES[filters.category_slug];
        }

        if (filters.brand_slug) {
            const foundBrand = getBrandNameBySlug(allBrands, filters.brand_slug);

            if (foundBrand) {
                return foundBrand.word;
            }
        }

        if (filters.brands.length > 0) {
            return filters.brands.join(', ');
        }

        if (filters.categories.length > 0 && filters.categories.length !== Object.keys(fetchedCategories).length) {
            return filters.categories.join(', ');
        }

        if (filters.sort === SORT.popular) {
            return 'Популярное';
        }

        if (filters.sort === SORT.a) {
            return 'Новинки';
        }

        return 'Каталог';
    }, [fetchedCategories, filters, selections, allBrands]);
};
