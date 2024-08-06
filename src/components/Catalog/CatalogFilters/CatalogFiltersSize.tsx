import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setFiltersSizeProduct } from '@/redux/actions/products';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';
import { CATEGORY_NAMES } from '@/constants/catalog';

const CatalogFiltersSize: React.FC = () => {
    const dispatch = useDispatch();

    const { categories } = useTypedSelector(({ products_filters }) => products_filters);
    const { filters } = useTypedSelector(({ products }) => products);

    const sizes = categories[CATEGORY_NAMES.shoes].size || [];

    const onChangeSetType = (size: number) => {
        dispatch(setFiltersSizeProduct(size.toString()));
    };

    return (
        <CatalogFiltersBlockWrapper title="Размер" disabled={!sizes.length}>
            {sizes.map((size, index) => (
                <div
                    className="catalog-filters-block-content-checkbox"
                    key={`catalog-filters-block-content-size-${size}-checkbox-${index}`}
                >
                    <Checkbox
                        id={`catalog-filters-block-content-size-${size}-checkbox-${index}`}
                        label={size.toString()}
                        onChange={() => onChangeSetType(size)}
                        checked={!!Object.keys(filters.size).find((filtersSize) => size.toString() == filtersSize)}
                    />
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersSize;
