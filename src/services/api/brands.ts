import $api from '@/http';
import { IBrands } from '@/models/IBrand';

const getBrands = async (): Promise<IBrands> => {
    try {
        const { data } = await $api.get<IBrands>('/brands_v2/');
        return data;
    } catch (e) {
        console.error('getBrands', e);
        return { brands: {} };
    }
};

export const brandsAPI = {
    getBrands,
};
