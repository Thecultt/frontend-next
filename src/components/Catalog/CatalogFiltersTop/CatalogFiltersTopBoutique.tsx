'use client';

import React from 'react';

import { getClassNames } from '@/functions/getClassNames';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';

const CatalogFiltersTopBoutique: React.FC = React.memo(() => {
    const {
        filters: { brandnew },
        updateFilters,
    } = useCatalogFilters();

    const onClickSetBoutique = (status: boolean) => {
        updateFilters({ brandnew: status });
    };

    return (
        <div className="catalog-filters-top-boutique">
            <button
                className={getClassNames('catalog-filters-top-boutique__btn all', {
                    active: !brandnew,
                })}
                onClick={() => onClickSetBoutique(false)}
            >
                Все товары
            </button>
            <button
                className={getClassNames('catalog-filters-top-boutique__btn boutique', {
                    active: brandnew,
                })}
                onClick={() => onClickSetBoutique(true)}
            >
                Новое от брендов
            </button>

            <div className="catalog-filters-top-boutique-info">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        stroke="#285141"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <div className="catalog-filters-top-boutique-info-message-wrapper message-info-wrapper">
                    <p className="message-info center catalog-filters-top-boutique-info__message">
                        <span className="message-info__title">Новое от брендов</span>
                        Это лоты, полученные от брендов напрямую или из бутиков-партнеров. Все аксессуары в подборке
                        новые — вы их первый владелец.
                    </p>
                </div>
            </div>
        </div>
    );
});

export default CatalogFiltersTopBoutique;
