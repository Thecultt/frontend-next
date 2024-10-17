import { Nullable } from '@/types/utils';

export interface ConciergeProduct {
    id: number;
    title: string;
    price: string;
    description: string;
    image: string;
    brand: string;
    condition?: Nullable<string>;
}

export interface ConciergeCategory {
    products: ConciergeProduct[];
    brands: string[];
}
