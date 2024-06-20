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

        const title = `Купить ${data.name} по цене ${data.price}₽ на ресейл-платформе THE CULTT, доставка по РФ. ${data.category} ${data.name} ${data.condition} с быстрой доставкой в the CULTT.`;
        const description = `${data.name} ${data.color} цвет по цене ${data.price}₽, состояние – ${data.condition}, 100% оригинал с доставкой по всей России.`;
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
