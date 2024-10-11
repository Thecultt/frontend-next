import { CATEGORY_SLUGS, SORT } from '@/constants/catalog';
import { CatalogPageParams } from '@/types/catalog';

export const getDefaultPageSort = ({ category_slug, selection_id }: CatalogPageParams) => {
    if (category_slug === CATEGORY_SLUGS.popular) {
        return SORT.popular;
    }

    if (!!selection_id || category_slug === CATEGORY_SLUGS.sale) {
        return SORT.shuffle;
    }

    return SORT.a;
};
