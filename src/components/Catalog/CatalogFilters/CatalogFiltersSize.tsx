import React from 'react';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';
import { CATEGORY_NAMES } from '@/constants/catalog';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';

const CatalogFiltersSize: React.FC = () => {
    const {
        filters: { size: selectedSizes },
        updateFilters,
    } = useCatalogFilters();

    const { categories } = useTypedSelector(({ products_filters }) => products_filters);
    const sizes = categories[CATEGORY_NAMES.shoes].size || [];

    const onChangeSetType = (size: number) => {
        updateFilters({
            size: selectedSizes.includes(size)
                ? selectedSizes.filter((selectedSize) => selectedSize !== size)
                : [...selectedSizes, size],
        });
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
                        checked={selectedSizes.includes(size)}
                    />
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersSize;
