export interface validateInfoValues {
    phone: string;
    name: string;
}

interface validateInfoErrors {
    phone?: string;
    name?: string;
}

const validate = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

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
    }

    return errors;
};

export default validate;
