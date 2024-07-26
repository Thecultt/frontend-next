export interface ProductsFiltersCategory {
    // subsubcategories: {Подкатегория: Бренд: Модели[]}
    subsubcategories: { [key: string]: { [key: string]: string[] } };
    size?: string[];
}
