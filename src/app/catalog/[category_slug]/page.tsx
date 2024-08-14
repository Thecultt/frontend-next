import React from 'react';
import { Metadata } from 'next/types';
import { notFound } from 'next/navigation';

import { Catalog } from '@/screens';
import NoSsr from '@/components/NoSsr/NoSsr';
import {
    ALL_CATEGORY_SLUGS,
    CATEGORY_SLUG_NAMES,
    CATEGORY_SLUGS,
    FAKE_CATEGORY_SLUGS,
    FILTER_CATEGORY_SLUGS,
} from '@/constants/catalog';
import { APP_PROD_DOMAIN } from '@/constants/app';
import { CATALOG_NEW_META, CATALOG_POPULAR_META, CATALOG_SALE_META, MAIN_META } from '@/constants/meta';
import { CatalogPageParams } from '@/types/catalog';

interface PageProps {
    params: CatalogPageParams;
}

const CATEGORIES_DICTIONARY = {
    [CATEGORY_SLUGS.bags]: 'брендовых сумок',
    [CATEGORY_SLUGS.shoes]: 'брендовой обуви',
    [CATEGORY_SLUGS.accessories]: 'брендовых аксессуаров',
    [CATEGORY_SLUGS.decorations]: 'брендовых украшений',
};

const CATEGORIES_IMAGE_DICTIONARY = {
    [CATEGORY_SLUGS.bags]: `${APP_PROD_DOMAIN}/images/seo/category-bags.jpg`,
    [CATEGORY_SLUGS.shoes]: `${APP_PROD_DOMAIN}/images/seo/category-shoes.jpg`,
    [CATEGORY_SLUGS.accessories]: `${APP_PROD_DOMAIN}/images/seo/category-accessories.jpg`,
    [CATEGORY_SLUGS.decorations]: `${APP_PROD_DOMAIN}/images/seo/category-decorations.jpg`,
};

export const generateMetadata = ({ params }: PageProps) => {
    try {
        const { category_slug } = params;

        if (!category_slug) {
            throw new Error();
        }

        if (FAKE_CATEGORY_SLUGS.includes(category_slug)) {
            return {
                [CATEGORY_SLUGS.new]: CATALOG_NEW_META,
                [CATEGORY_SLUGS.popular]: CATALOG_POPULAR_META,
                [CATEGORY_SLUGS.sale]: CATALOG_SALE_META,
            }[category_slug];
        }

        if (!FILTER_CATEGORY_SLUGS.includes(category_slug)) {
            throw new Error();
        }

        const title = `Продажа ${CATEGORIES_DICTIONARY[category_slug] ?? ''} на ресейл платформе THE CULTT.`;
        const description = `${CATEGORY_SLUG_NAMES[category_slug] ?? ''} мировых брендов на ресейл платформе THE CULTT, 100% подлинность гарантирована, самый большой ассортимент, доставка по России.`;
        const images = CATEGORIES_IMAGE_DICTIONARY[category_slug] ?? '';

        return {
            title,
            description,
            openGraph: {
                title,
                description,
                images,
                type: 'website',
                url: APP_PROD_DOMAIN,
            },
            twitter: {
                title,
                description,
                images,
                site: APP_PROD_DOMAIN,
                card: 'summary_large_image',
            },
        } satisfies Metadata;
    } catch (e) {
        return MAIN_META;
    }
};

const CatalogCategoryPage = ({ params }: PageProps) => {
    const { category_slug } = params;

    if (!category_slug || !ALL_CATEGORY_SLUGS.includes(category_slug)) {
        return notFound();
    }

    return (
        <NoSsr>
            <Catalog />
        </NoSsr>
    );
};

export default CatalogCategoryPage;
