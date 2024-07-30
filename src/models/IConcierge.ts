export interface ConciergeProduct {
    id: number;
    title: string;
    price: string;
    description: string;
    image: string;
    brand: string;
}

export interface ConciergeCategory {
    products: ConciergeProduct[];
    brands: string[];
}
