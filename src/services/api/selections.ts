import $api from '@/http';
import { GetSelectionsResponse } from '@/types/api';

const getSelections = async () => $api.get<GetSelectionsResponse>('/selections');

export const selectionsAPI = {
    getSelections,
};
