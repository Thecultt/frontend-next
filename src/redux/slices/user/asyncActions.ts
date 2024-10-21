import { createAsyncThunk } from '@reduxjs/toolkit';

import { userAPI } from '@/services/api';

export const fetchClientAttributes = createAsyncThunk('user/fetchClientAttributes', async () => {
    const { data } = await userAPI.getClientAttributes();
    return data;
});

// TODO any type
export const updateClientAttributes = createAsyncThunk('user/updateClientAttributes', async (request: any) => {
    const { data } = await userAPI.updateClientAttributes(request);
    return data;
});
