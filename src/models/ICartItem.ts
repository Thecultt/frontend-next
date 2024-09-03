export interface CartItem {
    id: number;
    checked: boolean;
    article: string;
    image: string;
    manufacturer: string;
    category: string;
    subcategory: string;
    name: string;
    price: number;
    old_price?: number | null;
    availability: number;
    is_trial: boolean;
    condition?: string | null;
    is_jewelry: boolean;
}
