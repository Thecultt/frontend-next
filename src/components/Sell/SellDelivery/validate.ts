export interface validateInfoValues {
    city: string;
    street: string;
    dom: string;
    flat: string;
}

interface validateInfoErrors {
    city?: string;
    street?: string;
    dom?: string;
    flat?: string;
}

const validate = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

    const defaultMin = 2;
    const defaultMax = 256;

    if (!values.city) {
        errors.city = 'Поле не может быть пустым';
    } else if (values.city.length > defaultMax) {
        errors.city = `Не более ${defaultMax} символов`;
    } else if (values.city.length < defaultMin) {
        errors.city = `Не менее ${defaultMin} символов`;
    }

    if (!values.street) {
        errors.street = 'Поле не может быть пустым';
    }

    if (!values.dom) {
        errors.dom = 'Поле не может быть пустым';
    }

    return errors;
};

export default validate;
