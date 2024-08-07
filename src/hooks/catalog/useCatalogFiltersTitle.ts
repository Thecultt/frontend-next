import React from 'react';

import { CATEGORY_SLUG_NAMES, SORT } from '@/constants/catalog';

import { useCatalogFilters } from './useCatalogFilters';
import { useTypedSelector } from '../useTypedSelector';

export const useCatalogFiltersTitle = () => {
    const { filters } = useCatalogFilters();
    const { categories: fetchedCategories, selections } = useTypedSelector(({ products_filters }) => products_filters);

    return React.useMemo(() => {
        if (filters.boutique) {
            return 'Из бутика';
        }

        if (filters.price_drop) {
            return 'THE CULTT SALE';
        }

        if (filters.selection) {
            return selections[filters.selection].category;
        }

        if (filters.search) {
            return filters.search;
        }

        if (filters.brands.length > 0) {
            return filters.brands.join(', ');
        }

        if (filters.category_slug) {
            return CATEGORY_SLUG_NAMES[filters.category_slug];
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
    }, [fetchedCategories, filters, selections]);
};
