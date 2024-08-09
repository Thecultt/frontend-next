import * as Yup from 'yup';

export const MIN_INPUT_SYMBOLS = 2;
export const MAX_INPUT_SYMBOLS = 1000;

export const REQUIRED_VALIDATION_MESSAGE = 'Поле не может быть пустым';

export const YUP_REQUIRED_STRING = Yup.string().required(REQUIRED_VALIDATION_MESSAGE);
