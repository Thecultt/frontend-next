import $api from '@/http';
import { IBrands } from '@/models/IBrand';

const getBrands = () => $api.get<IBrands>('/brands_v2/');

export const brandsAPI = {
    getBrands,
};
