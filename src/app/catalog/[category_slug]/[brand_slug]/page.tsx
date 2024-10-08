import React from 'react';
import { Metadata } from 'next/types';
import { notFound } from 'next/navigation';

import { Catalog } from '@/screens';
import { CATEGORY_SLUG_NAMES, FILTER_CATEGORY_SLUGS } from '@/constants/catalog';
import { APP_PROD_DOMAIN } from '@/constants/app';
import { CATEGORIES_META_DICTIONARY, MAIN_META } from '@/constants/meta';
import { ICatalogPageProps } from '@/types/catalog';
import { brandsAPI, catalogAPI } from '@/services/api';
import { parseCatalogSearchParams } from '@/functions/parseCatalogSearchParams';
import { getBrandNameBySlug } from '@/functions/getBrandNameBySlug';

export const revalidate = 24 * 60 * 60;

export const generateMetadata = async ({ params }: ICatalogPageProps) => {
    try {
        const { category_slug, brand_slug } = params;

        if (!category_slug || !brand_slug || !FILTER_CATEGORY_SLUGS.includes(category_slug)) {
            throw new Error();
        }

        const { brands } = await brandsAPI.getBrands();
        const foundBrand = getBrandNameBySlug(brands, brand_slug);

        if (!foundBrand) {
            throw new Error();
        }

        const title = `Продажа ${CATEGORIES_META_DICTIONARY[category_slug] ?? ''} от ${foundBrand.word} на ресейл платформе THE CULTT.`;
        const description = `${CATEGORY_SLUG_NAMES[category_slug] ?? ''} от ${foundBrand.word} на ресейл платформе THE CULTT, 100% подлинность гарантирована, самый большой ассортимент, доставка по России.`;

        return {
            title,
            description,
            openGraph: {
                title,
                description,
                type: 'website',
                url: APP_PROD_DOMAIN,
            },
            twitter: {
                title,
                description,
                site: APP_PROD_DOMAIN,
                card: 'summary_large_image',
            },
        } satisfies Metadata;
    } catch (e) {
        return MAIN_META;
    }
};

const CatalogCategoryBrandPage = async (props: ICatalogPageProps) => {
    const { category_slug, brand_slug } = props.params;

    if (!category_slug || !brand_slug || !FILTER_CATEGORY_SLUGS.includes(category_slug)) {
        return notFound();
    }

    const data = await catalogAPI.getCatalog(parseCatalogSearchParams(props));
    const { brands } = await brandsAPI.getBrands();
    const foundBrand = getBrandNameBySlug(brands, brand_slug);

    return (
        <Catalog
            serverCatalogData={data}
            mainTitle={
                foundBrand
                    ? `${CATEGORY_SLUG_NAMES[category_slug]} ${foundBrand.word}`
                    : CATEGORY_SLUG_NAMES[category_slug]
            }
        />
    );
};

export default CatalogCategoryBrandPage;
