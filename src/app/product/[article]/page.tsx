import React from 'react';
import { Metadata } from 'next/types';
import { notFound } from 'next/navigation';

import { Product } from '@/screens';
import { APP_PROD_DOMAIN } from '@/constants/app';
import { CATEGORY_NAMES } from '@/constants/catalog';
import { MAIN_META } from '@/constants/meta';
import { catalogAPI } from '@/services/api';
import { IProductPageProps } from '@/types/product';

const CATEGORIES_DICTIONARY = {
    [CATEGORY_NAMES.bags]: 'сумку',
    [CATEGORY_NAMES.shoes]: 'обувь',
    [CATEGORY_NAMES.accessories]: 'аксессуар',
    [CATEGORY_NAMES.decorations]: 'украшение',
    [CATEGORY_NAMES.jewelry]: 'ювелирное изделие',
};

export const revalidate = 0;

export const generateMetadata = async ({ params }: IProductPageProps) => {
    try {
        const { article } = params;

        if (!article) {
            throw new Error('Article not found');
        }

        const data = await catalogAPI.getProductByArticle(article);

        if (!data) {
            throw new Error('Product data is empty');
        }

        const category = CATEGORIES_DICTIONARY[data.category] ?? '';

        const title = `Купить ${category} ${data.name} на ресейл платформе THE CULTT.`;
        const description = `Купить ${category} ${data.name} за ${data.price} руб. на ресейл платформе THE CULTT, 100% подлинность гарантирована, доставка по России.`;
        const images = data.images[0] || '';

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

const ProductDetailsPage = async ({ params }: IProductPageProps) => {
    const { article } = params;

    if (!article) {
        return notFound();
    }

    const data = await catalogAPI.getProductByArticle(article);

    if (!data) {
        return notFound();
    }

    return <Product serverProductData={data} />;
};

export default ProductDetailsPage;
