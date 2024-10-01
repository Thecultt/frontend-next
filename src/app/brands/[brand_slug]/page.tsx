import React from 'react';
import { Metadata } from 'next/types';

import { Catalog } from '@/screens';
import { MAIN_META } from '@/constants/meta';
import { ICatalogPageProps } from '@/types/catalog';
import { getBrandNameBySlug } from '@/functions/getBrandNameBySlug';
import { parseCatalogSearchParams } from '@/functions/parseCatalogSearchParams';
import { brandsAPI, catalogAPI } from '@/services/api';

export const revalidate = 24 * 60 * 60;

export const generateMetadata = async ({ params }: ICatalogPageProps) => {
    try {
        if (!params.brand_slug) {
            throw new Error();
        }

        const { brands } = await brandsAPI.getBrands();
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

const CatalogBrandPage = async (props: ICatalogPageProps) => {
    const data = await catalogAPI.getCatalog(parseCatalogSearchParams(props));

    let mainTitle: string | undefined;
    const brandSlug = props.params.brand_slug;

    if (brandSlug) {
        const { brands } = await brandsAPI.getBrands();
        const foundBrand = getBrandNameBySlug(brands, brandSlug);
        mainTitle = foundBrand?.word;
    }

    return <Catalog serverCatalogData={data} mainTitle={mainTitle} />;
};

export default CatalogBrandPage;
