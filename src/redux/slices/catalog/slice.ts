import { createSlice } from '@reduxjs/toolkit';

import { ICatalogState } from './types';
import { fetchNewProducts } from './asyncActions';

const initialState: ICatalogState = {
    newProducts: [],
    newProductsIsLoaded: false,
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNewProducts.fulfilled, (state, action) => {
            state.newProducts = action.payload;
            state.newProductsIsLoaded = true;
        });
        builder.addCase(fetchNewProducts.rejected, (state) => {
            state.newProducts = [];
            state.newProductsIsLoaded = true;
        });
    },
});

export default catalogSlice.reducer;
