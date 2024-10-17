import { createAsyncThunk } from '@reduxjs/toolkit';

import { catalogAPI } from '@/services/api';
import { AVAILABILITY, SORT } from '@/constants/catalog';

export const fetchNewProducts = createAsyncThunk('catalog/fetchNewProducts', async () => {
    const { data } = await catalogAPI.getCatalog({
        availability: [AVAILABILITY.available],
        sort: SORT.a,
    });

    return data.items;
});
