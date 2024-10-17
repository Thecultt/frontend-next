import $api from '@/http';

const getClientAttributes = () => $api.get('/client-attributes/');

const updateClientAttributes = (body: any) => $api.post('/client-attributes/update/', body);

export const userAPI = {
    getClientAttributes,
    updateClientAttributes,
};
