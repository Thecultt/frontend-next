import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setFiltersModelsProduct } from '@/redux/actions/products';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';

const CatalogFiltersModels: React.FC = () => {
    const dispatch = useDispatch();

    const [models, setModels] = React.useState<string[]>([]);

    const [search, setSearch] = React.useState<string>('');

    const { filters } = useTypedSelector(({ products }) => products);
    const { isLoaded, categories } = useTypedSelector(({ products_filters }) => products_filters);

    React.useEffect(() => {
        if (isLoaded) {
            const newModels: string[] = [];

            Object.keys(filters.categories).map((category) => {
                if (categories[category] && categories[category].subsubcategories) {
                    Object.keys(categories[category].subsubcategories).map((subsubcategory) => {
                        Object.keys(categories[category].subsubcategories[subsubcategory]).map((brand) => {
                            if (Object.keys(filters.brands).length) {
                                Object.keys(filters.brands).map((currentBrand) => {
                                    if (
                                        currentBrand === brand &&
                                        categories[category].subsubcategories[subsubcategory][brand]
                                    ) {
                                        categories[category].subsubcategories[subsubcategory][brand].map((model) => {
                                            if (!newModels.find((findModel) => model === findModel)) {
                                                newModels.push(model);
                                            }
                                        });
                                    }
                                });
                            } else {
                                if (categories[category].subsubcategories[subsubcategory][brand]) {
                                    categories[category].subsubcategories[subsubcategory][brand].map((model) => {
                                        if (!newModels.find((findModel) => model === findModel)) {
                                            newModels.push(model);
                                        }
                                    });
                                }
                            }
                        });
                    });
                }
            });

            setModels(newModels);
        }
    }, [filters.categories, filters.brands]);

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value.toLowerCase();

        setSearch(value);
    };

    const onChangeSetModels = (model: string) => {
        dispatch(setFiltersModelsProduct(model));
    };

    return (
        <CatalogFiltersBlockWrapper title="Модели">
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

            {search === '' ? (
                <>
                    {models.length
                        ? models
                              .sort((a, b) => a.localeCompare(b))
                              .map((model, index) => (
                                  <div
                                      className="catalog-filters-block-content-checkbox"
                                      key={`catalog-filters-block-content-models-checkbox-${index}`}
                                  >
                                      <Checkbox
                                          id={`catalog-filters-block-content-models-checkbox-${index}`}
                                          label={model}
                                          onChange={() => onChangeSetModels(model)}
                                          checked={
                                              Object.keys(filters.models).find((filtersModel) => model === filtersModel)
                                                  ? true
                                                  : false
                                          }
                                      />
                                  </div>
                              ))
                        : null}
                </>
            ) : (
                <>
                    {models
                        .sort((a, b) => a.localeCompare(b))
                        .map((model, index) =>
                            model.toLowerCase().indexOf(search) !== -1 ? (
                                <div
                                    className="catalog-filters-block-content-checkbox"
                                    key={`catalog-filters-block-content-models-checkbox-${index}`}
                                >
                                    <Checkbox
                                        id={`catalog-filters-block-content-models-checkbox-${index}`}
                                        label={model}
                                        onChange={() => onChangeSetModels(model)}
                                        checked={
                                            Object.keys(filters.models).find((filtersModel) => model === filtersModel)
                                                ? true
                                                : false
                                        }
                                    />
                                </div>
                            ) : null,
                        )}
                </>
            )}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersModels;
