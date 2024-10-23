import { CheckPromoCodeResponse } from './api';

export interface IPromoCode extends CheckPromoCodeResponse {
    name: string;
}

export interface IOrderCreateData {
    isLoggedIn: boolean;

    email: string;
    name: string;
    phone: string;
    passport_data?: string;

    country: string;
    city: string;
    street?: string;
    home?: string;
    room?: string;
    comment?: string;

    products: number[];

    delivery_type: number;
    payment_type: number;

    coupon_id: number;
}
