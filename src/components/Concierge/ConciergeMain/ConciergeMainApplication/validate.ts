export interface validateValues {
    name: string;
    phone: string;
    comment: string;
}

interface validateErrors {
    name?: string;
    phone?: string;
    comment?: string;
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

    if (!values.phone) {
        errors.phone = 'Поле не может быть пустым';
    } else if (values.phone.length > defaultMax) {
        errors.phone = `Не более ${defaultMax} символов`;
    } else if (values.phone.length < defaultMin) {
        errors.phone = `Не менее ${defaultMin} символов`;
    }

    if (!values.comment) {
        errors.comment = 'Поле не может быть пустым';
    } else if (values.comment.length > defaultMax) {
        errors.comment = `Не более ${defaultMax} символов`;
    } else if (values.comment.length < defaultMin) {
        errors.comment = `Не менее ${defaultMin} символов`;
    }

    return errors;
};
