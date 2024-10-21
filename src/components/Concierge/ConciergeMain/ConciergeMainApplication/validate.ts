import * as Yup from 'yup';

import { YUP_REQUIRED_MIN_MAX_STRING, YUP_NOT_REQUIRED_MIN_MAX_STRING } from '@/constants/validation';

export interface IConciergeMainApplicationFormValues {
    name: string;
    phone: string;
    comment: string;
}

export const INITIAL_VALUES: IConciergeMainApplicationFormValues = {
    name: '',
    phone: '',
    comment: '',
};

export const SCHEMA = Yup.object({
    name: YUP_REQUIRED_MIN_MAX_STRING,
    phone: YUP_REQUIRED_MIN_MAX_STRING,
    comment: YUP_NOT_REQUIRED_MIN_MAX_STRING,
});
