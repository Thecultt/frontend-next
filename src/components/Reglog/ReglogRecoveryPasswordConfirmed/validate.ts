import * as Yup from 'yup';

import { YUP_PASSWORD } from '@/constants/validation';

export const SCHEMA = Yup.object({
    password: YUP_PASSWORD,
    password_repeat: YUP_PASSWORD.oneOf([Yup.ref('password')], 'Пароли не равны'),
});
