'use client';

import React from 'react';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';
import { CATEGORY_SLUG_NAMES } from '@/constants/catalog';

const CatalogFiltersModels: React.FC = () => {
    const [search, setSearch] = React.useState('');

    const {
        filters: { categories: selectedCategories, brands: selectedBrands, models: selectedModels, category_slug },
        updateFilters,
    } = useCatalogFilters();

    const { isLoaded, categories: fetchedCategories } = useTypedSelector(({ products_filters }) => products_filters);

    const models = React.useMemo(() => {
        if (!isLoaded || (!selectedCategories.length && !Object.keys(fetchedCategories).length)) {
            return [];
        }

        const items = category_slug
            ? [CATEGORY_SLUG_NAMES[category_slug]]
            : selectedCategories.length > 0
              ? selectedCategories
              : Object.keys(fetchedCategories);

        const modelsSet = new Set<string>([]);

        items.forEach((category) => {
            if (fetchedCategories[category]) {
                const subsubcategories = Object.keys(fetchedCategories[category].subsubcategories);

                if (subsubcategories.length > 0) {
                    subsubcategories.forEach((subsubcategory) => {
                        const manufacturers = Object.keys(
                            fetchedCategories[category].subsubcategories[subsubcategory].manufacturers,
                        );

                        if (manufacturers.length > 0) {
                            manufacturers.forEach((brand) => {
                                const models = Object.keys(
                                    fetchedCategories[category].subsubcategories[subsubcategory].manufacturers[brand]
                                        .models || {},
                                );

                                if (models.length > 0) {
                                    if (selectedBrands.length > 0) {
                                        selectedBrands.forEach((currentBrand) => {
                                            if (currentBrand === brand) {
                                                models.forEach((model) => {
                                                    modelsSet.add(model);
                                                });
                                            }
                                        });
                                    } else {
                                        models.forEach((model) => {
                                            modelsSet.add(model);
                                        });
                                    }
                                }
                            });
                        }
                    });
                }
            }
        });

        return Array.from(modelsSet).sort((a, b) => a.localeCompare(b));
    }, [category_slug, fetchedCategories, isLoaded, selectedBrands, selectedCategories]);

    const visibleModels = React.useMemo(() => {
        if (!search) {
            return models;
        }

        return models.filter((model) => model.toLowerCase().indexOf(search) !== -1);
    }, [models, search]);

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);
    };

    const onChangeSetModels = (model: string) => {
        updateFilters({
            models: selectedModels.includes(model)
                ? selectedModels.filter((selectedModel) => selectedModel !== model)
                : [...selectedModels, model],
        });
    };

    return (
        <CatalogFiltersBlockWrapper title="Модели" disabled={!models.length}>
            <div className="catalog-filters-block-content-brands-search">
                <input
                    type="text"
                    className="catalog-filters-block-content-brands-search__input"
                    onChange={(e) => onChangeSearch(e)}
                />
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.33235 11.1647C9.27732 11.1647 11.6647 8.77731 11.6647 5.83234C11.6647 2.88737 9.27732 0.5 6.33235 0.5C3.38737 0.5 1 2.88737 1 5.83234C1 8.77731 3.38737 11.1647 6.33235 11.1647Z"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.9974 12.501L10.0979 9.60156"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {visibleModels.length > 0 &&
                visibleModels.map((model, index) => (
                    <div
                        className="catalog-filters-block-content-checkbox"
                        key={`catalog-filters-block-content-models-checkbox-${index}`}
                    >
                        <Checkbox
                            id={`catalog-filters-block-content-models-checkbox-${index}`}
                            label={model}
                            onChange={() => onChangeSetModels(model)}
                            checked={selectedModels.includes(model)}
                        />
                    </div>
                ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersModels;
