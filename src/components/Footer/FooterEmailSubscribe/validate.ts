export interface validateInfoValues {
    email: string;
    type: string;
}

interface validateInfoErrors {
    email?: string;
    type?: string;
}

const validate = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

    const defaultMin = 2;
    const defaultMax = 256;

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

    if (!values.type) {
        errors.type = 'Поле не может быть пустым';
    }

    return errors;
};

export default validate;
