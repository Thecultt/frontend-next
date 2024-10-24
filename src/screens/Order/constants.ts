import { PAYMENT_ITEM } from '@/constants/pay';

import { IOrderFormValues } from './types';

export const INITIAL_VALUES: IOrderFormValues = {
    email: '',
    name: '',
    phone: '',
    passport: '',
    promo: false,
    country: '',
    city: '',
    delivery: 0,
    street: '',
    house: '',
    flat: '',
    comment: '',
    payment: PAYMENT_ITEM.card.id,
};
