import * as Yup from 'yup';

import { YUP_REQUIRED_MIN_MAX_STRING } from '@/constants/validation';

export const SCHEMA = Yup.object({
    pasport: YUP_REQUIRED_MIN_MAX_STRING,
    bik: YUP_REQUIRED_MIN_MAX_STRING,
    inn: YUP_REQUIRED_MIN_MAX_STRING,
    rs: YUP_REQUIRED_MIN_MAX_STRING,
    issued_by: YUP_REQUIRED_MIN_MAX_STRING,
    issued_date: YUP_REQUIRED_MIN_MAX_STRING,
    issued_code: YUP_REQUIRED_MIN_MAX_STRING,
    place_of_birth: YUP_REQUIRED_MIN_MAX_STRING,
    dr: YUP_REQUIRED_MIN_MAX_STRING,
    citizenship: YUP_REQUIRED_MIN_MAX_STRING,
    registration_address: YUP_REQUIRED_MIN_MAX_STRING,
});
