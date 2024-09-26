import React from 'react';
import { Metadata } from 'next/types';

import $api from '@/http';
import { Catalog } from '@/screens';
import { MAIN_META } from '@/constants/meta';
import { ICatalogPageProps } from '@/types/catalog';
import { IBrands } from '@/redux/types/IBrands';
import { getBrandNameBySlug } from '@/functions/getBrandNameBySlug';
import { fetchCatalogServerSide } from '@/functions/fetchCatalogServerSide';

export const generateMetadata = async ({ params }: ICatalogPageProps) => {
    try {
        if (!params.brand_slug) {
            throw new Error();
        }

        const {
            data: { brands },
        } = await $api.get<IBrands>(`/brands_v2/`);

        const foundBrand = getBrandNameBySlug(brands, params.brand_slug);

        if (!foundBrand) {
            throw new Error();
        }

        return {
            title: `Продажа оригинальных вещей и аксессуаров от ${foundBrand.word} на ресейл платформе THE CULTT.`,
            description: `Продажа брендовых вещей, сумок и аксессуаров от ${foundBrand.word}, 100% подлинность гарантируется ресейл платформой THE CULTT, быстрая доставка по РФ.`,
        } satisfies Metadata;
    } catch (e) {
        return MAIN_META;
    }
};

export const revalidate = 3600;

const CatalogBrandPage = async (props: ICatalogPageProps) => {
    const data = await fetchCatalogServerSide(props);

    // TODO remove logs
    console.log('props', props);
    console.log('data', { ...data, items: data.items.map((i) => i.name) });

    return <Catalog serverCatalogData={data} />;
};

export default CatalogBrandPage;
