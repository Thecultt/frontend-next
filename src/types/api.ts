import { Product } from '@/models/IProduct';
import { ISelection } from '@/models/ISelection';

export interface IStatus {
    status: string;
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
