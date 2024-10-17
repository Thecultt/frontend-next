import { createAsyncThunk } from '@reduxjs/toolkit';

import { userAPI } from '@/services/api';
import { Noop } from '@/types/functions';

export const fetchClientAttributes = createAsyncThunk('user/fetchClientAttributes', async () => {
    const { data } = await userAPI.getClientAttributes();
    return data;
});

export const updateClientAttributes = createAsyncThunk('user/updateClientAttributes', async (request: any) => {
    const { data } = await userAPI.updateClientAttributes(request);

    request.onSubmitSuccess?.();

    return data;
});
