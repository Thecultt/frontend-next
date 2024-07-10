import { MIN_INPUT_SYMBOLS, MAX_INPUT_SYMBOLS } from '@/constants/validation';

export interface Values {
    email: string;
    name: string;
    phone: string;
    contry: string;
    city: string;
    delivery: string;
    street: string;
    house: string;
    flat: string;
    payment: string;
}

interface Errors {
    email?: string;
    name?: string;
    phone?: string;
    contry?: string;
    city?: string;
    delivery?: string;
    street?: string;
    house?: string;
    flat?: string;
    payment?: string;
}

const validate = (values: Values) => {
    const errors: Errors = {};

    if (!values.email) {
        errors.email = 'Поле не может быть пустым';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(values.email)) {
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

    if (!values.contry) {
        errors.contry = 'Поле не может быть пустым';
    } else if (values.contry.length > MAX_INPUT_SYMBOLS) {
        errors.contry = `Не более ${MAX_INPUT_SYMBOLS} символов`;
    } else if (values.contry.length < MIN_INPUT_SYMBOLS) {
        errors.contry = `Не менее ${MIN_INPUT_SYMBOLS} символов`;
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

    if (!values.street) {
        errors.street = 'Поле не может быть пустым';
    }

    if (!values.house) {
        errors.house = 'Поле не может быть пустым';
    }

    if (!values.payment) {
        errors.payment = 'Поле не может быть пустым';
    }

    return errors;
};

export default validate;
