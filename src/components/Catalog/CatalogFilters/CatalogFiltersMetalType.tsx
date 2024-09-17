'use client';

import React from 'react';

import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';
import { capitalize } from '@/functions/capitalize';

const CatalogFiltersMetalType: React.FC = () => {
    const {
        filters: { metal_types: selectedMetalTypes },
        updateFilters,
    } = useCatalogFilters();

    const { jewelry_metal_type: metalTypes } = useTypedSelector(({ products_filters }) => products_filters);

    const onChangeType = (type: string) => {
        updateFilters({
            metal_types: selectedMetalTypes.includes(type)
                ? selectedMetalTypes.filter((selectedType) => selectedType !== type)
                : [...selectedMetalTypes, type],
        });
    };

    return (
        <CatalogFiltersBlockWrapper title="Тип металла" disabled={!metalTypes.length}>
            <div className="catalog-filters-block-content-list">
                {metalTypes.map((item, index) => (
                    <div
                        className="catalog-filters-block-content-checkbox"
                        key={`catalog-filters-block-content-metal-type-${item.slug}-checkbox-${index}`}
                    >
                        <Checkbox
                            id={`catalog-filters-block-content-metal-type-${item.slug}-checkbox-${index}`}
                            label={capitalize(item.type)}
                            onChange={() => onChangeType(item.slug)}
                            checked={selectedMetalTypes.includes(item.slug)}
                        />
                    </div>
                ))}
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersMetalType;
