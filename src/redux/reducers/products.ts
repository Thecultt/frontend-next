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
        is_jewelry: false,
    },
    itemByArticleSimilar: [],
    itemByArticleIsLoaded: false,
    isFetchMore: false,
    isFetchPage: false,
    typeFetch: CatalogFetchType.Page,
    currentPage: 1,
    pageCount: 0,
    itemsCount: 0,
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
