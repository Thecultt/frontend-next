import $api from '@/http';
import { GetSelectionsResponse } from '@/types/api';

const getSelections = async (): Promise<GetSelectionsResponse> => {
    try {
        const { data } = await $api.get<GetSelectionsResponse>('/selections');
        return data;
    } catch (e) {
        console.error('getSelections', e);
        return { selections: [] };
    }
};

export const selectionsAPI = {
    getSelections,
};
