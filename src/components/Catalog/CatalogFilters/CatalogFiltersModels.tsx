'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setFiltersModelsProduct } from '@/redux/actions/products';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';

const CatalogFiltersModels: React.FC = () => {
    const dispatch = useDispatch();

    const [search, setSearch] = React.useState('');

    const { filters } = useTypedSelector(({ products }) => products);
    const { isLoaded, categories } = useTypedSelector(({ products_filters }) => products_filters);

    const models = React.useMemo(() => {
        if (!isLoaded) {
            return [];
        }

        const selectedCategories = Object.keys(filters.categories);

        if (!selectedCategories.length || !Object.keys(categories).length) {
            return [];
        }

        const modelsSet = new Set<string>([]);

        selectedCategories.forEach((category) => {
            if (categories[category]) {
                const subsubcategories = Object.keys(categories[category].subsubcategories);

                if (subsubcategories.length > 0) {
                    subsubcategories.forEach((subsubcategory) => {
                        const manufacturers = Object.keys(
                            categories[category].subsubcategories[subsubcategory].manufacturers,
                        );

                        if (manufacturers.length > 0) {
                            manufacturers.forEach((brand) => {
                                const models = Object.keys(
                                    categories[category].subsubcategories[subsubcategory].manufacturers[brand].models ||
                                        {},
                                );

                                if (models.length > 0) {
                                    const selectedBrands = Object.keys(filters.brands);

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
    }, [categories, filters.brands, filters.categories, isLoaded]);

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
        dispatch(setFiltersModelsProduct(model));
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
                            checked={!!Object.keys(filters.models).find((filtersModel) => model === filtersModel)}
                        />
                    </div>
                ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersModels;
