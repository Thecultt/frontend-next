import React from 'react';

import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';

const CatalogFiltersPriceDrop: React.FC = () => {
    const {
        filters: { price_drop, boutique },
        updateFilters,
    } = useCatalogFilters();

    const onClickSetPriceDrop = (price_drop: boolean) => {
        updateFilters({
            price_drop,
        });
    };

    return (
        <CatalogFiltersBlockWrapper title="Снижение цены" disabled={boutique}>
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-price-drop-checkbox-true"
                    label="Только со сниженной ценой"
                    onChange={() => onClickSetPriceDrop(true)}
                    checked={price_drop}
                />
            </div>

            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-price-drop-checkbox-false"
                    label="Показать все"
                    onChange={() => onClickSetPriceDrop(false)}
                    checked={!price_drop}
                />
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersPriceDrop;
