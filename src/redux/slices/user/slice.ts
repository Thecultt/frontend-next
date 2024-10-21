import { createSlice } from '@reduxjs/toolkit';

import { fetchClientAttributes, updateClientAttributes } from './asyncActions';
import { IUserState } from './types';

const initialState: IUserState = {
    user: {},
    isLoaded: false,
    fetchIsLoading: false,
    updateIsLoading: false,
};

const selectionsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchClientAttributes.pending, (state) => {
            state.isLoaded = false;
            state.fetchIsLoading = true;
        });
        builder.addCase(fetchClientAttributes.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoaded = true;
            state.fetchIsLoading = false;
        });
        builder.addCase(fetchClientAttributes.rejected, (state) => {
            state.isLoaded = true;
            state.fetchIsLoading = false;
        });

        builder.addCase(updateClientAttributes.pending, (state) => {
            state.updateIsLoading = true;
        });
        builder.addCase(updateClientAttributes.fulfilled, (state, action) => {
            state.user = action.payload;
            state.updateIsLoading = false;
        });
        builder.addCase(updateClientAttributes.rejected, (state) => {
            state.updateIsLoading = false;
        });
    },
});

export default selectionsSlice.reducer;
