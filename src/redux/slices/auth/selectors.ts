import { RootState } from '@/redux/store';

export const selectLoginIsLoading = (state: RootState) => state.auth.loginIsLoading;
export const selectAuthEmail = (state: RootState) => state.auth.email;
export const selectCheckEmailIsLoading = (state: RootState) => state.auth.checkEmailIsLoading;
export const selectRecoveryPasswordIsLoading = (state: RootState) => state.auth.recoveryPasswordIsLoading;
export const selectRegisterIsLoading = (state: RootState) => state.auth.registerIsLoading;
