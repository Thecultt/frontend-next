'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'usehooks-ts';
import { usePathname, useSearchParams } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchProductsCatalog, setLastSearchString } from '@/redux/actions/products';
import { CatalogBanner, CatalogBannerMedia, CatalogFiltersTop, CatalogFilters, CatalogProducts } from '@/components';
import { MEDIA_SIZES } from '@/constants/styles';
import { useCatalogScroll } from '@/hooks/catalog/useCatalogScroll';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';

const Catalog: React.FC = () => {
    const dispatch = useDispatch();

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const search = searchParams.toString();
    const url = `${pathname}?${search}`;

    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

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
                    {!isMobile ? <CatalogBanner /> : <CatalogBannerMedia />}

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

export default Catalog;
