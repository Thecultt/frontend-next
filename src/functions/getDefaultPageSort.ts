import { CATEGORY_SLUGS, SORT } from '@/constants/catalog';

interface IParams {
    categorySlug?: string;
    selectionId?: string;
}

export const getDefaultPageSort = ({ categorySlug, selectionId }: IParams) => {
    if ((categorySlug && [CATEGORY_SLUGS.sale, CATEGORY_SLUGS.popular].includes(categorySlug)) || !!selectionId) {
        return SORT.popular;
    }

    if (categorySlug === CATEGORY_SLUGS.new) {
        return SORT.a;
    }

    return SORT.shuffle;
};
