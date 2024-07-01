export interface validateValues {
    passport: string;
    name: string;
    middlename: string;
    lastname: string;
    dr: string;
    bik: string;
    inn: string;
    rs: string;
    confirm: string;
}

interface validateErrors {
    passport?: string;
    name?: string;
    middlename?: string;
    lastname?: string;
    dr?: string;
    bik?: string;
    inn?: string;
    rs?: string;
    confirm?: string;
}

export const validate = (values: validateValues) => {
    const errors: validateErrors = {};

    const defaultMin = 2;
    const defaultMax = 255;

    if (!values.passport) {
        errors.passport = 'Поле не может быть пустым';
    } else if (values.passport.length > defaultMax) {
        errors.passport = `Не более ${defaultMax} символов`;
    } else if (values.passport.length < defaultMin) {
        errors.passport = `Не менее ${defaultMin} символов`;
    }

    if (!values.name) {
        errors.name = 'Поле не может быть пустым';
    } else if (values.name.length > defaultMax) {
        errors.name = `Не более ${defaultMax} символов`;
    } else if (values.name.length < defaultMin) {
        errors.name = `Не менее ${defaultMin} символов`;
    }

    if (!values.middlename) {
        errors.middlename = 'Поле не может быть пустым';
    } else if (values.middlename.length > defaultMax) {
        errors.middlename = `Не более ${defaultMax} символов`;
    } else if (values.middlename.length < defaultMin) {
        errors.middlename = `Не менее ${defaultMin} символов`;
    }

    if (!values.lastname) {
        errors.lastname = 'Поле не может быть пустым';
    } else if (values.lastname.length > defaultMax) {
        errors.lastname = `Не более ${defaultMax} символов`;
    } else if (values.lastname.length < defaultMin) {
        errors.lastname = `Не менее ${defaultMin} символов`;
    }

    if (!values.bik) {
        errors.bik = 'Поле не может быть пустым';
    } else if (values.bik.length > defaultMax) {
        errors.bik = `Не более ${defaultMax} символов`;
    } else if (values.bik.length < defaultMin) {
        errors.bik = `Не менее ${defaultMin} символов`;
    }

    if (!values.inn) {
        errors.inn = 'Поле не может быть пустым';
    } else if (values.inn.length > defaultMax) {
        errors.inn = `Не более ${defaultMax} символов`;
    } else if (values.inn.length < defaultMin) {
        errors.inn = `Не менее ${defaultMin} символов`;
    }

    if (!values.rs) {
        errors.rs = 'Поле не может быть пустым';
    } else if (values.rs.length > defaultMax) {
        errors.rs = `Не более ${defaultMax} символов`;
    } else if (values.rs.length < defaultMin) {
        errors.rs = `Не менее ${defaultMin} символов`;
    }

    if (!values.confirm) {
        errors.confirm = 'Поле не может быть пустым';
    }

    return errors;
};
