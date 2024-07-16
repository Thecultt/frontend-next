export interface BuyerTheCulttProduct {
    id: number;
    title: string;
    price: string;
    description: string;
    image: string;
    brand: string;
}

export interface BuyerTheCulttCategory {
    products: BuyerTheCulttProduct[];
    brands: string[];
}
