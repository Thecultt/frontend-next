import { GenderIdsType } from '@/types/catalog';

export interface ICabinetSettingFormInfoValues {
    name: string;
    middlename: string;
    lastname: string;
    dr: string;
    gender: GenderIdsType;
}

export interface ICabinetSettingFormContactValues {
    email: string;
    phone: string;
    username_telegram: string;
}

export interface ICabinetSettingFormAddressValues {
    country: string;
    city: string;
    street: string;
    house: string;
    flat: string;
    comment: string;
}

export interface ICabinetSettingFormPaymentValues {
    pasport: string;
    bik: string;
    inn: string;
    rs: string;
    issued_by: string;
    issued_date: string;
    issued_code: string;
    place_of_birth: string;
    dr: string;
    citizenship: string;
    registration_address: string;
}
