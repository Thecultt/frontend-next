'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams, usePathname, useSearchParams } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useCatalogScroll } from '@/hooks/catalog/useCatalogScroll';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';
import { fetchProductsCatalog, setLastSearchString } from '@/redux/actions/products';
import { CatalogFetchType } from '@/redux/types/IProducts';
import {
    CatalogBanner,
    CatalogFiltersTop,
    CatalogFilters,
    CatalogProducts,
    CatalogConciergeShuffleProducts,
} from '@/components';
import { CatalogPageParams } from '@/types/catalog';
import { CATEGORY_SLUGS } from '@/constants/catalog';

export const ClientCatalog: React.FC = () => {
    const dispatch = useDispatch();

    const { category_slug } = useParams<CatalogPageParams>();

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const search = searchParams.toString();
    const url = `${pathname}?${search}`;

    const { typeFetch, lastSearchString, catalogScroll } = useTypedSelector(({ products }) => products);

    const [isFirstRender, setIsFirstRender] = React.useState(true);
    const [isOpenFiltersMedia, setIsOpenFiltersMedia] = React.useState(false);

    const { filters } = useCatalogFilters();

    const isConciergeCatalog =
        !!category_slug &&
        [CATEGORY_SLUGS.new, CATEGORY_SLUGS.popular].includes(category_slug) &&
        !filters.categories.length &&
        !filters.types.length &&
        !filters.brands.length &&
        !filters.models.length;

    React.useEffect(() => {
        if (isFirstRender && lastSearchString === url) {
            setTimeout(() => {
                window.scrollTo(0, catalogScroll);
            }, 100);
        } else {
            let pageSize = typeFetch === CatalogFetchType.Page ? 19 : 20;
            if (isConciergeCatalog) {
                pageSize = typeFetch === CatalogFetchType.Page ? 16 : 17;
            }

            dispatch(fetchProductsCatalog({ ...filters, page_size: pageSize }, typeFetch) as any);
        }

        setIsFirstRender(false);
    }, [filters]);

    React.useEffect(() => {
        dispatch(setLastSearchString(url));
    }, [url]);

    useCatalogScroll();

    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog-wrapper">
                    <CatalogBanner />

                    <CatalogFiltersTop
                        setIsOpenFiltersMedia={setIsOpenFiltersMedia}
                        isOpenFiltersMedia={isOpenFiltersMedia}
                    />

                    <div className="catalog-blocks-and-filters-wrapper">
                        <CatalogFilters
                            setIsOpenFiltersMedia={setIsOpenFiltersMedia}
                            isOpenFiltersMedia={isOpenFiltersMedia}
                        />

                        {isConciergeCatalog ? <CatalogConciergeShuffleProducts /> : <CatalogProducts />}
                    </div>
                </div>
            </div>
        </section>
    );
};
