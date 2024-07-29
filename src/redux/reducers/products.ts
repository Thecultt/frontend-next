import { SORT } from '@/constants/catalog';
import { ProductsState, ProductTypes, ProductActionTypes, CatalogFetchType } from '../types/IProducts';

const initialState: ProductsState = {
    items: [],
    isLoaded: false,
    itemByArticle: {
        id: 0,
        article: '',
        price: 0,
        old_price: 0,
        store_price: 0,
        price_drop: false,
        condition: '',
        manufacturer: '',
        name: '',
        availability: 0,
        category: '',
        images: [],
        description: '',
        gender: '',
        color: '',
        subcategory: '',
        is_trial: false,
        from_boutique: false,
        from_parnter: false,
        nuances: '',
        num_of_favorites: 0,
        external_material: '',
        lining_material: '',
        kit: '',
        model_height: '',
        length: '',
        width: '',
        height: '',
        handle_length: '',
        strap_length: '',
        leather_type: '',
        bag_year: '',
        brand_size: '',
        hardware: '',
        insole_length: '',
        heel_height: '',
        shoe_size: '',
        size: '',
        style: '',
        lens_type: '',
        frame_type: '',
        glasses_sizes: '',
        glass_frame: '',
        diameter: '',
        scarf_composition: '',
        ring_size: '',
        jewelry_material: '',
        reference_number_clock: '',
        case_material_clock: '',
        bracelet_material_clock: '',
        dial_color_clock: '',
        movement_type_clock: '',
        country_of_origin_clock: '',
        waterproof_clock: '',
        branded_box_clock: '',
        documents_clock: '',
    },
    itemByArticleSimilar: [],
    itemByArticleIsLoaded: false,
    isFetchMore: false,
    isFetchPage: false,
    typeFetch: CatalogFetchType.Page,
    currentPage: 1,
    pageCount: 0,
    itemsCount: 0,
    filters: {
        isParse: false,
        search: '',
        price: { min: 0, max: 0 },
        conditions: {},
        categories: {},
        types: {},
        brands: {},
        models: {},
        colors: {},
        sex: {},
        availability: {},
        size: {},
        selection: null,
        boutique: false,
        price_drop: false,
        glass_frame: {},
        sort: SORT.a,
    },
    lastSearchString: '',
    catalogScroll: 0,
};

const products = (state = initialState, action: ProductTypes): ProductsState => {
    if (action.type === ProductActionTypes.SET_PRODUCTS_ITEMS) {
        return {
            ...state,
            items: action.payload,
            isLoaded: true,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_ITEM_BY_ARTICLE) {
        return {
            ...state,
            itemByArticle: action.payload.data,
            itemByArticleSimilar: action.payload.similar,
            itemByArticleIsLoaded: true,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_ITEM_BY_ARTICLE_IS_LOADED) {
        return {
            ...state,
            itemByArticleIsLoaded: action.payload,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_ITEMS_MORE) {
        return {
            ...state,
            items: [...state.items, ...action.payload],
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_ITEMS_PAGE) {
        return {
            ...state,
            items: action.payload,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_IS_LOADED) {
        return {
            ...state,
            isLoaded: action.payload,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_IS_FETCH_MORE) {
        return {
            ...state,
            isFetchMore: action.payload,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_IS_FETCH_PAGE) {
        return {
            ...state,
            isFetchPage: action.payload,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_TYPE_FETCH) {
        return {
            ...state,
            typeFetch: action.payload,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_CURRENT_PAGE) {
        return {
            ...state,
            currentPage: action.payload,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_PAGE_COUNT) {
        return {
            ...state,
            pageCount: action.payload,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_ITEMS_COUNT) {
        return {
            ...state,
            itemsCount: action.payload,
        };
    }

    // filters
    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG) {
        return {
            ...state,
            filters: action.payload,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SEARCH) {
        return {
            ...state,
            filters: {
                ...state.filters,
                search: action.payload,
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_PRICE) {
        return {
            ...state,
            filters: {
                ...state.filters,
                price: action.payload,
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_CONDITIONS) {
        if (state.filters.conditions[action.payload]) {
            delete state.filters.conditions[action.payload];

            return {
                ...state,
                currentPage: 1,
            };
        }

        return {
            ...state,
            filters: {
                ...state.filters,
                conditions: {
                    ...state.filters.conditions,
                    [action.payload]: action.payload,
                },
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_CATEGORIES) {
        if (state.filters.categories[action.payload]) {
            delete state.filters.categories[action.payload];

            return {
                ...state,
                currentPage: 1,
            };
        }

        return {
            ...state,
            filters: {
                ...state.filters,
                categories: {
                    ...state.filters.categories,
                    [action.payload]: action.payload,
                },
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_TYPES) {
        if (state.filters.types[action.payload]) {
            delete state.filters.types[action.payload];

            return {
                ...state,
                currentPage: 1,
            };
        }

        return {
            ...state,
            filters: {
                ...state.filters,
                types: {
                    ...state.filters.types,
                    [action.payload]: action.payload,
                },
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_BRANDS) {
        if (state.filters.brands[action.payload]) {
            delete state.filters.brands[action.payload];

            return {
                ...state,
                currentPage: 1,
            };
        }

        return {
            ...state,
            filters: {
                ...state.filters,
                brands: {
                    ...state.filters.brands,
                    [action.payload]: action.payload,
                },
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_MODELS) {
        if (state.filters.models[action.payload]) {
            delete state.filters.models[action.payload];

            return {
                ...state,
                currentPage: 1,
            };
        }

        return {
            ...state,
            filters: {
                ...state.filters,
                models: {
                    ...state.filters.models,
                    [action.payload]: action.payload,
                },
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_COLORS) {
        if (state.filters.colors[action.payload]) {
            delete state.filters.colors[action.payload];

            return {
                ...state,
                currentPage: 1,
            };
        }

        return {
            ...state,
            filters: {
                ...state.filters,
                colors: {
                    ...state.filters.colors,
                    [action.payload]: action.payload,
                },
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SEX) {
        if (state.filters.sex[action.payload]) {
            delete state.filters.sex[action.payload];

            return {
                ...state,
                currentPage: 1,
            };
        }

        return {
            ...state,
            filters: {
                ...state.filters,
                sex: {
                    ...state.filters.sex,
                    [action.payload]: action.payload,
                },
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_AVAILABILITY) {
        if (state.filters.availability[action.payload]) {
            delete state.filters.availability[action.payload];

            return {
                ...state,
                currentPage: 1,
            };
        }

        // return {
        // 	...state,
        // 	filters: {
        // 		...state.filters,
        // 		availability: { [action.payload]: action.payload }
        // 	}
        // };

        return {
            ...state,
            filters: {
                ...state.filters,
                availability: {
                    ...state.filters.availability,
                    [action.payload]: action.payload,
                },
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SIZE) {
        if (state.filters.size[action.payload]) {
            delete state.filters.size[action.payload];

            return {
                ...state,
                currentPage: 1,
            };
        }

        return {
            ...state,
            filters: {
                ...state.filters,
                size: {
                    ...state.filters.size,
                    [action.payload]: action.payload,
                },
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SELECTION) {
        return {
            ...state,
            filters: {
                ...state.filters,
                selection: action.payload === state.filters.selection ? null : action.payload,
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_GLASS_FRAME) {
        if (state.filters.glass_frame[action.payload]) {
            delete state.filters.glass_frame[action.payload];

            return {
                ...state,
                currentPage: 1,
            };
        }

        return {
            ...state,
            filters: {
                ...state.filters,
                glass_frame: {
                    ...state.filters.glass_frame,
                    [action.payload]: action.payload,
                },
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_BOUTIQUE) {
        return {
            ...state,
            filters: {
                ...state.filters,
                boutique: action.payload,
                conditions: {},
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_PRICE_DROP) {
        return {
            ...state,
            filters: {
                ...state.filters,
                price_drop: action.payload,
                boutique: false,
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_FILTERS_CATALOG_SORT) {
        return {
            ...state,
            currentPage: 1,
            filters: {
                ...state.filters,
                sort: action.payload,
            },
        };
    }

    if (action.type === ProductActionTypes.CLEAR_PRODUCTS_FILTERS) {
        return {
            ...state,
            filters: {
                isParse: true,
                search: '',
                price: { min: 0, max: 0 },
                conditions: {},
                categories: {},
                types: {},
                brands: {},
                models: {},
                colors: {},
                sex: {},
                availability: {},
                size: {},
                selection: null,
                boutique: false,
                price_drop: false,
                glass_frame: {},
                sort: SORT.a,
            },
            currentPage: 1,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_LAST_SEARCH_STRING) {
        return {
            ...state,
            lastSearchString: action.payload,
        };
    }

    if (action.type === ProductActionTypes.SET_PRODUCTS_SCROLL) {
        return {
            ...state,
            catalogScroll: action.payload,
        };
    }

    return state;
};

export default products;
