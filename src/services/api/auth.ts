import axios from 'axios';

import {
    CheckEmailResponse,
    IStatus,
    LoginRequest,
    LoginResponse,
    RecoveryPasswordConfirmRequest,
    RecoveryPasswordConfirmResponse,
    RefreshTokenResponse,
    RegisterRequest,
    RegisterResponse,
} from '@/types/api';
import { API_DOMAIN } from '@/constants/env';

const login = (body: LoginRequest) => axios.post<LoginResponse>(`${API_DOMAIN}/login/`, body);

const checkEmail = (email: string) => axios.post<CheckEmailResponse>(`${API_DOMAIN}/email_check/`, { email });

const register = (body: RegisterRequest) => axios.post<RegisterResponse>(`${API_DOMAIN}/register/`, body);

const recoveryPassword = (email: string) =>
    axios.post<IStatus>(`${API_DOMAIN}/reset_password/`, {
        email,
    });

const recoveryPasswordConfirm = (body: RecoveryPasswordConfirmRequest) =>
    axios.post<RecoveryPasswordConfirmResponse>(`${API_DOMAIN}/reset_password_confirm/`, body);

const refreshToken = (refresh: string) =>
    axios.post<RefreshTokenResponse>(`${API_DOMAIN}/api/token/refresh/`, {
        refresh,
    });

export const authAPI = {
    login,
    checkEmail,
    register,
    recoveryPassword,
    recoveryPasswordConfirm,
    refreshToken,
};
