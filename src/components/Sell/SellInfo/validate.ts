export interface validateInfoValues {
    category: string;
    brand: string;
    model: string;
    condition: string;
    defects: string;
    client_kit: string;
    size: string;
    price: string;
    bought_in_cultt: string;
}

interface validateInfoErrors {
    category?: string;
    brand?: string;
    model?: string;
    condition?: string;
    defects?: string;
    client_kit?: string;
    size?: string;
    price?: string;
    bought_in_cultt?: string;
}

const validate = (values: validateInfoValues) => {
    const errors: validateInfoErrors = {};

    const defaultMin = 2;
    const defaultMax = 256;

    if (!values.category) {
        errors.category = 'Поле не может быть пустым';
    }

    if (!values.brand) {
        errors.brand = 'Поле не может быть пустым';
    }

    // if (!values.condition) {
    // 	errors.condition = "Поле не может быть пустым";
    // }

    if (!values.defects) {
        errors.defects = 'Поле не может быть пустым';
    }

    if (!values.client_kit) {
        errors.client_kit = 'Поле не может быть пустым';
    }

    // if (!values.size) {
    // 	errors.size = "Поле не может быть пустым";
    // } else if (values.size.length > defaultMax) {
    // 	errors.size = `Не более ${defaultMax} символов`;
    // } else if (values.size.length < defaultMin) {
    // 	errors.size = `Не менее ${defaultMin} символов`;
    // }

    if (!values.price) {
        errors.price = 'Поле не может быть пустым';
    } else if (values.price.length > defaultMax) {
        errors.price = `Не более ${defaultMax} символов`;
    } else if (values.price.length < defaultMin) {
        errors.price = `Не менее ${defaultMin} символов`;
    }

    if (!values.bought_in_cultt) {
        errors.bought_in_cultt = 'Поле не может быть пустым';
    }

    return errors;
};

export default validate;
