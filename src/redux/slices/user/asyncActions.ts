import { createAsyncThunk } from '@reduxjs/toolkit';

import { userAPI } from '@/services/api';
import { showToast } from '@/shared/ui';

export const fetchClientAttributes = createAsyncThunk('user/fetchClientAttributes', async () => {
    const { data } = await userAPI.getClientAttributes();
    return data;
});

// TODO any type
export const updateClientAttributes = createAsyncThunk(
    'user/updateClientAttributes',
    async (request: any, { rejectWithValue }) => {
        try {
            const { data } = await userAPI.updateClientAttributes(request);
            showToast.success('Изменения сохранены успешно');

            return data;
        } catch (e) {
            showToast.error('Не удалось сохранить изменения');
            return rejectWithValue(null);
        }
    },
);
