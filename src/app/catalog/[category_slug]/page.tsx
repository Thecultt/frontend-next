import React from 'react';
import { Metadata } from 'next/types';
import { notFound } from 'next/navigation';

import { Catalog } from '@/screens';
import NoSsr from '@/components/NoSsr/NoSsr';
import { CATEGORY_SLUG_NAMES, CATEGORY_SLUGS, FILTER_CATEGORY_SLUGS } from '@/constants/catalog';
import { APP_PROD_DOMAIN, APP_TITLE } from '@/constants/app';
import { CatalogPageParams } from '@/types/catalog';

import bagsImage from '/public/images/seo/category-bags.jpg';
import accessoriesImage from '/public/images/seo/category-accessories.jpg';
import decorationsImage from '/public/images/seo/category-decorations.jpg';
import shoesImage from '/public/images/seo/category-shoes.jpg';

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
    [CATEGORY_SLUGS.bags]: bagsImage.src,
    [CATEGORY_SLUGS.shoes]: shoesImage.src,
    [CATEGORY_SLUGS.accessories]: accessoriesImage.src,
    [CATEGORY_SLUGS.decorations]: decorationsImage.src,
};

export const generateMetadata = ({ params }: PageProps) => {
    try {
        const { category_slug } = params;

        if (!category_slug || !FILTER_CATEGORY_SLUGS.includes(category_slug)) {
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
        return {
            title: APP_TITLE,
        } satisfies Metadata;
    }
};

const CatalogCategoryPage = ({ params }: PageProps) => {
    const { category_slug } = params;

    if (!category_slug || !FILTER_CATEGORY_SLUGS.includes(category_slug)) {
        return notFound();
    }

    return (
        <NoSsr>
            <Catalog />
        </NoSsr>
    );
};

export default CatalogCategoryPage;
