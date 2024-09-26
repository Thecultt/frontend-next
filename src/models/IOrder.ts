export interface OrderProduct {
    article: string;
    color: string;
    condition: string;
    images: string[];
    kit: any;
    manufacturer: string;
    model_name: string;
    price: number;
    is_jewelry?: boolean;
}

export interface Order {
    client_name: string;
    client_phone: string;
    cost: string;
    createdon: string | null;
    delivery_address: string;
    delivery_type: string;
    delivery_price: string;
    id: number;
    num: string;
    payment_type: string;
    products: OrderProduct[];
    status: string;
    status_description: string;
    success_status: boolean;
    yandex_split_link?: string;
}
