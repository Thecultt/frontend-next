import { createAsyncThunk } from '@reduxjs/toolkit';

import { selectionsAPI } from '@/services/api';

export const fetchSelections = createAsyncThunk('selections/fetchSelections', async () => {
    const { data } = await selectionsAPI.getSelections();
    return data;
});
