import * as Yup from 'yup';

import { YUP_REQUIRED_MIN_MAX_STRING, YUP_NOT_REQUIRED_MIN_MAX_STRING } from '@/constants/validation';

export const SCHEMA = Yup.object({
    country: YUP_REQUIRED_MIN_MAX_STRING,
    city: YUP_REQUIRED_MIN_MAX_STRING,
    street: YUP_NOT_REQUIRED_MIN_MAX_STRING,
    house: YUP_NOT_REQUIRED_MIN_MAX_STRING,
    flat: YUP_NOT_REQUIRED_MIN_MAX_STRING,
    comment: YUP_NOT_REQUIRED_MIN_MAX_STRING,
});
