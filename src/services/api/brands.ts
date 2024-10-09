import $api from '@/http';
import { IBrands } from '@/models/IBrand';

const getBrands = async () => $api.get<IBrands>('/brands_v2/');

export const brandsAPI = {
    getBrands,
};
