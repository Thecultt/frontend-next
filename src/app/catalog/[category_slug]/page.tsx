import React from 'react';
import { Metadata } from 'next/types';
import { notFound } from 'next/navigation';

import { Catalog } from '@/screens';
import {
    ALL_CATEGORY_SLUGS,
    CATEGORY_SLUG_NAMES,
    CATEGORY_SLUGS,
    FAKE_CATEGORY_SLUGS,
    FILTER_CATEGORY_SLUGS,
} from '@/constants/catalog';
import { APP_PROD_DOMAIN } from '@/constants/app';
import {
    CATALOG_NEW_META,
    CATALOG_POPULAR_META,
    CATALOG_SALE_META,
    CATEGORIES_META_DICTIONARY,
    MAIN_META,
} from '@/constants/meta';
import { ICatalogPageProps } from '@/types/catalog';
import { catalogAPI } from '@/services/api';
import { parseCatalogSearchParams } from '@/functions/parseCatalogSearchParams';

const CATEGORIES_IMAGE_DICTIONARY = {
    [CATEGORY_SLUGS.bags]: `${APP_PROD_DOMAIN}/images/seo/category-bags.jpg`,
    [CATEGORY_SLUGS.shoes]: `${APP_PROD_DOMAIN}/images/seo/category-shoes.jpg`,
    [CATEGORY_SLUGS.accessories]: `${APP_PROD_DOMAIN}/images/seo/category-accessories.jpg`,
    [CATEGORY_SLUGS.decorations]: `${APP_PROD_DOMAIN}/images/seo/category-decorations.jpg`,
    [CATEGORY_SLUGS.jewelry]: `${APP_PROD_DOMAIN}/images/seo/category-decorations.jpg`,
};

export const revalidate = 24 * 60 * 60;

export const generateMetadata = ({ params }: ICatalogPageProps) => {
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

        const title = `Продажа ${CATEGORIES_META_DICTIONARY[category_slug] ?? ''} на ресейл платформе THE CULTT.`;
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

const CatalogCategoryPage = async (props: ICatalogPageProps) => {
    const { category_slug } = props.params;

    if (!category_slug || !ALL_CATEGORY_SLUGS.includes(category_slug)) {
        return notFound();
    }

    const data = await catalogAPI.getCatalog(parseCatalogSearchParams(props));

    return <Catalog serverCatalogData={data} mainTitle={CATEGORY_SLUG_NAMES[category_slug]} />;
};

export default CatalogCategoryPage;
