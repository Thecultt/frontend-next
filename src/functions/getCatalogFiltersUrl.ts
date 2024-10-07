import qs from 'qs';

import { APP_ROUTE } from '@/constants/routes';
import { ICatalogFilters } from '@/types/catalog';

export const getCatalogFiltersUrl = (allFilters: ICatalogFilters) => {
    const { category_slug, subcategories_slug, brand_slug, price, selection, ...restFilters } = allFilters;

    const filters = {
        minPrice: price?.min,
        maxPrice: price?.max,
        ...restFilters,
    };

    const url = qs.stringify(filters, {
        arrayFormat: 'comma',
        skipNulls: true,
        addQueryPrefix: true,
    });

    let catalogUrl: string = APP_ROUTE.catalog;

    if (category_slug) {
        catalogUrl = `${catalogUrl}/${category_slug}`;

        if (subcategories_slug) {
            catalogUrl = `${catalogUrl}/${subcategories_slug}`;
        }

        if (brand_slug) {
            catalogUrl = `${catalogUrl}/${brand_slug}`;
        }
    } else if (selection) {
        catalogUrl = `${APP_ROUTE.selections}/${selection}`;
    } else if (brand_slug) {
        catalogUrl = `${APP_ROUTE.brands}/${brand_slug}`;
    }

    return `${catalogUrl}${url}`;
};
