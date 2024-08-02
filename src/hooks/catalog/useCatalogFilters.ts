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

import { CatalogPageParams, ICatalogFilters } from '@/types/catalog';
import { AVAILABILITY, CATEGORY_SLUGS, CONDITIONS, FILTER_CATEGORY_SLUGS, GENDERS, SORT } from '@/constants/catalog';
import { getDefaultPageSort } from '@/functions/getDefaultPageSort';

// TODO удалить фильтры в redux state

export const useCatalogFilters = () => {
    const { category_slug, subcategories_slug } = useParams<CatalogPageParams>();

    // TODO типы, модели, бренды
    const [state, setFilters] = useQueryStates(
        {
            categories: parseAsArrayOf(parseAsString).withDefault([]),
            sort: parseAsStringLiteral(Object.values(SORT)).withDefault(getDefaultPageSort(category_slug)),
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

    const filters = React.useMemo(
        () =>
            ({
                category_slug:
                    !!category_slug && FILTER_CATEGORY_SLUGS.includes(category_slug) ? category_slug : undefined,
                subcategories_slug,
                categories: state.categories,
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
            }) satisfies ICatalogFilters,
        [category_slug, subcategories_slug, state],
    );

    const updateFilters = (newFilters: Parameters<typeof setFilters>[0]) => {
        setFilters((state) => ({
            ...state,
            page: null,
            ...newFilters,
        }));
    };

    const clearFilters = () => {
        setFilters({
            categories: null,
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
    };

    return {
        filters,
        updateFilters,
        clearFilters,
    };
};
