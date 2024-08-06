import { CATEGORY_SLUGS, SORT } from '@/constants/catalog';

export const getDefaultPageSort = (categorySlug?: string, selectionId?: string) => {
    if ((categorySlug && [CATEGORY_SLUGS.sale, CATEGORY_SLUGS.popular].includes(categorySlug)) || !!selectionId) {
        return SORT.popular;
    }

    if (categorySlug === CATEGORY_SLUGS.new) {
        return SORT.a;
    }

    return SORT.shuffle;
};
