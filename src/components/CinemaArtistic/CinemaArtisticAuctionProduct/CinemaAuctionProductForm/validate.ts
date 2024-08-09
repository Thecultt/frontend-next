import * as Yup from 'yup';

import { REQUIRED_VALIDATION_MESSAGE, YUP_REQUIRED_STRING } from '@/constants/validation';

export enum AuctionFieldName {
    Fio = 'fio',
    Phone = 'phone',
    Bid = 'bid',
}

export interface IAuctionForm {
    [AuctionFieldName.Fio]: string;
    [AuctionFieldName.Phone]: string;
    [AuctionFieldName.Bid]: number | '';
}

export const INITIAL_VALUES: IAuctionForm = {
    [AuctionFieldName.Fio]: '',
    [AuctionFieldName.Phone]: '',
    [AuctionFieldName.Bid]: '',
};

export const getValidationSchema = (min: number) =>
    Yup.object().shape({
        [AuctionFieldName.Fio]: YUP_REQUIRED_STRING,
        [AuctionFieldName.Phone]: YUP_REQUIRED_STRING,
        [AuctionFieldName.Bid]: Yup.number()
            .min(
                min,
                'Пожалуйста, введите ставку заново: ваша ставка должна быть выше текущей ставки на 10 000 ₽ и более',
            )
            .required(REQUIRED_VALIDATION_MESSAGE),
    });
