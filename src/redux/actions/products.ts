import { Dispatch } from 'redux';

import $api from '@/http';
import { Product, ProductPage } from '@/models/IProduct';
import { SORT } from '@/constants/catalog';
import { sendMindbox } from '@/functions/mindbox';
import { pushDataLayer } from '@/functions/pushDataLayer';
import { ICatalogFilters } from '@/types/catalog';
import { catalogAPI } from '@/services/api';

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

        const { total_pages, total_items, items } = await catalogAPI.getCatalog(filters);

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

export const viewProductPageWithData = (data: ProductPage) => async (dispatch: Dispatch<ProductTypes>) => {
    const similarData = await catalogAPI.getProductSimilarByArticle(data.article);

    if (similarData && similarData.items.length > 0) {
        dispatch({
            type: ProductActionTypes.SET_PRODUCTS_SIMILAR,
            payload: similarData.items,
        });
    }

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
