import React from 'react';
import { Metadata } from 'next/types';

import type { ProductPage } from '@/models/IProduct';
import { NoSsr } from '@/shared/ui';
import { Product } from '@/screens';
import $api from '@/http';
import { APP_PROD_DOMAIN } from '@/constants/app';
import { CATEGORY_NAMES } from '@/constants/catalog';
import { MAIN_META } from '@/constants/meta';

interface PageProps {
    params: { article?: string };
}

const CATEGORIES_DICTIONARY = {
    [CATEGORY_NAMES.bags]: 'сумку',
    [CATEGORY_NAMES.shoes]: 'обувь',
    [CATEGORY_NAMES.accessories]: 'аксессуар',
    [CATEGORY_NAMES.decorations]: 'украшение',
};

export const generateMetadata = async ({ params }: PageProps) => {
    try {
        const { article } = params;

        if (!article) {
            throw new Error();
        }

        const { data } = await $api.get<ProductPage>(`/product/${article}`);

        if (!data) {
            throw new Error();
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

export const revalidate = 0;

const ProductDetailsPage = () => (
    <NoSsr>
        <Product />
    </NoSsr>
);

export default ProductDetailsPage;
