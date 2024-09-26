import { ConditionType } from '@/types/catalog';

export interface IModels {
    slug: string;
}

export interface IManufacturers {
    slug: string;
    models: { [key: string]: IModels } | null;
}

export interface ISubsubcategories {
    slug: string;
    manufacturers: { [key: string]: IManufacturers };
}

export interface IFiltersCategory {
    slug: string;
    subsubcategories: {
        [key: string]: ISubsubcategories;
    };
    size?: number[];
}

export interface IFiltersCategories {
    [category: string]: IFiltersCategory;
}

export interface IFiltersColors {
    [color: string]: {
        slug: string;
        hex: string;
    };
}

export interface IFiltersCondition {
    slug: string;
    condition: ConditionType;
}

export interface IFiltersGlassFrame {
    slug: string;
    frame: string;
}

export interface IFiltersSelections {
    [selectionId: string]: {
        slug: string;
        category: string;
    };
}

export interface IFiltersMetalType {
    type: string;
    slug: string;
}

export interface IProductFilters {
    categories: IFiltersCategories;
    colors: IFiltersColors;
    conditions: IFiltersCondition[];
    glass_frame: IFiltersGlassFrame[];
    max_price: number;
    min_price: number;
    selections: IFiltersSelections;
    jewelry_metal_type: IFiltersMetalType[];
}
