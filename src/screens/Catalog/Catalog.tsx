'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'usehooks-ts';
import { useSearchParams } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchProductsCatalog, setLastSearchString } from '@/redux/actions/products';
import {
    CatalogBanner,
    CatalogBannerMedia,
    PageLoader,
    CatalogFiltersTop,
    CatalogFilters,
    CatalogProducts,
} from '@/components';
import { MEDIA_SIZES } from '@/constants/styles';
import { useCatalogScroll } from '@/hooks/catalog/useCatalogScroll';

const Catalog: React.FC = () => {
    const dispatch = useDispatch();

    const searchParams = useSearchParams();
    const search = searchParams.toString();

    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    const { filters, currentPage, typeFetch, lastSearchString } = useTypedSelector(({ products }) => products);
    const { isLoaded: isLoadedFilters } = useTypedSelector(({ products_filters }) => products_filters);

    const [isFirstRender, setIsFirstRender] = React.useState(true);
    const [isOpenFiltersMedia, setIsOpenFiltersMedia] = React.useState(false);

    React.useEffect(() => {
        if (filters.isParse) {
            if (isFirstRender && lastSearchString === search) {
                setIsFirstRender(false);

                return;
            }

            dispatch(fetchProductsCatalog(filters, currentPage, typeFetch) as any);
        }

        setIsFirstRender(false);
    }, [
        filters.isParse,
        filters.search,
        filters.price.min,
        filters.price.max,
        Object.keys(filters.categories).length,
        filters.categories[Object.keys(filters.categories)[0]],
        Object.keys(filters.conditions).length,
        Object.keys(filters.types).length,
        filters.types[Object.keys(filters.types)[0]],
        Object.keys(filters.brands).length,
        Object.keys(filters.models).length,
        filters.models[Object.keys(filters.models)[0]],
        Object.keys(filters.colors).length,
        Object.keys(filters.sex).length,
        // Object.keys(filters.availability)[0],
        Object.keys(filters.availability).length,
        Object.keys(filters.size).length,
        Object.keys(filters.glass_frame).length,
        filters.selection,
        filters.boutique,
        filters.price_drop,
        filters.sort,
        currentPage,
    ]);

    React.useEffect(
        () => () => {
            dispatch(setLastSearchString(search));
        },
        [search],
    );

    useCatalogScroll();

    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog-wrapper">
                    {!isMobile ? <CatalogBanner /> : <CatalogBannerMedia />}

                    {isLoadedFilters ? (
                        <>
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
                        </>
                    ) : (
                        <PageLoader />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Catalog;
