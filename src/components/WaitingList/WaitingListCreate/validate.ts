import { CATEGORY_NAMES } from '@/constants/catalog';

export interface validateValues {
    email: string;
    category: string;
    type: string;
    model: string;
    brand: string;
    size: string;
}

interface validateErrors {
    email?: string;
    category?: string;
    type?: string;
    model?: string;
    brand?: string;
    size?: string;
}

export const validate = (values: validateValues) => {
    const errors: validateErrors = {};

    const defaultMin = 2;
    const defaultMax = 100;

    if (!values.email) {
        errors.email = 'Поле не может быть пустым';
    } else if (/[А-Яа-яЁё]/i.test(values.email)) {
        errors.email = 'Некорректный email';
    } else if (/\s/.test(values.email)) {
        errors.email = 'Некорректный email';
    } else if (values.email.length > defaultMax) {
        errors.email = `Не более ${defaultMax} символов`;
    } else if (values.email.length < defaultMin) {
        errors.email = `Не менее ${defaultMin} символов`;
    }

    if (!values.category) {
        errors.category = 'Поле не может быть пустым';
    }

    if ([CATEGORY_NAMES.accessories, CATEGORY_NAMES.shoes].includes(values.category) && !values.type) {
        errors.type = 'Поле не может быть пустым';
    }

    if (values.category === CATEGORY_NAMES.bags && !values.model) {
        errors.model = 'Поле не может быть пустым';
    }

    if (
        [CATEGORY_NAMES.bags, CATEGORY_NAMES.shoes, CATEGORY_NAMES.accessories].includes(values.category) &&
        !values.brand
    ) {
        errors.brand = 'Поле не может быть пустым';
    }

    if (values.category === CATEGORY_NAMES.shoes && !values.size) {
        errors.size = 'Поле не может быть пустым';
    }

    return errors;
};
