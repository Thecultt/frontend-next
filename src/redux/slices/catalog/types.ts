import { Product } from '@/models/IProduct';

export interface ICatalogState {
    newProducts: Product[];
    newProductsIsLoaded: boolean;
}
