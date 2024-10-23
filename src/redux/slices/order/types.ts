import { IOrderFormValues } from '@/screens/Order/types';
import { IPromoCode } from '@/types/order';

export interface IOrderState {
    deliveryPrice: number;

    promoCode: IPromoCode | null;
    promoCodeIsLoading: boolean;
    promoCodeError: string;

    createOrderIsLoading: boolean;
    submitOrderIsLoading: boolean;

    tempForm: IOrderFormValues | null;
}
