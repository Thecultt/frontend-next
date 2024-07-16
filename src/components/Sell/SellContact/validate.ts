export interface validateInfoValues {
    name: string;
    surname: string;
    email: string;
    phone: string;
    telegram: string;
}

interface validateInfoErrors {
    name?: string;
    surname?: string;
    email?: string;
    phone?: string;
    telegram?: string;
}

const validate = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

    const defaultMin = 2;
    const defaultMax = 256;

    if (!values.name) {
        errors.name = 'Поле не может быть пустым';
    } else if (values.name.length > defaultMax) {
        errors.name = `Не более ${defaultMax} символов`;
    } else if (values.name.length < defaultMin) {
        errors.name = `Не менее ${defaultMin} символов`;
    }

    if (!values.surname) {
        errors.surname = 'Поле не может быть пустым';
    } else if (values.surname.length > defaultMax) {
        errors.surname = `Не более ${defaultMax} символов`;
    } else if (values.surname.length < defaultMin) {
        errors.surname = `Не менее ${defaultMin} символов`;
    }

    if (!values.email) {
        errors.email = 'Поле не может быть пустым';
    } else if (/[А-Яа-яЁё]/i.test(values.email)) {
        errors.email = 'Некорректный email';
    } else if (values.email.length > defaultMax) {
        errors.email = `Не более ${defaultMax} символов`;
    } else if (values.email.length < defaultMin) {
        errors.email = `Не менее ${defaultMin} символов`;
    }

    if (!values.phone) {
        errors.phone = 'Поле не может быть пустым';
    } else if (values.phone.length > defaultMax) {
        errors.phone = `Не более ${defaultMax} символов`;
    } else if (values.phone.length < defaultMin) {
        errors.phone = `Не менее ${defaultMin} символов`;
    }

    return errors;
};

export default validate;
