'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { usePathname, useSearchParams } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useCatalogScroll } from '@/hooks/catalog/useCatalogScroll';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';
import { fetchProductsCatalog, setLastSearchString } from '@/redux/actions/products';
import { CatalogBanner, CatalogFiltersTop, CatalogFilters, CatalogProducts } from '@/components';

const ClientCatalog: React.FC = () => {
    const dispatch = useDispatch();

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const search = searchParams.toString();
    const url = `${pathname}?${search}`;

    const { typeFetch, lastSearchString, catalogScroll } = useTypedSelector(({ products }) => products);

    const [isFirstRender, setIsFirstRender] = React.useState(true);
    const [isOpenFiltersMedia, setIsOpenFiltersMedia] = React.useState(false);

    const { filters } = useCatalogFilters();

    React.useEffect(() => {
        if (isFirstRender && lastSearchString === url) {
            setTimeout(() => {
                window.scrollTo(0, catalogScroll);
            }, 100);
        } else {
            dispatch(fetchProductsCatalog(filters, typeFetch) as any);
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

                        <CatalogProducts />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientCatalog;
