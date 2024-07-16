import { Order } from '@/models/IOrder';

export interface OrderState {
    promocode: {
        isSend: boolean;

        isActive: boolean;
        isError: boolean;

        id: number;

        fromSum: number;

        name: string;
        saleSum: number;

        errorMessage: string;
    };

    currentDelivery: {
        title: string;
        price: number;
        id: number;
    };

    sum: {
        products: number;
        delivery: number;
    };

    globalCountrys: {
        title: string;
        value: string;
    }[];
    globalCitys: {
        title: string;
        value: string;
    }[];
    globalStreets: {
        title: string;
        value: string;
    }[];

    address: {
        country: {
            title: string;
            value: string;
        };
        city: {
            title: string;
            value: string;
        };
        street: {
            title: string;
            value: string;
        };
    };

    order: Order;
    isLoadedOrder: boolean;

    isValid: boolean;
}

export enum OrderStateActionTypes {
    SET_ORDER_PROMOCODE_IS_SEND = 'SET_ORDER_PROMOCODE_IS_SEND',
    SET_ORDER_PROMOCODE_IS_ACTIVE = 'SET_ORDER_PROMOCODE_IS_ACTIVE',
    SET_ORDER_PROMOCODE_IS_ERROR = 'SET_ORDER_PROMOCODE_IS_ERROR',
    SET_ORDER_PROMOCODE_ID = 'SET_ORDER_PROMOCODE_ID',
    SET_ORDER_PROMOCODE_FROM_SUM = 'SET_ORDER_PROMOCODE_FROM_SUM',
    SET_ORDER_PROMOCODE_NAME = 'SET_ORDER_PROMOCODE_NAME',
    SET_ORDER_PROMOCODE_SALE_SUM = 'SET_ORDER_PROMOCODE_SALE_SUM',
    SET_ORDER_PROMOCODE_ERROR_MESSAGE = 'SET_ORDER_PROMOCODE_ERROR_MESSAGE',

    SET_ORDER_CURRENT_DELIVERY = 'SET_ORDER_CURRENT_DELIVERY',

    SET_ORDER_SUM_PRODUCTS = 'SET_ORDER_SUM_PRODUCTS',
    SET_ORDER_SUM_DELIVERY = 'SET_ORDER_SUM_DELIVERY',

    SET_ORDER_GLOBAL_COUNTRYS = 'SET_ORDER_GLOBAL_COUNTRYS',
    SET_ORDER_GLOBAL_CITYS = 'SET_ORDER_GLOBAL_CITYS',
    SET_ORDER_GLOBAL_STREETS = 'SET_ORDER_GLOBAL_STREETS',

    SET_ORDER_ADDRESS_COUNTRY = 'SET_ORDER_ADDRESS_COUNTRY',
    SET_ORDER_ADDRESS_CITY = 'SET_ORDER_ADDRESS_CITY',
    SET_ORDER_ADDRESS_STREET = 'SET_ORDER_ADDRESS_STREET',

    SET_ORDER_ID_ORDER = 'SET_ORDER_ID_ORDER',

    SET_ORDER_ORDER = 'SET_ORDER_ORDER',
    SET_ORDER_IS_LOADED_ORDER = 'SET_ORDER_IS_LOADED_ORDER',

    SET_ORDER_IS_VALID = 'SET_ORDER_IS_VALID',
}

interface setOrderPromocodeIsSend {
    type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_SEND;
    payload: boolean;
}

interface setOrderPromocodeIsActive {
    type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_ACTIVE;
    payload: boolean;
}

interface setOrderPromocodeIsError {
    type: OrderStateActionTypes.SET_ORDER_PROMOCODE_IS_ERROR;
    payload: boolean;
}

interface setOrderPromocodeId {
    type: OrderStateActionTypes.SET_ORDER_PROMOCODE_ID;
    payload: number;
}

interface setOrderPromocodeFromSum {
    type: OrderStateActionTypes.SET_ORDER_PROMOCODE_FROM_SUM;
    payload: number;
}

interface setOrderPromocodeName {
    type: OrderStateActionTypes.SET_ORDER_PROMOCODE_NAME;
    payload: string;
}

interface setOrderPromocodeSaleSum {
    type: OrderStateActionTypes.SET_ORDER_PROMOCODE_SALE_SUM;
    payload: number;
}

interface setOrderPromocodeErrorMessage {
    type: OrderStateActionTypes.SET_ORDER_PROMOCODE_ERROR_MESSAGE;
    payload: string;
}

interface setOrderCurrentDelivery {
    type: OrderStateActionTypes.SET_ORDER_CURRENT_DELIVERY;
    payload: {
        title: string;
        price: number;
        id: number;
    };
}

interface setOrderSumProducts {
    type: OrderStateActionTypes.SET_ORDER_SUM_PRODUCTS;
    payload: number;
}

interface setOrderSumDelivery {
    type: OrderStateActionTypes.SET_ORDER_SUM_DELIVERY;
    payload: number;
}

interface setOrderGlobalCountrys {
    type: OrderStateActionTypes.SET_ORDER_GLOBAL_COUNTRYS;
    payload: {
        title: string;
        value: string;
    }[];
}

interface setOrderGlobalCitys {
    type: OrderStateActionTypes.SET_ORDER_GLOBAL_CITYS;
    payload: {
        title: string;
        value: string;
    }[];
}

interface setOrderGlobalStreets {
    type: OrderStateActionTypes.SET_ORDER_GLOBAL_STREETS;
    payload: {
        title: string;
        value: string;
    }[];
}

interface setOrderAddressCountry {
    type: OrderStateActionTypes.SET_ORDER_ADDRESS_COUNTRY;
    payload: {
        title: string;
        value: string;
    };
}

interface setOrderAddressCity {
    type: OrderStateActionTypes.SET_ORDER_ADDRESS_CITY;
    payload: {
        title: string;
        value: string;
    };
}

interface setOrderAddressStreet {
    type: OrderStateActionTypes.SET_ORDER_ADDRESS_STREET;
    payload: {
        title: string;
        value: string;
    };
}

interface setOrderOrder {
    type: OrderStateActionTypes.SET_ORDER_ORDER;
    payload: Order;
}

interface setOrderIsLoadedOrder {
    type: OrderStateActionTypes.SET_ORDER_IS_LOADED_ORDER;
    payload: boolean;
}

interface setOrderIsValid {
    type: OrderStateActionTypes.SET_ORDER_IS_VALID;
    payload: boolean;
}

export type OrderStateActions =
    | setOrderPromocodeIsSend
    | setOrderPromocodeIsActive
    | setOrderPromocodeIsError
    | setOrderPromocodeFromSum
    | setOrderPromocodeName
    | setOrderPromocodeId
    | setOrderPromocodeSaleSum
    | setOrderPromocodeErrorMessage
    | setOrderCurrentDelivery
    | setOrderSumProducts
    | setOrderSumDelivery
    | setOrderGlobalCountrys
    | setOrderGlobalCitys
    | setOrderGlobalStreets
    | setOrderAddressCountry
    | setOrderAddressCity
    | setOrderAddressStreet
    | setOrderOrder
    | setOrderIsLoadedOrder
    | setOrderIsValid;
