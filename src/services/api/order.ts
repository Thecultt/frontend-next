import $api from '@/http';
import { CheckPromoCodeResponse, CreateOrderRequest, CreateOrderResponse } from '@/types/api';

const checkPromoCode = (code: string) => $api.get<CheckPromoCodeResponse>(`/check_coupon/${code}`);

const createOrder = (body: CreateOrderRequest) => $api.post<CreateOrderResponse>('/create_order/', body);

// TODO any
const submitOrder = (orderId: number) => $api.post<any>('/submit_order/', { order_id: orderId });

export const orderAPI = {
    checkPromoCode,
    createOrder,
    submitOrder,
};
