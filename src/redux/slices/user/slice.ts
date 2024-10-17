import { createSlice } from '@reduxjs/toolkit';

import { fetchClientAttributes, updateClientAttributes } from './asyncActions';
import { IUserState } from './types';

const initialState: IUserState = {
    isLoaded: false,
    user: {},
};

const selectionsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchClientAttributes.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoaded = true;
        });
        builder.addCase(updateClientAttributes.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    },
});

export default selectionsSlice.reducer;
