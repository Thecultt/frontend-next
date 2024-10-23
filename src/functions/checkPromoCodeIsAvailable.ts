import { PROMOCODE_NOT_AVAILABLE_PAYMENTS } from '@/constants/pay';
import { IPromoCode } from '@/types/order';

export const checkPromoCodeIsAvailable = (promoCode: IPromoCode | null, currentPayment: number) =>
    !!promoCode && !PROMOCODE_NOT_AVAILABLE_PAYMENTS.includes(currentPayment);
