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
    availability: number;
    is_trial: boolean;
}
