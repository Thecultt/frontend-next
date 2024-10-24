import { AVAILABILITY, CONDITIONS, GENDERS, GENDER_IDS } from '@/constants/catalog';
import { SortType } from '@/redux/types/IProducts';

export type GenderType = (typeof GENDERS)[keyof typeof GENDERS];
export type GenderIdsType = (typeof GENDER_IDS)[keyof typeof GENDER_IDS];

export type ConditionType = (typeof CONDITIONS)[keyof typeof CONDITIONS];
export type AvailabilityType = (typeof AVAILABILITY)[keyof typeof AVAILABILITY];

export type CatalogPageParams = {
    category_slug?: string;
    subcategories_slug?: string;
    brand_slug?: string;
    selection_id?: string;
};

export interface ICatalogPageProps {
    params: CatalogPageParams;
    searchParams: { [key: string]: string | string[] | undefined };
}

export interface ICatalogFilters {
    price?: {
        min: number;
        max: number;
    };

    conditions?: ConditionType[];
    categories?: string[];
    types?: string[];
    brands?: string[];
    models?: string[];
    colors?: string[];
    genders?: GenderType[];
    availability?: AvailabilityType[];
    glass_frame?: string[];
    size?: number[];
    metal_types?: string[];

    selection?: string;
    brandnew?: boolean;
    price_drop?: boolean;
    sort?: SortType;
    page?: number;
    page_size?: number;
    search?: string;

    category_slug?: string;
    subcategories_slug?: string;
    brand_slug?: string;
}
