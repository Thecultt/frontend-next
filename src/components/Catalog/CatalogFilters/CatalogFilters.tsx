'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import {
    CatalogFiltersBoutiqueMedia,
    CatalogFiltersPrice,
    CatalogFiltersConditions,
    CatalogFiltersCategories,
    CatalogFiltersTypes,
    CatalogFiltersBrands,
    CatalogFiltersModels,
    CatalogFiltersColors,
    CatalogFiltersSex,
    CatalogFiltersAvailability,
    CatalogFiltersSize,
    CatalogFiltersSelections,
    CatalogFiltersGlassFrame,
    CatalogFiltersPriceDrop,
    Skeleton,
    CatalogFiltersMetalType,
} from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { CATEGORY_NAMES, CATEGORY_SLUGS, FILTER_CATEGORY_SLUGS } from '@/constants/catalog';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';
import { CatalogPageParams } from '@/types/catalog';

interface Props {
    isOpenFiltersMedia: boolean;
    setIsOpenFiltersMedia: (value: boolean) => void;
}

const CatalogFilters: React.FC<Props> = ({ isOpenFiltersMedia, setIsOpenFiltersMedia }) => {
    const { category_slug, brand_slug } = useParams<CatalogPageParams>();
    const {
        filters: { categories: selectedCategories },
        clearFilters,
    } = useCatalogFilters();

    const { price, isLoaded } = useTypedSelector(({ products_filters }) => products_filters);

    const handleClearFilters = () => {
        clearFilters();
        window.scrollTo(0, 0);
        setIsOpenFiltersMedia(false);
    };

    if (!isLoaded) {
        return (
            <div className="catalog-filters">
                <Skeleton className="catalog-filters-skeleton" />
            </div>
        );
    }

    return (
        <div
            className={getClassNames('catalog-filters', {
                active: isOpenFiltersMedia,
            })}
        >
            <div className="catalog-filters-media-top">
                <h4 className="catalog-filters-media-top__title">Фильтры</h4>

                <div className="catalog-filters-media-top-close" onClick={() => setIsOpenFiltersMedia(false)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 6L6 18M6 6L18 18"
                            stroke="#202020"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            <div className="catalog-filters-block-wrapper">
                <CatalogFiltersBoutiqueMedia />
                <CatalogFiltersSelections />
                <CatalogFiltersPrice defaultMin={price.min} defaultMax={price.max} />
                <CatalogFiltersConditions />
                {(!category_slug || !FILTER_CATEGORY_SLUGS.includes(category_slug)) && <CatalogFiltersCategories />}
                <CatalogFiltersTypes />
                {(category_slug === CATEGORY_SLUGS.jewelry || selectedCategories.includes(CATEGORY_NAMES.jewelry)) && (
                    <CatalogFiltersMetalType />
                )}
                {!brand_slug && <CatalogFiltersBrands />}
                {(!category_slug || ![CATEGORY_SLUGS.accessories, CATEGORY_SLUGS.shoes].includes(category_slug)) && (
                    <CatalogFiltersModels />
                )}
                <CatalogFiltersColors />
                {(category_slug === CATEGORY_SLUGS.accessories ||
                    selectedCategories.includes(CATEGORY_NAMES.accessories)) && <CatalogFiltersGlassFrame />}
                <CatalogFiltersSex />
                <CatalogFiltersAvailability />
                {(category_slug === CATEGORY_SLUGS.shoes || selectedCategories.includes(CATEGORY_NAMES.shoes)) && (
                    <CatalogFiltersSize />
                )}
                {category_slug !== CATEGORY_SLUGS.sale && <CatalogFiltersPriceDrop />}
            </div>

            <div className="catalog-filters-btn">
                <button className="catalog-filters-btn__clear" onClick={handleClearFilters}>
                    Очистить все фильтры
                </button>
            </div>

            <div className="catalog-filters-btn-media">
                <button className="btn-regular catalog-filters-btn-media__clear" onClick={handleClearFilters}>
                    Сбросить
                </button>

                <button className="btn catalog-filters-btn-media__apply" onClick={() => setIsOpenFiltersMedia(false)}>
                    Применить
                </button>
            </div>
        </div>
    );
};

export default CatalogFilters;
