import { Product } from '@/models/IProduct';

export interface IStatus {
    status: string;
}

export interface GetCatalogResponse {
    total_pages: number;
    current_page: number;
    total_items: number;
    items: Product[];
}
