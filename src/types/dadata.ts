import { Nullable } from './utils';

interface DaDataSuggestion<T> {
    value: string;
    unrestricted_value: string;
    data: T;
}

interface DaDataSuggestionsResponse<T extends object = object> {
    suggestions: Array<DaDataSuggestion<T>>;
}

export type DaDataDictionary = {
    [key: string]: unknown;
};

export interface DaDataCountry {
    code: string;
    alfa2: string;
    alfa3: string;
    name_short: string;
    name: string;
}

export type DaDataCountryResponse = DaDataSuggestionsResponse<DaDataCountry>;

export interface DaDataAddressMetro {
    name: string;
    line: string;
    distance: number;
}
export type DaDataAddressBeltwayHit = 'IN_MKAD' | 'OUT_MKAD' | 'IN_KAD' | 'OUT_KAD';
export interface DaDataAddress {
    area: Nullable<string>;
    area_fias_id: Nullable<string>;
    area_kladr_id: Nullable<string>;
    area_type: Nullable<string>;
    area_type_full: Nullable<string>;
    area_with_type: Nullable<string>;
    beltway_distance: Nullable<string>;
    beltway_hit: Nullable<DaDataAddressBeltwayHit>;
    block: Nullable<string>;
    block_type: Nullable<string>;
    block_type_full: Nullable<string>;
    federal_district: Nullable<string>;
    capital_marker: '0' | '1' | '2' | '3' | '4';
    city: Nullable<string>;
    city_area: Nullable<string>;
    city_district: Nullable<string>;
    city_district_fias_id: Nullable<string>;
    city_district_kladr_id: Nullable<string>;
    city_district_type: Nullable<string>;
    city_district_type_full: Nullable<string>;
    city_district_with_type: Nullable<string>;
    city_fias_id: Nullable<string>;
    city_kladr_id: Nullable<string>;
    city_type: Nullable<string>;
    city_type_full: Nullable<string>;
    city_with_type: Nullable<string>;
    country: string;
    country_iso_code: string;
    fias_id: string;
    fias_level: string;
    flat: Nullable<string>;
    flat_area: Nullable<string>;
    flat_price: null;
    flat_type: Nullable<string>;
    flat_type_full: Nullable<string>;
    flat_fias_id?: Nullable<string>;
    flat_cadnum?: null;
    geo_lat: Nullable<string>;
    geo_lon: Nullable<string>;
    geoname_id: Nullable<string>;
    history_values: Nullable<string[]>;
    house: Nullable<string>;
    house_fias_id: Nullable<string>;
    house_kladr_id: Nullable<string>;
    house_type: Nullable<string>;
    house_type_full: Nullable<string>;
    house_cadnum?: null;
    entrance?: null;
    floor?: null;
    kladr_id: string;
    okato: Nullable<string>;
    oktmo: Nullable<string>;
    postal_box: Nullable<string>;
    postal_code: Nullable<string>;
    qc: null;
    qc_complete: null;
    qc_geo: Nullable<'0' | '1' | '2' | '3' | '4' | '5'>;
    qc_house: null;
    region: string;
    region_fias_id: string;
    region_kladr_id: string;
    region_type: string;
    region_type_full: string;
    region_with_type: string;
    settlement: Nullable<string>;
    settlement_fias_id: Nullable<string>;
    settlement_kladr_id: Nullable<string>;
    settlement_type: Nullable<string>;
    settlement_type_full: Nullable<string>;
    settlement_with_type: Nullable<string>;
    source: Nullable<string>;
    square_meter_price?: Nullable<string>;
    street: Nullable<string>;
    street_fias_id: Nullable<string>;
    street_kladr_id: Nullable<string>;
    street_type: Nullable<string>;
    street_type_full: Nullable<string>;
    street_with_type: Nullable<string>;
    stead?: Nullable<string>;
    stead_fias_id?: Nullable<string>;
    stead_kladr_id?: Nullable<string>;
    stead_type?: Nullable<string>;
    stead_type_full?: Nullable<string>;
    stead_cadnum?: null;
    tax_office: Nullable<string>;
    tax_office_legal: Nullable<string>;
    timezone: Nullable<string>;
    unparsed_parts: null;
    fias_code: string;
    region_iso_code: string;
    fias_actuality_state: string;
    metro: Nullable<DaDataAddressMetro[]>;
    divisions?: unknown;
}
export type DaDataAddressBounds = 'country' | 'region' | 'area' | 'city' | 'settlement' | 'street' | 'house';

export type DaDataAddressResponse = DaDataSuggestionsResponse<DaDataAddress>;

export type DaDataBankType = 'BANK' | 'BANK_BRANCH' | 'NKO' | 'NKO_BRANCH' | 'RKC' | 'OTHER';
export type DaDataBankStatus = 'ACTIVE' | 'LIQUIDATING' | 'LIQUIDATED';

export interface DaDataBank {
    bic: string;
    swift: string;
    inn: string;
    kpp: string;
    registration_number: string;
    correspondent_account: string;
    name: {
        payment: string;
        full: null;
        short: string;
    };
    payment_city: string;
    opf: {
        type: DaDataBankType;
        full: null;
        short: null;
    };
    address: DaDataSuggestion<DaDataAddress>;
    state: {
        actuality_date: number;
        registration_date: number;
        liquidation_date: Nullable<number>;
        status: DaDataBankStatus;
    };
    okpo: null;
    phone: number;
    rkc: number;
}

export type DaDataBankResponse = DaDataSuggestionsResponse<DaDataBank>;
