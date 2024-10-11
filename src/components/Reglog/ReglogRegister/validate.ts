import * as Yup from 'yup';

import {
    YUP_PASSWORD,
    YUP_REQUIRED_CHECKBOX,
    YUP_REQUIRED_MIN_MAX_EMAIL,
    YUP_REQUIRED_MIN_MAX_STRING,
} from '@/constants/validation';

export const SCHEMA = Yup.object({
    name: YUP_REQUIRED_MIN_MAX_STRING,
    lastname: YUP_REQUIRED_MIN_MAX_STRING,
    email: YUP_REQUIRED_MIN_MAX_EMAIL,
    password: YUP_PASSWORD,
    policyCheckbox: YUP_REQUIRED_CHECKBOX,
});
