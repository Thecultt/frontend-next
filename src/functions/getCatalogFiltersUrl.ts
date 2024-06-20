import qs from 'qs';
import { SortType } from '@/redux/types/IProducts';
import { APP_ROUTE } from '@/constants/routes';

interface IUrlFilters {
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    conditions?: string[];
    categories?: string[];
    types?: string[];
    brands?: string[];
    models?: string[];
    colors?: string[];
    sex?: string[];
    availability?: string[];
    size?: string[];
    selection?: number;
    glass_frame?: string[];
    page?: number;
    boutique?: boolean;
    price_drop?: boolean;
    sort?: SortType;
}

export const getCatalogFiltersUrl = (filters: IUrlFilters) => {
    const url = qs.stringify(filters, {
        arrayFormat: 'repeat',
        skipNulls: true,
    });
    return `${APP_ROUTE.catalog}?${url}`;
};
