import { Dispatch } from 'redux';

import $api from '@/http';
import { Product, ProductPage } from '@/models/IProduct';
import { AVAILABILITY_IDS, SORT } from '@/constants/catalog';
import { sendMindbox } from '@/functions/mindbox';
import { pushDataLayer } from '@/functions/pushDataLayer';
import { ICatalogFilters } from '@/types/catalog';

import { CatalogFetchType, ProductActionTypes, ProductTypes } from '../types/IProducts';

export const fetchFirstProductsCatalog = () => async (dispatch: Dispatch<ProductTypes>) => {
    const {
        data: { total_pages, total_items, items },
    } = await $api.get<{
        total_pages: number;
        current_page: number;
        total_items: number;
        items: Product[];
    }>(`/catalog_v2?availability=1&sort_by=${SORT.a}`);

    // Measure product views / impressions
    pushDataLayer('view_item_list', {
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
    (filters: ICatalogFilters, typeFetch: CatalogFetchType) => async (dispatch: Dispatch<ProductTypes>) => {
        dispatch({
            type:
                typeFetch === CatalogFetchType.More
                    ? ProductActionTypes.SET_PRODUCTS_IS_FETCH_MORE
                    : ProductActionTypes.SET_PRODUCTS_IS_FETCH_PAGE,
            payload: true,
        });

        const params = new URLSearchParams();

        if (filters.search) {
            params.append('search', filters.search);
        }

        if (filters.price?.max !== 0) {
            params.append('price_from', String(filters.price?.min));
            params.append('price_to', String(filters.price?.max));
        }

        if (filters.price?.min !== 0 && filters.price?.max === 0) {
            params.append('price_from', String(filters.price.min));
        }

        if (filters.category_slug) {
            params.append('category_slug', filters.category_slug);
        } else {
            filters.categories?.map((categories) => params.append('category', categories));
        }

        if (filters.brand_slug) {
            params.append('manufacturer_slug', filters.brand_slug);
        } else {
            filters.brands?.map((brand) => params.append('manufacturer', brand));
        }

        filters.conditions?.map((condition) => params.append('conditions', condition));
        filters.types?.map((type) => params.append('subcategories', type));
        filters.models?.map((model) => params.append('model_names', model));
        filters.colors?.map((color) => params.append('color', color));
        filters.genders?.map((gender) => params.append('genders', gender));
        filters.glass_frame?.map((glass_frame) => params.append('glass_frame', glass_frame));
        filters.size?.map((size) => params.append('size', size.toString()));

        if (filters.availability && filters.availability.length > 0) {
            filters.availability.map((availability) => {
                params.append('availability', AVAILABILITY_IDS[availability]);
            });
        }

        if (filters.boutique) {
            params.append('from_boutique', String(filters.boutique));
        }
        if (filters.price_drop) {
            params.append('price_drop', String(filters.price_drop));
        }
        if (filters.selection) {
            params.append('selections', filters.selection);
        }

        params.append('sort_by', filters.sort ?? SORT.shuffle);
        params.append('page', String(filters.page));

        const {
            data: { total_pages, total_items, items },
        } = await $api.get<{
            total_pages: number;
            current_page: number;
            total_items: number;
            items: Product[];
        }>(`/catalog_v2`, { params });

        pushDataLayer('view_item_list', {
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

            pushDataLayer('view_item', {
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
