import $api from '@/http';
import { AVAILABILITY_IDS, CATALOG_PRODUCTS_LIMIT, SORT } from '@/constants/catalog';
import type { ICatalogFilters } from '@/types/catalog';
import type { GetCatalogResponse } from '@/types/api';
import type { Product, ProductPage } from '@/models/IProduct';
import type { IProductFilters } from '@/models/IProductFilters';

const MIN_PRICE_FROM = 1000;

const getCatalog = (filters: ICatalogFilters) => {
    const params = new URLSearchParams();

    if (filters.search) {
        params.append('search', filters.search);
    }

    const priceFrom = filters.price?.min ?? 0;
    const priceTo = filters.price?.max ?? 0;

    const preparedPriceFrom = priceFrom < MIN_PRICE_FROM ? MIN_PRICE_FROM : priceFrom;

    if (priceTo > 0) {
        params.append('price_from', String(preparedPriceFrom));
        params.append('price_to', String(priceTo));
    }

    if (preparedPriceFrom > 0 && !priceTo) {
        params.append('price_from', String(preparedPriceFrom));
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

    if (filters.boutique) {
        params.append('from_boutique', String(filters.boutique));
    }
    if (filters.price_drop) {
        params.append('price_drop', String(filters.price_drop));
    }

    if (filters.selection) {
        params.append('selections', filters.selection);
    }

    if (filters.availability && filters.availability.length > 0) {
        filters.availability.map((availability) => {
            params.append('availability', AVAILABILITY_IDS[availability]);
        });
    }

    params.append('sort_by', filters.sort ?? SORT.shuffle);
    params.append('page', String(filters.page ?? 1));
    params.append('page_size', String(filters.page_size ?? CATALOG_PRODUCTS_LIMIT));

    return $api.get<GetCatalogResponse>('/catalog_v2', { params });
};

const getCatalogFilters = () => $api.get<IProductFilters>('/filters_v2');

const getProductByArticle = (article: string) => $api.get<ProductPage>(`/product/${article}`);

const getProductSimilarByArticle = (article: string) => $api.get<{ items: Product[] }>(`/product/${article}/similar`);

export const catalogAPI = {
    getCatalog,
    getCatalogFilters,
    getProductByArticle,
    getProductSimilarByArticle,
};
