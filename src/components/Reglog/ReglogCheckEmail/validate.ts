import * as Yup from 'yup';

import { YUP_REQUIRED_MIN_MAX_EMAIL } from '@/constants/validation';

export const SCHEMA = Yup.object({
    email: YUP_REQUIRED_MIN_MAX_EMAIL,
});
