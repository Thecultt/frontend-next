import { CATEGORY_SLUGS, SORT } from '@/constants/catalog';

export const getDefaultPageSort = (categorySlug?: string) => {
    if (categorySlug && [CATEGORY_SLUGS.sale, CATEGORY_SLUGS.popular].includes(categorySlug)) {
        return SORT.popular;
    }

    if (categorySlug === CATEGORY_SLUGS.new) {
        return SORT.a;
    }

    return SORT.shuffle;
};
