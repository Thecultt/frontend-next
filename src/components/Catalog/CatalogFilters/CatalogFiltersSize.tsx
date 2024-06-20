import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setFiltersSizeProduct } from '@/redux/actions/products';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';

interface CatalogFiltersSizeProps {
    size: string[];
}

const CatalogFiltersSize: React.FC<CatalogFiltersSizeProps> = ({ size }) => {
    const dispatch = useDispatch();

    const { filters } = useTypedSelector(({ products }) => products);

    const onChangeSetType = (size: string) => {
        dispatch(setFiltersSizeProduct(size));
    };

    return (
        <CatalogFiltersBlockWrapper title="Размер">
            {size.map((size, index) => (
                <div
                    className="catalog-filters-block-content-checkbox"
                    key={`catalog-filters-block-content-size-${size}-checkbox-${index}`}
                >
                    <Checkbox
                        id={`catalog-filters-block-content-size-${size}-checkbox-${index}`}
                        label={size}
                        onChange={() => onChangeSetType(size)}
                        checked={Object.keys(filters.size).find((filtersSize) => size == filtersSize) ? true : false}
                    />
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersSize;
