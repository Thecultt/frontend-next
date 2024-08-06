import React from 'react';
import { useParams } from 'next/navigation';
import {
    parseAsArrayOf,
    parseAsBoolean,
    parseAsInteger,
    parseAsStringLiteral,
    parseAsString,
    parseAsFloat,
    useQueryStates,
} from 'nuqs';
import isEqual from 'lodash.isequal';

import { CatalogPageParams, ICatalogFilters } from '@/types/catalog';
import { AVAILABILITY, CATEGORY_SLUGS, CONDITIONS, FILTER_CATEGORY_SLUGS, GENDERS, SORT } from '@/constants/catalog';
import { getDefaultPageSort } from '@/functions/getDefaultPageSort';

// TODO SEO catalog meta

export const useCatalogFilters = () => {
    const { category_slug, subcategories_slug, selection_id } = useParams<CatalogPageParams>();

    const [state, setQueryState] = useQueryStates(
        {
            categories: parseAsArrayOf(parseAsString).withDefault([]),
            types: parseAsArrayOf(parseAsString).withDefault([]),
            brands: parseAsArrayOf(parseAsString).withDefault([]),
            models: parseAsArrayOf(parseAsString).withDefault([]),
            sort: parseAsStringLiteral(Object.values(SORT)).withDefault(
                getDefaultPageSort(category_slug, selection_id),
            ),
            page: parseAsInteger.withDefault(1),
            search: parseAsString.withDefault(''),
            minPrice: parseAsInteger.withDefault(0),
            maxPrice: parseAsInteger.withDefault(0),
            boutique: parseAsBoolean.withDefault(false),
            colors: parseAsArrayOf(parseAsString).withDefault([]),
            genders: parseAsArrayOf(parseAsStringLiteral(Object.values(GENDERS))).withDefault([]),
            conditions: parseAsArrayOf(parseAsStringLiteral(Object.values(CONDITIONS))).withDefault([]),
            availability: parseAsArrayOf(parseAsStringLiteral(Object.values(AVAILABILITY))).withDefault(
                category_slug === CATEGORY_SLUGS.sale ? [AVAILABILITY.available, AVAILABILITY.fitting] : [],
            ),
            price_drop: parseAsBoolean.withDefault(category_slug === CATEGORY_SLUGS.sale),
            glass_frame: parseAsArrayOf(parseAsString).withDefault([]),
            size: parseAsArrayOf(parseAsFloat).withDefault([]),
        },
        { clearOnDefault: true, scroll: false, history: 'replace' },
    );

    const tempFilters = React.useMemo(
        () =>
            ({
                category_slug:
                    !!category_slug && FILTER_CATEGORY_SLUGS.includes(category_slug) ? category_slug : undefined,
                subcategories_slug,
                categories: state.categories,
                types: state.types,
                brands: state.brands,
                models: state.models,
                search: state.search,
                price: {
                    min: state.minPrice,
                    max: state.maxPrice,
                },
                page: state.page,
                sort: state.sort,
                boutique: state.boutique,
                colors: state.colors,
                genders: state.genders,
                conditions: state.conditions,
                availability: state.availability,
                price_drop: state.price_drop,
                glass_frame: state.glass_frame,
                size: state.size,
                selection: selection_id,
            }) satisfies ICatalogFilters,
        [category_slug, subcategories_slug, state],
    );

    const [filters, setFilters] = React.useState(tempFilters);

    const updateFilters = React.useCallback((newFilters: Parameters<typeof setQueryState>[0]) => {
        setQueryState((state) => ({
            ...state,
            page: null,
            ...newFilters,
        }));
    }, []);

    const clearFilters = React.useCallback(() => {
        setQueryState({
            categories: null,
            types: null,
            brands: null,
            models: null,
            sort: null,
            page: null,
            search: null,
            minPrice: null,
            maxPrice: null,
            boutique: null,
            colors: null,
            genders: null,
            conditions: null,
            availability: null,
            price_drop: null,
            glass_frame: null,
            size: null,
        });
    }, []);

    React.useEffect(() => {
        if (!isEqual(tempFilters, filters)) {
            setFilters(tempFilters);
        }
    }, [tempFilters]);

    return {
        filters,
        updateFilters,
        clearFilters,
    };
};
