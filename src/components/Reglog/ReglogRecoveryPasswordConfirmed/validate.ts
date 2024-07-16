export interface validateValues {
    password: string;
    password_repeat: string;
}

interface validateErrors {
    password?: string;
    password_repeat?: string;
}

export const validate = (values: validateValues) => {
    const errors: validateErrors = {};

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

    if (!values.password_repeat) {
        errors.password_repeat = 'Поле не может быть пустым';
    } else if (values.password !== values.password_repeat) {
        errors.password_repeat = 'Пароли не равны';
    }

    return errors;
};
