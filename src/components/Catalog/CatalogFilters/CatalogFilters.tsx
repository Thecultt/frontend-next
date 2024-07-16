import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'qs';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { ProductsStateFilters } from '@/redux/types/IProducts';
import {
    setFiltersCatalog,
    setFiltersCategoriesProduct,
    setFiltersAvailabilityProduct,
    setCurrentPageProduct,
    clearProductsFilters,
} from '@/redux/actions/products';
import {
    CatalogFiltersBoutiqueMedia,
    CatalogFiltersPrice,
    CatalogFiltersConditions,
    CatalogFiltersCategories,
    CatalogFiltersTypes,
    CatalogFiltersBrands,
    CatalogFiltersModels,
    CatalogFiltersColors,
    CatalogFiltersSex,
    CatalogFiltersAvailability,
    CatalogFiltersSize,
    CatalogFiltersSelections,
    CatalogFiltersGlassFrame,
    CatalogFiltersPriceDrop,
} from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { SORT } from '@/constants/catalog';
import { getPath } from '@/functions/getPath';
import { useHash } from '@/hooks/useHash';
import { APP_ROUTE } from '@/constants/routes';

interface Props {
    isOpenFiltersMedia: boolean;
    setIsOpenFiltersMedia: (value: boolean) => void;
}

const CatalogFilters: React.FC<Props> = ({ setIsOpenFiltersMedia, isOpenFiltersMedia }) => {
    const dispatch = useDispatch();

    const router = useRouter();
    const query = useSearchParams();
    const { hash } = useHash();

    const { filters, currentPage } = useTypedSelector(({ products }) => products);

    const {
        price,
        conditions,
        categories,
        colors,
        glass_frame,
        isLoaded: isLoadedProductsFilters,
    } = useTypedSelector(({ products_filters }) => products_filters);

    React.useEffect(() => {
        if (isLoadedProductsFilters) {
            const filters: ProductsStateFilters = {
                isParse: true,

                search: query.get('search') ? (query.get('search') as string) : '',

                price: {
                    min: query.get('minPrice') ? parseInt(query.get('minPrice') as string) : 0,
                    max: query.get('maxPrice') ? parseInt(query.get('maxPrice') as string) : 0,
                },

                conditions: {},
                categories: {},
                types: {},
                brands: {},
                models: {},
                colors: {},
                sex: {},
                availability: {},
                size: {},
                selection: query.get('selection') ?? null,

                boutique: query.get('boutique') === 'true' ? true : false,
                price_drop: query.get('price_drop') === 'true' ? true : false,

                glass_frame: {},

                sort: query.get('sort') ?? SORT.a,
            };

            query.getAll('conditions').map((condition) => {
                filters.conditions[condition] = condition;
            });

            query.getAll('categories').map((category) => {
                filters.categories[category] = category;
            });

            query.getAll('types').map((type) => {
                filters.types[type] = type;
            });

            query.getAll('brands').map((brand) => {
                filters.brands[brand] = brand;
            });

            query.getAll('models').map((model) => {
                filters.models[model] = model;
            });

            query.getAll('colors').map((color) => {
                filters.colors[color] = color;
            });

            query.getAll('sex').map((sex) => {
                filters.sex[sex] = sex;
            });

            query.getAll('availability').map((availability) => {
                filters.availability[availability] = availability;
            });

            query.getAll('size').map((size) => {
                filters.size[size] = size;
            });

            query.getAll('glass_frame').map((glass_fame) => {
                filters.glass_frame[glass_fame] = glass_fame;
            });

            const page = parseInt(query.get('page') || '1');

            dispatch(setCurrentPageProduct(page));
            dispatch(setFiltersCatalog(filters));
        }

        // return () => {
        //     dispatch(setCurrentPageProduct(1));
        //     dispatch(
        //         setFiltersCatalog({
        //             isParse: false,

        //             search: '',

        //             price: {
        //                 min: 0,
        //                 max: 0,
        //             },

        //             conditions: {},
        //             categories: {},
        //             types: {},
        //             brands: {},
        //             models: {},
        //             colors: {},
        //             sex: {},
        //             availability: {},
        //             size: {},
        //             selection: null,

        //             boutique: false,
        //             price_drop: false,

        //             glass_frame: {},

        //             sort: SORT.a,
        //         }),
        //     );
        // };
    }, [query, isLoadedProductsFilters]);

    React.useEffect(() => {
        if (filters.isParse) {
            const oldParamsData: any = {};

            const oldParams: any = new URLSearchParams(window.location.search);

            for (const value of oldParams.keys()) {
                if (value === 'search' || value === 'minPrice' || value === 'maxPrice' || value === 'sort') {
                    oldParamsData[value] = oldParams.get(value);
                } else {
                    oldParamsData[value] = oldParams.getAll(value);
                }
            }

            const params: { [key: string]: any } = {
                ...oldParamsData,
                categories: Object.keys(filters.categories),
                types: Object.keys(filters.types),
                brands: Object.keys(filters.brands),
                models: Object.keys(filters.models),
                colors: Object.keys(filters.colors),
                sex: Object.keys(filters.sex),
                availability: Object.keys(filters.availability),
                size: Object.keys(filters.size),
                conditions: Object.keys(filters.conditions),
                glass_frame: Object.keys(filters.glass_frame),
            };

            if (filters.search !== '') {
                params['search'] = filters.search;
            }

            if (filters.price.max !== 0) {
                params['minPrice'] = String(filters.price.min);
                params['maxPrice'] = String(filters.price.max);
            }

            if (filters.price.min !== 0 && filters.price.max === 0) {
                params['minPrice'] = String(filters.price.min);
            }

            if (filters.boutique !== undefined) {
                params['boutique'] = filters.boutique;
            }

            if (filters.price_drop !== undefined) {
                params['price_drop'] = filters.price_drop;
            }

            if (filters.sort !== undefined && filters.sort !== null) {
                params['sort'] = filters.sort;
            }

            if (filters.selection) {
                params['selection'] = filters.selection;
            } else {
                delete params['selection'];
            }

            params['page'] = currentPage;

            router.replace(
                getPath({
                    pathname: APP_ROUTE.catalog,
                    search: qs.stringify(params, {
                        arrayFormat: 'repeat',
                        skipNulls: true,
                    }),
                    hash: hash || '',
                }),
                { scroll: false },
            );
        }
    }, [
        filters.isParse,
        filters.search,
        filters.price.min,
        filters.price.max,
        Object.keys(filters.conditions).length,
        Object.keys(filters.categories).length,
        Object.keys(filters.types).length,
        Object.keys(filters.brands).length,
        Object.keys(filters.models).length,
        Object.keys(filters.colors).length,
        Object.keys(filters.sex).length,
        // Object.keys(filters.availability)[0],
        Object.keys(filters.availability).length,
        Object.keys(filters.size).length,
        Object.keys(filters.glass_frame).length,
        filters.selection,
        filters.boutique,
        filters.price_drop,
        filters.sort,
        currentPage,
    ]);

    React.useEffect(() => {
        if (isLoadedProductsFilters && filters.isParse) {
            if (!Object.keys(filters.categories).length) {
                Object.keys(categories).map((category) => dispatch(setFiltersCategoriesProduct(category)));
            }
        }
    }, [isLoadedProductsFilters, filters.isParse, Object.keys(filters.categories).length, filters.categories[0]]);

    React.useEffect(() => {
        if (isLoadedProductsFilters && filters.isParse) {
            if (!Object.keys(filters.availability).length) {
                dispatch(setFiltersAvailabilityProduct('Доступно'));
                dispatch(setFiltersAvailabilityProduct('На примерке'));
                dispatch(setFiltersAvailabilityProduct('Нет в наличии'));
            }
        }
    }, [
        isLoadedProductsFilters,
        filters.isParse,
        filters.search,
        Object.keys(filters.categories).map((category) => category),
        Object.keys(filters.types).map((type) => type),
        Object.keys(filters.brands).map((brand) => brand),
    ]);

    const onClickClearFilters = () => {
        window.scrollTo(0, 0);
        setIsOpenFiltersMedia(false);
        dispatch(clearProductsFilters());
    };

    return (
        <div
            className={getClassNames('catalog-filters', {
                active: isOpenFiltersMedia,
            })}
        >
            <div className="catalog-filters-media-top">
                <h4 className="catalog-filters-media-top__title">Фильтры</h4>

                <div className="catalog-filters-media-top-close" onClick={() => setIsOpenFiltersMedia(false)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 6L6 18M6 6L18 18"
                            stroke="#202020"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            <div className="catalog-filters-block-wrapper">
                <CatalogFiltersBoutiqueMedia />

                <CatalogFiltersSelections />

                <CatalogFiltersPrice defaultMin={price.min} defaultMax={price.max} />
                <CatalogFiltersConditions conditions={conditions} />
                <CatalogFiltersCategories />
                <CatalogFiltersTypes />
                <CatalogFiltersBrands />
                <CatalogFiltersModels />
                <CatalogFiltersColors colors={colors} />

                {Object.keys(filters.categories).find((category) => category === 'Аксессуары') ? (
                    <CatalogFiltersGlassFrame glass_frame={glass_frame} />
                ) : null}

                <CatalogFiltersSex />
                <CatalogFiltersAvailability />

                {Object.keys(filters.categories).find((category) => category === 'Обувь') ? (
                    <CatalogFiltersSize size={categories['Обувь'].size ? categories['Обувь'].size : []} />
                ) : null}
                {/* {Object.keys(filters.categories).map((category) => (
					filters.categories[category] === "Обувь" ? (
						<CatalogFiltersSize size={categories["Обувь"].size ? categories["Обувь"].size : []} />
					) : null
				))} */}

                <CatalogFiltersPriceDrop />
            </div>

            <div className="catalog-filters-btn">
                <button className="catalog-filters-btn__clear" onClick={onClickClearFilters}>
                    Очистить все фильтры
                </button>
            </div>

            <div className="catalog-filters-btn-media">
                <button className="btn-regular catalog-filters-btn-media__clear" onClick={onClickClearFilters}>
                    Сбросить
                </button>

                <button className="btn catalog-filters-btn-media__apply" onClick={() => setIsOpenFiltersMedia(false)}>
                    Применить
                </button>
            </div>
        </div>
    );
};

export default CatalogFilters;
