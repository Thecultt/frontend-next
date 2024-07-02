export interface validateValues {
    name: string;
    middlename: string;
    lastname: string;
    dr: string;
}

interface validateErrors {
    name?: string;
    middlename?: string;
    lastname?: string;
    dr?: string;
}

export const validate = (values: validateValues) => {
    const errors: validateErrors = {};

    const defaultMin = 2;
    const defaultMax = 255;

    if (values.name) {
        if (values.name.length > defaultMax) {
            errors.name = `Не более ${defaultMax} символов`;
        }

        if (values.name.length < defaultMin) {
            errors.name = `Не менее ${defaultMin} символов`;
        }
    }

    if (values.middlename) {
        if (values.middlename.length > defaultMax) {
            errors.middlename = `Не более ${defaultMax} символов`;
        }

        if (values.middlename.length < defaultMin) {
            errors.middlename = `Не менее ${defaultMin} символов`;
        }
    }

    if (values.lastname) {
        if (values.lastname.length > defaultMax) {
            errors.lastname = `Не более ${defaultMax} символов`;
        }

        if (values.lastname.length < defaultMin) {
            errors.lastname = `Не менее ${defaultMin} символов`;
        }
    }

    return errors;
};
