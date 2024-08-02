import React from 'react';

import { getClassNames } from '@/functions/getClassNames';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';

const CatalogFiltersBoutiqueMedia: React.FC = () => {
    const {
        filters: { boutique },
        updateFilters,
    } = useCatalogFilters();

    const onClickSetBoutique = (status: boolean) => {
        updateFilters({ boutique: status });
    };

    return (
        <div className="catalog-filters-boutique">
            <button
                className={getClassNames('catalog-filters-boutique__btn all', {
                    active: !boutique,
                })}
                onClick={() => onClickSetBoutique(false)}
            >
                Все товары
            </button>
            <button
                className={getClassNames('catalog-filters-boutique__btn boutique', {
                    active: boutique,
                })}
                onClick={() => onClickSetBoutique(true)}
            >
                Из бутика
            </button>
        </div>
    );
};

export default CatalogFiltersBoutiqueMedia;
