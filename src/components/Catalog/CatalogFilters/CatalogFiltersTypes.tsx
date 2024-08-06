'use client';

import React from 'react';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';
import { CATEGORY_SLUG_NAMES } from '@/constants/catalog';

const CatalogFiltersTypes: React.FC = () => {
    const {
        filters: { categories: selectedCategories, types: selectedTypes, category_slug },
        updateFilters,
    } = useCatalogFilters();
    const { categories: fetchedCategories } = useTypedSelector(({ products_filters }) => products_filters);

    const types = React.useMemo(() => {
        const items = category_slug
            ? [CATEGORY_SLUG_NAMES[category_slug]]
            : selectedCategories.length > 0
              ? selectedCategories
              : Object.keys(fetchedCategories);

        const newTypes: { [key: string]: string[] } = {};

        items.map((category) => {
            if (fetchedCategories[category] && fetchedCategories[category].subsubcategories) {
                newTypes[category] = Object.keys(fetchedCategories[category].subsubcategories);
            }
        });

        return newTypes;
    }, [category_slug, fetchedCategories, selectedCategories]);

    const onChangeSetType = (type: string) => {
        updateFilters({
            types: selectedTypes.includes(type)
                ? selectedTypes.filter((selectedType) => selectedType !== type)
                : [...selectedTypes, type],
        });
    };

    return (
        <CatalogFiltersBlockWrapper title="Тип" disabled={!Object.keys(types).length}>
            {Object.keys(types).map((key, index) => (
                <div key={`catalog-filters-block-content-types-checkbox-${index}-wrapper`}>
                    <p className="catalog-filters-block-content-checkbox__subtitle">{key}</p>

                    {types[key].map((type, subindex) => (
                        <div
                            className="catalog-filters-block-content-checkbox"
                            key={`catalog-filters-block-content-types-checkbox-${index}-${subindex}`}
                        >
                            <Checkbox
                                id={`catalog-filters-block-content-types-checkbox-${index}-${subindex}`}
                                label={type}
                                onChange={() => onChangeSetType(type)}
                                checked={selectedTypes.includes(type)}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersTypes;
