import { Dispatch } from 'redux';

import $api from '@/http';
import { Product, ProductPage } from '@/models/IProduct';
import { SORT } from '@/constants/catalog';
import { sendMindbox } from '@/functions/mindbox';

import { CatalogFetchType, ProductActionTypes, ProductTypes, ProductsStateFilters } from '../types/IProducts';

export const fetchFirstProductsCatalog = () => async (dispatch: Dispatch<ProductTypes>) => {
    const {
        data: { total_pages, total_items, items },
    } = await $api.get<{
        total_pages: number;
        current_page: number;
        total_items: number;
        items: Product[];
    }>(`/catalog?availability=1&sort_by=${SORT.a}`);

    // Measure product views / impressions
    window?.dataLayer?.push({ ecommerce: null }); // Clear the previous ecommerce object.
    window?.dataLayer?.push({
        event: 'view_item_list',
        ecommerce: {
            timestamp: Math.floor(Date.now() / 1000),
            items: items.map((item, index) => ({
                item_name: item.name,
                item_id: `${item.article}`,
                price: `${item.price}`,
                item_brand: item.manufacturer,
                item_category: item.category,
                item_category2: item.subcategory,
                item_category3: '-',
                item_category4: '-',
                item_list_name: 'Search Results',
                item_list_id: item.article,
                index,
                quantity: 1,
            })),
        },
    });

    dispatch({
        type: ProductActionTypes.SET_PRODUCTS_PAGE_COUNT,
        payload: total_pages,
    });

    dispatch({
        type: ProductActionTypes.SET_PRODUCTS_ITEMS_COUNT,
        payload: total_items,
    });

    dispatch({
        type: ProductActionTypes.SET_PRODUCTS_ITEMS,
        payload: items,
    });
};

export const fetchProductsCatalog =
    (
        filters: {
            search: string;

            price: {
                min: number;
                max: number;
            };

            conditions: { [key: string]: string };
            categories: { [key: string]: string };
            types: { [key: string]: string };
            brands: { [key: string]: string };
            models: { [key: string]: string };
            colors: { [key: string]: string };
            sex: { [key: string]: string };
            availability: { [key: string]: string };
            size: { [key: string]: string };
            glass_frame: { [key: string]: string };

            selection: string | null;

            boutique: boolean;
            price_drop: boolean;

            sort: string;
        },
        page: number,
        typeFetch: CatalogFetchType,
    ) =>
    async (dispatch: Dispatch<ProductTypes>) => {
        dispatch({
            type:
                typeFetch === CatalogFetchType.More
                    ? ProductActionTypes.SET_PRODUCTS_IS_FETCH_MORE
                    : ProductActionTypes.SET_PRODUCTS_IS_FETCH_PAGE,
            payload: true,
        });

        const params = new URLSearchParams();

        const conditionsArray = Object.keys(filters.conditions).map((key) => key);
        const categoriesArray = Object.keys(filters.categories).map((key) => key);
        const typesArray = Object.keys(filters.types).map((key) => key);
        const brandsArray = Object.keys(filters.brands).map((key) => key);
        const modelsArray = Object.keys(filters.models).map((key) => key);
        const colorsArray = Object.keys(filters.colors).map((key) => key);
        const sexArray = Object.keys(filters.sex).map((key) => key);
        const availabilityArray = Object.keys(filters.availability).map((key) => key);
        const sizeArray = Object.keys(filters.size).map((key) => key);
        const glassFrameArray = Object.keys(filters.glass_frame).map((key) => key);

        params.append('search', filters.search);

        if (filters.price.max !== 0) {
            params.append('price_from', String(filters.price.min));
            params.append('price_to', String(filters.price.max));
        }

        if (filters.price.min !== 0 && filters.price.max === 0) {
            params.append('price_from', String(filters.price.min));
        }

        conditionsArray.map((condition) => params.append('conditions', condition));
        categoriesArray.map((categories) => params.append('category', categories));
        typesArray.map((type) => params.append('subcategories', type));
        brandsArray.map((brand) => params.append('manufacturer', brand));
        modelsArray.map((model) => params.append('model_names', model));
        colorsArray.map((color) => params.append('color', color));
        sexArray.map((sex) => params.append('genders', sex));

        glassFrameArray.map((glass_frame) => params.append('glass_frame', glass_frame));

        if (availabilityArray.length) {
            // availabilityArrray.map((availability) => availability == "Доступно" ? params.append("availability", "1") : params.append("availability", "0"))
            availabilityArray.map((availability) => {
                if (availability == 'Доступно') {
                    params.append('availability', '1');
                } else if (availability == 'На примерке') {
                    params.append('availability', '-1');
                } else {
                    params.append('availability', '0');
                }
            });
        }
        // else {
        // 	params.append("availability", "1")
        // }

        sizeArray.map((size) => params.append('size', size));

        if (filters.boutique) {
            params.append('from_boutique', String(filters.boutique));
        }
        if (filters.price_drop) {
            params.append('price_drop', String(filters.price_drop));
        }
        if (filters.selection) {
            params.append('selections', filters.selection);
        }

        params.append('sort_by', filters.sort ?? SORT.a);

        params.append('page', String(page));

        const {
            data: { total_pages, total_items, items },
        } = await $api.get<{
            total_pages: number;
            current_page: number;
            total_items: number;
            items: Product[];
        }>(`/catalog`, { params: params });

        // Measure product views / impressions
        window?.dataLayer?.push({ ecommerce: null }); // Clear the previous ecommerce object.
        window?.dataLayer?.push({
            event: 'view_item_list',
            ecommerce: {
                timestamp: Math.floor(Date.now() / 1000),
                items: items.map((item, index) => ({
                    item_name: item.name,
                    item_id: `${item.article}`,
                    price: `${item.price}`,
                    item_brand: item.manufacturer,
                    item_category: item.category,
                    item_category2: item.subcategory,
                    item_category3: '-',
                    item_category4: '-',
                    item_list_name: 'Search Results',
                    item_list_id: item.article,
                    index,
                    quantity: 1,
                })),
            },
        });

        dispatch({
            type: ProductActionTypes.SET_PRODUCTS_IS_LOADED,
            payload: true,
        });

        dispatch({
            type: ProductActionTypes.SET_PRODUCTS_PAGE_COUNT,
            payload: total_pages,
        });

        dispatch({
            type: ProductActionTypes.SET_PRODUCTS_ITEMS_COUNT,
            payload: total_items,
        });

        dispatch({
            type:
                typeFetch === CatalogFetchType.More
                    ? ProductActionTypes.SET_PRODUCTS_ITEMS_MORE
                    : ProductActionTypes.SET_PRODUCTS_ITEMS_PAGE,
            payload: items,
        });

        dispatch({
            type:
                typeFetch === CatalogFetchType.More
                    ? ProductActionTypes.SET_PRODUCTS_IS_FETCH_MORE
                    : ProductActionTypes.SET_PRODUCTS_IS_FETCH_PAGE,
            payload: false,
        });

        if (typeFetch === CatalogFetchType.More) {
            dispatch({
                type: ProductActionTypes.SET_PRODUCTS_TYPE_FETCH,
                payload: CatalogFetchType.Page,
            });
        }
    };

export const fetchProductByArticle = (article: string) => async (dispatch: Dispatch<ProductTypes>) => {
    dispatch({
        type: ProductActionTypes.SET_PRODUCTS_ITEM_BY_ARTICLE_IS_LOADED,
        payload: false,
    });

    await $api
        .get<ProductPage>(`/product/${article}`)
        .then(async ({ data }) => {
            const similar = await $api
                .get<{ items: Product[] }>(`/product/${article}/similar`)
                .then(({ data }) => data.items);

            window?.dataLayer?.push({ ecommerce: null });
            window?.dataLayer?.push({
                event: 'view_item',
                ecommerce: {
                    timestamp: Math.floor(Date.now() / 1000),
                    items: [
                        {
                            item_name: data.name,
                            item_id: `${data.article}`,
                            price: `${data.price}`,
                            item_brand: data.manufacturer,
                            item_category: data.category,
                            item_category2: data.subcategory,
                            item_category3: '-',
                            item_category4: '-',
                            item_list_name: 'Search Results',
                            item_list_id: data.article,
                            index: 1,
                            quantity: 1,
                        },
                    ],
                },
            });

            try {
                sendMindbox('Website.ViewProduct', {
                    viewProduct: {
                        product: {
                            ids: {
                                website: `${data.id}`,
                            },
                        },
                        price: `${data.price}`,
                        customerAction: {
                            customFields: {
                                brand: `${data.manufacturer}`,
                                coctoyanie: `${data.condition}`,
                                defecti: `${data.nuances}`,
                                kategoria: `${data.category}`,
                                model: `${data.name}`,
                            },
                        },
                    },
                });
            } catch (e) {
                console.log(e);
            }

            dispatch({
                type: ProductActionTypes.SET_PRODUCTS_ITEM_BY_ARTICLE,
                payload: { data, similar },
            });
        })
        .catch(() => {
            dispatch({
                type: ProductActionTypes.SET_PRODUCTS_ITEM_BY_ARTICLE_IS_LOADED,
                payload: true,
            });
        });
};

export const setProductsTypeFetch = (type: CatalogFetchType) => ({
    type: ProductActionTypes.SET_PRODUCTS_TYPE_FETCH,
    payload: type,
});

export const setCurrentPageProduct = (number: number) => ({
    type: ProductActionTypes.SET_PRODUCTS_CURRENT_PAGE,
    payload: number,
});

export const setLastSearchString = (string: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_LAST_SEARCH_STRING,
    payload: string,
});

export const setCatalogScroll = (scrollTop: number) => ({
    type: ProductActionTypes.SET_PRODUCTS_SCROLL,
    payload: scrollTop,
});

export const setFiltersCatalog = (filters: ProductsStateFilters) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG,
    payload: filters,
});

export const setFiltersPriceProduct = (price: { min: number; max: number }) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_PRICE,
    payload: price,
});

export const setFiltersConditionsProduct = (condition: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_CONDITIONS,
    payload: condition,
});

export const setFiltersCategoriesProduct = (category: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_CATEGORIES,
    payload: category,
});

export const setFiltersTypesProduct = (type: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_TYPES,
    payload: type,
});

export const setFiltersBrandsProduct = (brand: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_BRANDS,
    payload: brand,
});

export const setFiltersModelsProduct = (model: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_MODELS,
    payload: model,
});

export const setFiltersColorsProduct = (color: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_COLORS,
    payload: color,
});

export const setFiltersSexProduct = (sex: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SEX,
    payload: sex,
});

export const setFiltersAvailabilityProduct = (availability: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_AVAILABILITY,
    payload: availability,
});

export const setFiltersSizeProduct = (size: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SIZE,
    payload: size,
});

export const setFiltersSelectionProduct = (selectionId: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SELECTION,
    payload: selectionId,
});

export const setFiltersBoutiqueProduct = (boutique: boolean) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_BOUTIQUE,
    payload: boutique,
});

export const setFiltersGlassFrameProduct = (glass_frame: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_GLASS_FRAME,
    payload: glass_frame,
});

export const setFiltersPriceDropProduct = (price_drop: boolean) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_PRICE_DROP,
    payload: price_drop,
});

export const setFiltersSortProduct = (sort: string) => ({
    type: ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SORT,
    payload: sort,
});

export const clearProductsFilters = () => ({
    type: ProductActionTypes.CLEAR_PRODUCTS_FILTERS,
    payload: undefined,
});
