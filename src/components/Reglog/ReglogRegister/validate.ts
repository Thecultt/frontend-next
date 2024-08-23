export interface validateValues {
    name: string;
    lastname: string;
    email: string;
    password: string;
    policyCheckbox: string;
    promoCheckbox: string;
}

interface validateErrors {
    name?: string;
    lastname?: string;
    email?: string;
    password?: string;
    policyCheckbox?: string;
    promoCheckbox?: string;
}

export const validate = (values: validateValues) => {
    const errors: validateErrors = {};

    const defaultMin = 2;
    const defaultMax = 100;

    if (!values.name) {
        errors.name = 'Поле не может быть пустым';
    } else if (values.name.length > defaultMax) {
        errors.name = `Не более ${defaultMax} символов`;
    } else if (values.name.length < defaultMin) {
        errors.name = `Не менее ${defaultMin} символов`;
    }

    if (!values.lastname) {
        errors.lastname = 'Поле не может быть пустым';
    } else if (values.lastname.length > defaultMax) {
        errors.lastname = `Не более ${defaultMax} символов`;
    } else if (values.lastname.length < defaultMin) {
        errors.lastname = `Не менее ${defaultMin} символов`;
    }

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

    if (!values.password) {
        errors.password = 'Поле не может быть пустым';
    } else if (/[А-Яа-яЁё]/i.test(values.password)) {
        errors.password = 'Пароль не может содержать кириллицу';
    } else if (values.password.length > defaultMax) {
        errors.password = `Не более ${defaultMax} символов`;
    } else if (values.password.length < defaultMin) {
        errors.password = `Не менее ${defaultMin} символов`;
    }

    if (!values.policyCheckbox) {
        errors.policyCheckbox = 'Поле не может быть пустым';
    }

    return errors;
};
