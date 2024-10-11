import { createSlice } from '@reduxjs/toolkit';

import { fetchSelections } from './asyncActions';
import { ISelectionsState } from './types';

const initialState: ISelectionsState = {
    isLoaded: false,
    items: [],
};

const selectionsSlice = createSlice({
    name: 'selections',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSelections.fulfilled, (state, action) => {
            state.items = action.payload.selections.sort((a, b) => b.id - a.id);
            state.isLoaded = true;
        });
        builder.addCase(fetchSelections.rejected, (state) => {
            state.isLoaded = true;
        });
    },
});

export default selectionsSlice.reducer;
