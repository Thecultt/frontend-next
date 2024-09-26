import * as Yup from 'yup';

export const EMAIL_REGEXP = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i);
export const PASSPORT_REGEXP = new RegExp(/\d{4}\s\d{6}/);

export const MIN_INPUT_SYMBOLS = 2;
export const MAX_INPUT_SYMBOLS = 256;

export const MIN_TEXTAREA_SYMBOLS = 2;
export const MAX_TEXTAREA_SYMBOLS = 1000;

export const REQUIRED_VALIDATION_MESSAGE = 'Поле не может быть пустым';
export const EMAIL_VALIDATION_MESSAGE = 'Некорректный email';

export const YUP_REQUIRED_STRING = Yup.string().required(REQUIRED_VALIDATION_MESSAGE);

export const YUP_REQUIRED_MIN_MAX_STRING = Yup.string()
    .required(REQUIRED_VALIDATION_MESSAGE)
    .min(MIN_INPUT_SYMBOLS, `Не менее ${MIN_INPUT_SYMBOLS} символов`)
    .max(MAX_INPUT_SYMBOLS, `Не более ${MAX_INPUT_SYMBOLS} символов`);

export const YUP_REQUIRED_MIN_MAX_EMAIL = Yup.string()
    .required(REQUIRED_VALIDATION_MESSAGE)
    .min(MIN_INPUT_SYMBOLS, `Не менее ${MIN_INPUT_SYMBOLS} символов`)
    .max(MAX_INPUT_SYMBOLS, `Не более ${MAX_INPUT_SYMBOLS} символов`)
    .matches(EMAIL_REGEXP, EMAIL_VALIDATION_MESSAGE);
