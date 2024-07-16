export interface validateValues {
    fio: string;
    phone: string;
    email: string;
}

interface validateErrors {
    fio?: string;
    phone?: string;
    email?: string;
}

export const validate = (values: validateValues) => {
    const errors: validateErrors = {};

    const defaultMin = 2;
    const defaultMax = 100;

    if (!values.fio) {
        errors.fio = 'Поле не может быть пустым';
    } else if (values.fio.length > defaultMax) {
        errors.fio = `Не более ${defaultMax} символов`;
    } else if (values.fio.length < defaultMin) {
        errors.fio = `Не менее ${defaultMin} символов`;
    }

    if (!values.phone) {
        errors.phone = 'Поле не может быть пустым';
    } else if (values.phone.length > defaultMax) {
        errors.phone = `Не более ${defaultMax} символов`;
    } else if (values.phone.length < defaultMin) {
        errors.phone = `Не менее ${defaultMin} символов`;
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

    return errors;
};
