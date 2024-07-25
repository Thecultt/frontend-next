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

export interface ProductsFiltersCategory {
    slug: string;
    subsubcategories: {
        [key: string]: ISubsubcategories;
    };
    size?: string[];
}
