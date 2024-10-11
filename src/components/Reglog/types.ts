export interface ICheckEmailFormValues {
    email: string;
}

export interface ILoginFormValues {
    password: string;
}

export interface IRegisterFormValues {
    name: string;
    lastname: string;
    email: string;
    password: string;
    policyCheckbox: boolean;
    promoCheckbox: boolean;
}

export interface IRecoveryPasswordFormValues {
    password: string;
    password_repeat: string;
}
