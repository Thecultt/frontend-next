import * as Yup from 'yup';

import {
    YUP_NOT_REQUIRED_MIN_MAX_STRING,
    YUP_NOT_REQUIRED_STRING,
    YUP_REQUIRED_MAX_STRING,
    YUP_REQUIRED_MIN_MAX_EMAIL,
    YUP_REQUIRED_MIN_MAX_STRING,
    YUP_REQUIRED_NUMBER,
} from '@/constants/validation';
import { JEWELRY_PASSPORT_SUM } from '@/constants/app';
import { DELIVERY_ITEM } from '@/constants/delivery';

interface GetSchemaParams {
    isJewelry: boolean;
    cartSum: number;
}

export const getSchema = ({ isJewelry, cartSum }: GetSchemaParams) =>
    Yup.object({
        email: YUP_REQUIRED_MIN_MAX_EMAIL,
        name: YUP_REQUIRED_MIN_MAX_STRING,
        phone: YUP_REQUIRED_MIN_MAX_STRING,
        passport:
            isJewelry && cartSum >= JEWELRY_PASSPORT_SUM
                ? YUP_REQUIRED_MIN_MAX_STRING
                : YUP_NOT_REQUIRED_MIN_MAX_STRING,
        country: YUP_REQUIRED_MIN_MAX_STRING,
        city: YUP_REQUIRED_MIN_MAX_STRING,
        delivery: YUP_REQUIRED_NUMBER,
        street: Yup.string().when('delivery', {
            is: (delivery: number) => delivery !== DELIVERY_ITEM.pickup.id,
            then: () => YUP_REQUIRED_MAX_STRING,
            otherwise: () => YUP_NOT_REQUIRED_STRING,
        }),
        house: Yup.string().when('delivery', {
            is: (delivery: number) => delivery !== DELIVERY_ITEM.pickup.id,
            then: () => YUP_REQUIRED_MAX_STRING,
            otherwise: () => YUP_NOT_REQUIRED_STRING,
        }),
        flat: YUP_NOT_REQUIRED_STRING,
        comment: YUP_NOT_REQUIRED_MIN_MAX_STRING,
        payment: YUP_REQUIRED_NUMBER,
    });
