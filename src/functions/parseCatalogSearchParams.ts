import {
    parseAsArrayOf,
    parseAsBoolean,
    parseAsFloat,
    parseAsInteger,
    parseAsString,
    parseAsStringLiteral,
} from 'nuqs';

import { ICatalogFilters, ICatalogPageProps } from '@/types/catalog';
import { AVAILABILITY, CATEGORY_SLUGS, CONDITIONS, FILTER_CATEGORY_SLUGS, GENDERS, SORT } from '@/constants/catalog';

import { getDefaultPageSort } from './getDefaultPageSort';

export const parseCatalogSearchParams = ({ params, searchParams }: ICatalogPageProps): ICatalogFilters =>
    ({
        category_slug:
            !!params.category_slug && FILTER_CATEGORY_SLUGS.includes(params.category_slug)
                ? params.category_slug
                : undefined,
        subcategories_slug: params.subcategories_slug,
        brand_slug: params.brand_slug,
        selection: params.selection_id,
        categories: parseAsArrayOf(parseAsString).withDefault([]).parseServerSide(searchParams.categories),
        types: parseAsArrayOf(parseAsString).withDefault([]).parseServerSide(searchParams.types),
        brands: parseAsArrayOf(parseAsString).withDefault([]).parseServerSide(searchParams.brands),
        models: parseAsArrayOf(parseAsString).withDefault([]).parseServerSide(searchParams.models),
        colors: parseAsArrayOf(parseAsString).withDefault([]).parseServerSide(searchParams.colors),
        glass_frame: parseAsArrayOf(parseAsString).withDefault([]).parseServerSide(searchParams.glass_frame),
        genders: parseAsArrayOf(parseAsStringLiteral(Object.values(GENDERS)))
            .withDefault([])
            .parseServerSide(searchParams.genders),
        conditions: parseAsArrayOf(parseAsStringLiteral(Object.values(CONDITIONS)))
            .withDefault([])
            .parseServerSide(searchParams.conditions),
        size: parseAsArrayOf(parseAsFloat).withDefault([]).parseServerSide(searchParams.size),
        availability: parseAsArrayOf(parseAsStringLiteral(Object.values(AVAILABILITY)))
            .withDefault(
                params.category_slug === CATEGORY_SLUGS.sale || params.selection_id
                    ? [AVAILABILITY.available, AVAILABILITY.fitting]
                    : [],
            )
            .parseServerSide(searchParams.availability),
        sort: parseAsStringLiteral(Object.values(SORT))
            .withDefault(getDefaultPageSort({ categorySlug: params.category_slug }))
            .parseServerSide(searchParams.sort),
        page: parseAsInteger.withDefault(1).parseServerSide(searchParams.page),
        search: parseAsString.withDefault('').parseServerSide(searchParams.search),
        price: {
            min: parseAsInteger.withDefault(0).parseServerSide(searchParams.minPrice),
            max: parseAsInteger.withDefault(0).parseServerSide(searchParams.maxPrice),
        },
        price_drop: parseAsBoolean
            .withDefault(params.category_slug === CATEGORY_SLUGS.sale)
            .parseServerSide(searchParams.price_drop),
        boutique: parseAsBoolean.withDefault(false).parseServerSide(searchParams.boutique),
    }) satisfies ICatalogFilters;
