import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { BRAND_DICTIONARY } from '@/constants/brands';

import HomeBrandsHermesImage from '@/assets/images/home/home-brands-hermes.jpg';
import HomeBrandsChanelImage from '@/assets/images/home/home-brands-chanel.jpg';
import HomeBrandsTheRowImage from '@/assets/images/home/home-brands-therow.jpg';
import HomeBrandsSaintLaurentImage from '@/assets/images/home/home-brands-ysl.jpg';
import HomeBrandsLouisVuittonImage from '@/assets/images/home/home-brands-lv.jpg';
import HomeBrandsCelineImage from '@/assets/images/home/home-brands-celine.jpg';
import HomeBrandsLoeweImage from '@/assets/images/home/home-brands-loewe.jpg';
import HomeBrandsGucciImage from '@/assets/images/home/home-brands-gucci.jpg';

export interface IHomeBrandItem {
    image: string;
    title: string;
    url: string;
}

export const HOME_BRANDS: IHomeBrandItem[] = [
    {
        image: HomeBrandsHermesImage.src,
        title: BRAND_DICTIONARY.hermes.title,
        url: getCatalogFiltersUrl({
            brand_slug: BRAND_DICTIONARY.hermes.slug,
        }),
    },
    {
        image: HomeBrandsChanelImage.src,
        title: BRAND_DICTIONARY.chanel.title,
        url: getCatalogFiltersUrl({
            brand_slug: BRAND_DICTIONARY.chanel.slug,
        }),
    },
    {
        image: HomeBrandsTheRowImage.src,
        title: BRAND_DICTIONARY.theRow.title,
        url: getCatalogFiltersUrl({
            brand_slug: BRAND_DICTIONARY.theRow.slug,
        }),
    },
    {
        image: HomeBrandsSaintLaurentImage.src,
        title: BRAND_DICTIONARY.saintLaurent.title,
        url: getCatalogFiltersUrl({
            brand_slug: BRAND_DICTIONARY.saintLaurent.slug,
        }),
    },
    {
        image: HomeBrandsLouisVuittonImage.src,
        title: BRAND_DICTIONARY.louisVuitton.title,
        url: getCatalogFiltersUrl({
            brand_slug: BRAND_DICTIONARY.louisVuitton.slug,
        }),
    },
    {
        image: HomeBrandsCelineImage.src,
        title: BRAND_DICTIONARY.celine.title,
        url: getCatalogFiltersUrl({
            brand_slug: BRAND_DICTIONARY.celine.slug,
        }),
    },
    {
        image: HomeBrandsLoeweImage.src,
        title: BRAND_DICTIONARY.loewe.title,
        url: getCatalogFiltersUrl({
            brand_slug: BRAND_DICTIONARY.loewe.slug,
        }),
    },
    {
        image: HomeBrandsGucciImage.src,
        title: BRAND_DICTIONARY.gucci.title,
        url: getCatalogFiltersUrl({
            brand_slug: BRAND_DICTIONARY.gucci.slug,
        }),
    },
];
