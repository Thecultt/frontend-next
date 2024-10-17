import * as Yup from 'yup';

import { YUP_REQUIRED_MIN_MAX_EMAIL, YUP_NOT_REQUIRED_MIN_MAX_STRING } from '@/constants/validation';

export const SCHEMA = Yup.object({
    email: YUP_REQUIRED_MIN_MAX_EMAIL,
    phone: YUP_NOT_REQUIRED_MIN_MAX_STRING,
    username_telegram: YUP_NOT_REQUIRED_MIN_MAX_STRING,
});
