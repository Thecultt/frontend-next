import React from 'react';
import { Metadata } from 'next/types';

import NoSsr from '@/components/NoSsr/NoSsr';
import $api from '@/http';
import { Catalog } from '@/screens';
import { MAIN_META } from '@/constants/meta';
import { CatalogPageParams } from '@/types/catalog';
import { IBrands } from '@/redux/types/IBrands';
import { getBrandNameBySlug } from '@/functions/getBrandNameBySlug';

interface PageProps {
    params: CatalogPageParams;
}

export const generateMetadata = async ({ params }: PageProps) => {
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

const CatalogBrandPage = () => (
    <NoSsr>
        <Catalog />
    </NoSsr>
);

export default CatalogBrandPage;
