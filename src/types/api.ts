import { Product } from '@/models/IProduct';
import { ISelection } from '@/models/ISelection';

import { IOrderCreateData } from './order';
import { Nullable } from './utils';

export interface IStatus {
    status: string;
}

export interface IMessage {
    message: string;
}

export interface IAccessRefreshTokens {
    access: string;
    refresh: string;
}

export interface GetCatalogResponse {
    total_pages: number;
    current_page: number;
    total_items: number;
    items: Product[];
}

export interface GetSelectionsResponse {
    selections: ISelection[];
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse extends IAccessRefreshTokens {
    id: number;
}

export interface CheckEmailResponse {
    login_first_time: boolean | null;
    status: string;
}

export interface RecoveryPasswordConfirmRequest {
    password: string;
    code: string;
}

export interface RecoveryPasswordConfirmResponse extends IAccessRefreshTokens {}

export interface RegisterRequest {
    name: string;
    lastname: string;
    email: string;
    password: string;
    promoCheckbox: boolean;
}

export interface RegisterResponse extends IAccessRefreshTokens {
    id: number;
}

export interface RefreshTokenResponse {
    access: string;
}

export interface CheckPromoCodeResponse {
    id: number;
    card_sum_from: Nullable<number>;
    discount: number;
    message: string;
}

export interface CheckPromoCodeErrorResponse extends IMessage {}

export interface CreateOrderRequest extends IOrderCreateData {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
    _ym_uid?: string;
}

export interface CreateOrderResponse {
    order_id: number;
    order_num: string;
    link?: Nullable<string>;
}

export interface CreateOrderErrorResponse extends IMessage {}
