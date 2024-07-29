'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';
import { setFiltersBrandsProduct } from '@/redux/actions/products';

const CatalogFiltersBrands: React.FC = () => {
    const dispatch = useDispatch();

    const { filters } = useTypedSelector(({ products }) => products);
    const { categories } = useTypedSelector(({ products_filters }) => products_filters);

    const [search, setSearch] = React.useState<string>('');
    const [brands, setBrands] = React.useState<string[]>([]);

    React.useEffect(() => {
        const newBrands: string[] = [];

        if (Object.keys(filters.categories).length) {
            Object.keys(filters.categories).map((category) => {
                if (categories[category] && categories[category].subsubcategories) {
                    Object.keys(categories[category].subsubcategories).map((subsubcategory) => {
                        Object.keys(categories[category].subsubcategories[subsubcategory]).map((brand) => {
                            if (!newBrands.find((findBrand) => findBrand === brand)) {
                                newBrands.push(brand);
                            }
                        });
                    });
                }
            });
        } else {
            Object.keys(categories).map((category) => {
                if (categories[category] && categories[category].subsubcategories) {
                    Object.keys(categories[category].subsubcategories).map((subsubcategory) => {
                        Object.keys(categories[category].subsubcategories[subsubcategory]).map((brand) => {
                            if (!newBrands.find((findBrand) => findBrand === brand)) {
                                newBrands.push(brand);
                            }
                        });
                    });
                }
            });
        }

        setBrands(newBrands);
    }, [filters.categories]);

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value.toLowerCase();

        setSearch(value);
    };

    const onChangeSetBrand = (brand: string) => {
        dispatch(setFiltersBrandsProduct(brand));
    };

    return (
        <CatalogFiltersBlockWrapper title="Бренды">
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
                    {brands.length
                        ? brands
                              .sort((a, b) => a.localeCompare(b))
                              .map((brand, index) => (
                                  <div
                                      className="catalog-filters-block-content-checkbox"
                                      key={`catalog-filters-block-content-brands-checkbox-${index}`}
                                  >
                                      <Checkbox
                                          id={`catalog-filters-block-content-brands-checkbox-${index}`}
                                          label={brand}
                                          onChange={() => onChangeSetBrand(brand)}
                                          checked={
                                              Object.keys(filters.brands).find((filtersBrand) => brand === filtersBrand)
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
                    {brands
                        .sort((a, b) => a.localeCompare(b))
                        .map((brand, index) =>
                            brand.toLowerCase().indexOf(search) !== -1 ? (
                                <div
                                    className="catalog-filters-block-content-checkbox"
                                    key={`catalog-filters-block-content-brands-checkbox-${index}`}
                                >
                                    <Checkbox
                                        id={`catalog-filters-block-content-brands-checkbox-${index}`}
                                        label={brand}
                                        onChange={() => onChangeSetBrand(brand)}
                                        checked={
                                            Object.keys(filters.brands).find((filtersBrand) => brand === filtersBrand)
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

export default CatalogFiltersBrands;
