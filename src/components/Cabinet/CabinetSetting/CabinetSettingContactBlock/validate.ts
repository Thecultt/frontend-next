export interface validateValues {
    phone: string;
    username_telegram: string;
}

interface validateErrors {
    phone?: string;
    username_telegram?: string;
}

export const validate = (values: validateValues) => {
    const errors: validateErrors = {};

    const defaultMin = 2;
    const defaultMax = 255;

    if (values.phone) {
        if (values.phone.length > defaultMax) {
            errors.phone = `Не более ${defaultMax} символов`;
        }
        if (values.phone.length < defaultMin) {
            errors.phone = `Не менее ${defaultMin} символов`;
        }
    }

    if (values.username_telegram) {
        if (values.username_telegram.length > defaultMax) {
            errors.username_telegram = `Не более ${defaultMax} символов`;
        }
        if (values.username_telegram.length < defaultMin) {
            errors.username_telegram = `Не менее ${defaultMin} символов`;
        }
    }

    return errors;
};
