export interface validateInfoValues {
    link: string;
}

interface validateInfoErrors {
    link?: string;
}

const validate = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

    const defaultMin = 2;
    const defaultMax = 256;

    if (!values.link) {
        errors.link = 'Поле не может быть пустым';
    } else if (values.link.length > defaultMax) {
        errors.link = `Не более ${defaultMax} символов`;
    } else if (values.link.length < defaultMin) {
        errors.link = `Не менее ${defaultMin} символов`;
    }

    return errors;
};

export default validate;
