import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setFiltersPriceDropProduct } from '@/redux/actions/products';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';

const CatalogFiltersPriceDrop: React.FC = () => {
    const dispatch = useDispatch();

    const { filters } = useTypedSelector(({ products }) => products);

    const onClickSetPriceDrop = (price_drop: boolean) => {
        dispatch(setFiltersPriceDropProduct(price_drop));
    };

    return (
        <CatalogFiltersBlockWrapper title="Снижение цены" disabled={filters.boutique}>
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id={`catalog-filters-block-content-price-drop-checkbox-true`}
                    label="Только со сниженной ценой"
                    onChange={() => onClickSetPriceDrop(true)}
                    checked={filters.price_drop === true}
                    // checked={Object.keys(filters.conditions).find((filtersCondition) => (
                    // 	condition === filtersCondition
                    // )) ? true : false}
                />
            </div>

            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id={`catalog-filters-block-content-price-drop-checkbox-false`}
                    label="Показать все"
                    onChange={() => onClickSetPriceDrop(false)}
                    checked={filters.price_drop === false}
                    // checked={!filters.price_drop}
                    // onChange={() => onClickSetCondition(condition)}
                    // checked={Object.keys(filters.conditions).find((filtersCondition) => (
                    // 	condition === filtersCondition
                    // )) ? true : false}
                />
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersPriceDrop;
