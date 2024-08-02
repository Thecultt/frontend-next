import React from 'react';
import { Metadata } from 'next/types';

import type { ProductPage } from '@/models/IProduct';
import NoSsr from '@/components/NoSsr/NoSsr';
import { Product } from '@/screens';
import $api from '@/http';
import { APP_PROD_DOMAIN, APP_TITLE } from '@/constants/app';

interface PageProps {
    params: { article?: string };
}

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

        // TODO вынести в утилиту

        let category = '';

        if (data.category === 'Сумки') {
            category = 'сумку';
        }

        if (data.category === 'Обувь') {
            category = 'обувь';
        }

        if (data.category === 'Аксессуары') {
            category = 'аксессуар';
        }

        if (data.category === 'Украшения') {
            category = 'украшение';
        }

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
        return {
            title: APP_TITLE,
        } satisfies Metadata;
    }
};

export const revalidate = 0;

const ProductDetailsPage = () => (
    <NoSsr>
        <Product />
    </NoSsr>
);

export default ProductDetailsPage;
