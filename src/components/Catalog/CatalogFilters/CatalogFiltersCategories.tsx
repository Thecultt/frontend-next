'use client';

import React from 'react';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';

const CatalogFiltersCategories: React.FC = () => {
    const {
        filters: { categories: selectedCategories },
        updateFilters,
    } = useCatalogFilters();

    const { categories } = useTypedSelector(({ products_filters }) => products_filters);

    const onChangeSetCategory = (category: string) => {
        updateFilters({
            categories: selectedCategories.includes(category)
                ? selectedCategories.filter((selectedCategory) => selectedCategory !== category)
                : [...selectedCategories, category],
        });
    };

    return (
        <CatalogFiltersBlockWrapper title="Категория">
            {Object.keys(categories).map((category, index) => (
                <div
                    className="catalog-filters-block-content-checkbox"
                    key={`catalog-filters-block-content-category-checkbox-${index}`}
                >
                    <Checkbox
                        id={`catalog-filters-block-content-category-checkbox-${index}`}
                        label={category}
                        onChange={() => onChangeSetCategory(category)}
                        checked={selectedCategories.includes(category)}
                    />
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersCategories;
