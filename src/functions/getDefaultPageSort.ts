import { CATEGORY_SLUGS, SORT } from '@/constants/catalog';

interface IParams {
    categorySlug?: string;
}

export const getDefaultPageSort = ({ categorySlug }: IParams) => {
    if (categorySlug === CATEGORY_SLUGS.popular) {
        return SORT.popular;
    }

    if (categorySlug === CATEGORY_SLUGS.new) {
        return SORT.a;
    }

    return SORT.shuffle;
};
