import { Product } from '@/models/IProduct';
import { ISelection } from '@/models/ISelection';

export interface IStatus {
    status: string;
}

export interface GetCatalogResponse {
    total_pages: number;
    current_page: number;
    total_items: number;
    items: Product[];
}

export interface GetSelectionsResponse {
    selections: ISelection[];
}
