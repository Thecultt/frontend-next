import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { CATEGORY_SLUGS } from '@/constants/catalog';

import HomeCategoriesBagImage from '@/assets/images/home/home-categories-bag.jpg';
import HomeCategoriesShoesImage from '@/assets/images/home/home-categories-shoes.jpg';
import HomeCategoriesDecorationImage from '@/assets/images/home/home-categories-decoration.jpg';
import HomeCategoriesClockImage from '@/assets/images/home/home-categories-clock.jpg';
import HomeCategoriesBeltImage from '@/assets/images/home/home-categories-belt.jpg';
import HomeCategoriesHandImage from '@/assets/images/home/home-categories-hand.jpg';

export interface IHomeCategoriesItem {
    image: string;
    title: string;
    url: string;
}

export const HOME_CATEGORIES: IHomeCategoriesItem[] = [
    {
        image: HomeCategoriesBagImage.src,
        title: 'Сумки',
        url: getCatalogFiltersUrl({
            category_slug: CATEGORY_SLUGS.bags,
        }),
    },
    {
        image: HomeCategoriesShoesImage.src,
        title: 'Обувь',
        url: getCatalogFiltersUrl({
            category_slug: CATEGORY_SLUGS.shoes,
        }),
    },
    {
        image: HomeCategoriesDecorationImage.src,
        title: 'Украшения',
        url: getCatalogFiltersUrl({
            category_slug: CATEGORY_SLUGS.decorations,
        }),
    },
    {
        image: HomeCategoriesClockImage.src,
        title: 'Часы',
        url: getCatalogFiltersUrl({
            category_slug: CATEGORY_SLUGS.decorations,
            types: ['Часы'],
        }),
    },
    {
        image: HomeCategoriesBeltImage.src,
        title: 'Ремни',
        url: getCatalogFiltersUrl({
            category_slug: CATEGORY_SLUGS.accessories,
            types: ['Ремни'],
        }),
    },
    {
        image: HomeCategoriesHandImage.src,
        title: 'Платки и шарфы',
        url: getCatalogFiltersUrl({
            category_slug: CATEGORY_SLUGS.accessories,
            types: ['Платки и шарфы'],
        }),
    },
];
