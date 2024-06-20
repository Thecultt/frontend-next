export interface validateInfoValues {
    password: string;
}

interface validateInfoErrors {
    password?: string;
}

const validate = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

    const defaultMin = 2;
    const defaultMax = 100;

    if (!values.password) {
        errors.password = 'Поле не может быть пустым';
    } else if (/[А-Яа-яЁё]/i.test(values.password)) {
        errors.password = 'Пароль не может содержать кириллицу';
    } else if (values.password.length > defaultMax) {
        errors.password = `Не более ${defaultMax} символов`;
    } else if (values.password.length < defaultMin) {
        errors.password = `Не менее ${defaultMin} символов`;
    }

    return errors;
};

export default validate;
