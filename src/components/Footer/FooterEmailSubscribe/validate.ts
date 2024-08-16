import * as Yup from 'yup';

import { YUP_REQUIRED_MIN_MAX_EMAIL, YUP_REQUIRED_STRING } from '@/constants/validation';

export interface IFormValues {
    email: string;
    type: string;
}

export const INITIAL_VALUES: IFormValues = {
    email: '',
    type: '',
};

export enum FormUserType {
    Seller = 'Prodavec',
    Buyer = 'Pokupatel',
}

export const SCHEMA = Yup.object().shape({
    email: YUP_REQUIRED_MIN_MAX_EMAIL,
    type: YUP_REQUIRED_STRING,
});
