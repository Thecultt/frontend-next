import * as Yup from 'yup';

import { YUP_REQUIRED_MIN_MAX_STRING } from '@/constants/validation';
import { GENDER_IDS } from '@/constants/catalog';

export const SCHEMA = Yup.object({
    name: YUP_REQUIRED_MIN_MAX_STRING,
    lastname: YUP_REQUIRED_MIN_MAX_STRING,
    middlename: YUP_REQUIRED_MIN_MAX_STRING,
    dr: YUP_REQUIRED_MIN_MAX_STRING,
    gender: Yup.number().oneOf(Object.values(GENDER_IDS)),
});
