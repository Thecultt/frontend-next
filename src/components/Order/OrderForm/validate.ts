import { JEWELRY_PASSPORT_SUM } from '@/constants/app';
import { MIN_INPUT_SYMBOLS, MAX_INPUT_SYMBOLS, PASSPORT_REGEXP } from '@/constants/validation';

export interface Values {
    email: string;
    name: string;
    phone: string;
    country: string;
    city: string;
    delivery: string;
    street: string;
    house: string;
    flat: string;
    payment: string;
    passport: string;
    isJewelry: boolean;
    cartSum: number;
}

type Errors = { [key in keyof Values]?: string };

const validate = (values: Values) => {
    const errors: Errors = {};

    if (!values.email) {
        errors.email = 'Поле не может быть пустым';
    } else if (/[А-Яа-яЁё]/i.test(values.email) || /\s/.test(values.email)) {
        errors.email = 'Некорректный email';
    } else if (values.email.length > MAX_INPUT_SYMBOLS) {
        errors.email = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.email.length < MIN_INPUT_SYMBOLS) {
        errors.email = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.name) {
        errors.name = 'Поле не может быть пустым';
    } else if (values.name.length > MAX_INPUT_SYMBOLS) {
        errors.name = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.name.length < MIN_INPUT_SYMBOLS) {
        errors.name = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.phone) {
        errors.phone = 'Поле не может быть пустым';
    } else if (values.phone.length > MAX_INPUT_SYMBOLS) {
        errors.phone = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.phone.length < MIN_INPUT_SYMBOLS) {
        errors.phone = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.country) {
        errors.country = 'Поле не может быть пустым';
    } else if (values.country.length > MAX_INPUT_SYMBOLS) {
        errors.country = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.country.length < MIN_INPUT_SYMBOLS) {
        errors.country = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.city) {
        errors.city = 'Поле не может быть пустым';
    } else if (values.city.length > MAX_INPUT_SYMBOLS) {
        errors.city = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.city.length < MIN_INPUT_SYMBOLS) {
        errors.city = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
    }

    if (!values.delivery) {
        errors.delivery = 'Поле не может быть пустым';
    }

    // TODO Самовывоз в enum/const
    if (values.delivery !== 'Самовывоз') {
        if (!values.street) {
            errors.street = 'Поле не может быть пустым';
        }

        if (!values.house) {
            errors.house = 'Поле не может быть пустым';
        }
    }

    if (!values.payment) {
        errors.payment = 'Поле не может быть пустым';
    }

    if (values.isJewelry && values.cartSum >= JEWELRY_PASSPORT_SUM) {
        if (!values.passport) {
            errors.passport = 'Поле не может быть пустым';
        } else if (!PASSPORT_REGEXP.test(values.passport)) {
            errors.passport = 'Некорректный формат паспорта';
        }
    }

    return errors;
};

export default validate;
