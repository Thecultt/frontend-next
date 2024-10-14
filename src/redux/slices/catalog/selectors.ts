import { RootState } from '@/redux/store';

export const selectCatalogNewProducts = (state: RootState) => state.catalog.newProducts;
export const selectCatalogNewProductsIsLoaded = (state: RootState) => state.catalog.newProductsIsLoaded;
