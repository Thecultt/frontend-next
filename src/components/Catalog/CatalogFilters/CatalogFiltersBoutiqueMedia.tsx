'use client';

import React from 'react';

import { getClassNames } from '@/functions/getClassNames';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';

const CatalogFiltersBoutiqueMedia: React.FC = () => {
    const {
        filters: { brandnew },
        updateFilters,
    } = useCatalogFilters();

    const onClickSetBoutique = (status: boolean) => {
        updateFilters({ brandnew: status });
    };

    return (
        <div className="catalog-filters-boutique">
            <button
                className={getClassNames('catalog-filters-boutique__btn all', {
                    active: !brandnew,
                })}
                onClick={() => onClickSetBoutique(false)}
            >
                Все товары
            </button>
            <button
                className={getClassNames('catalog-filters-boutique__btn boutique', {
                    active: brandnew,
                })}
                onClick={() => onClickSetBoutique(true)}
            >
                Новое от брендов
            </button>
        </div>
    );
};

export default CatalogFiltersBoutiqueMedia;
