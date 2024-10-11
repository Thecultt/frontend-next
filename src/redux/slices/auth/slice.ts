import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

import { IAuthState } from './types';
import { checkEmail, login, recoveryPassword, recoveryPasswordConfirm, register } from './asyncActions';

const initialState: IAuthState = {
    loginIsLoading: false,
    email: '',
    checkEmailIsLoading: false,
    recoveryPasswordIsLoading: false,
    registerIsLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loginIsLoading = true;
        });
        builder.addCase(checkEmail.pending, (state) => {
            state.checkEmailIsLoading = true;
        });
        builder.addCase(register.pending, (state) => {
            state.registerIsLoading = true;
        });

        builder.addMatcher(isAnyOf(login.fulfilled, login.rejected), (state) => {
            state.loginIsLoading = false;
        });

        builder.addMatcher(isAnyOf(checkEmail.fulfilled, checkEmail.rejected), (state) => {
            state.checkEmailIsLoading = false;
        });

        builder.addMatcher(isAnyOf(register.fulfilled, register.rejected), (state) => {
            state.registerIsLoading = false;
        });

        builder.addMatcher(isAnyOf(recoveryPassword.pending, recoveryPasswordConfirm.pending), (state) => {
            state.recoveryPasswordIsLoading = true;
        });
        builder.addMatcher(
            isAnyOf(
                recoveryPassword.fulfilled,
                recoveryPassword.rejected,
                recoveryPasswordConfirm.fulfilled,
                recoveryPasswordConfirm.rejected,
            ),
            (state) => {
                state.recoveryPasswordIsLoading = false;
            },
        );
    },
});

export const { setEmail } = authSlice.actions;

export default authSlice.reducer;
