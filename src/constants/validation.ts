import * as Yup from 'yup';

export const EMAIL_REGEXP = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i);
export const PASSPORT_REGEXP = new RegExp(/\d{4}\s\d{6}/);
export const PASSWORD_REGEXP = new RegExp(/^[A-Za-z0-9!@#$%^&*()_+{}[\]:"'|\\,.<>?~-]*$/);

export const MIN_INPUT_SYMBOLS = 2;
export const MAX_INPUT_SYMBOLS = 256;

export const MIN_TEXTAREA_SYMBOLS = 2;
export const MAX_TEXTAREA_SYMBOLS = 1000;

export const REQUIRED_VALIDATION_MESSAGE = 'Поле не может быть пустым';
export const EMAIL_VALIDATION_MESSAGE = 'Некорректный email';

export const YUP_REQUIRED_STRING = Yup.string().required(REQUIRED_VALIDATION_MESSAGE);

export const YUP_NOT_REQUIRED_STRING = Yup.string()
    .notRequired()
    .max(MAX_INPUT_SYMBOLS, `Не более ${MAX_INPUT_SYMBOLS} символов`);

export const YUP_REQUIRED_MAX_STRING = Yup.string()
    .required(REQUIRED_VALIDATION_MESSAGE)
    .max(MAX_INPUT_SYMBOLS, `Не более ${MAX_INPUT_SYMBOLS} символов`);

export const YUP_REQUIRED_MIN_MAX_STRING = Yup.string()
    .required(REQUIRED_VALIDATION_MESSAGE)
    .min(MIN_INPUT_SYMBOLS, `Не менее ${MIN_INPUT_SYMBOLS} символов`)
    .max(MAX_INPUT_SYMBOLS, `Не более ${MAX_INPUT_SYMBOLS} символов`);

export const YUP_NOT_REQUIRED_MIN_MAX_STRING = Yup.string()
    .notRequired()
    .min(MIN_INPUT_SYMBOLS, `Не менее ${MIN_INPUT_SYMBOLS} символов`)
    .max(MAX_INPUT_SYMBOLS, `Не более ${MAX_INPUT_SYMBOLS} символов`);

export const YUP_REQUIRED_MIN_MAX_EMAIL = Yup.string()
    .required(REQUIRED_VALIDATION_MESSAGE)
    .min(MIN_INPUT_SYMBOLS, `Не менее ${MIN_INPUT_SYMBOLS} символов`)
    .max(MAX_INPUT_SYMBOLS, `Не более ${MAX_INPUT_SYMBOLS} символов`)
    .matches(EMAIL_REGEXP, EMAIL_VALIDATION_MESSAGE);

export const YUP_PASSWORD = Yup.string()
    .required(REQUIRED_VALIDATION_MESSAGE)
    .min(MIN_INPUT_SYMBOLS, `Не менее ${MIN_INPUT_SYMBOLS} символов`)
    .max(MAX_INPUT_SYMBOLS, `Не более ${MAX_INPUT_SYMBOLS} символов`)
    .matches(PASSWORD_REGEXP, 'Пароль не может содержать кириллицу или пробелы');

export const YUP_REQUIRED_CHECKBOX = Yup.boolean().oneOf([true], REQUIRED_VALIDATION_MESSAGE);

export const YUP_REQUIRED_NUMBER = Yup.number()
    .required(REQUIRED_VALIDATION_MESSAGE)
    .min(1, REQUIRED_VALIDATION_MESSAGE);
