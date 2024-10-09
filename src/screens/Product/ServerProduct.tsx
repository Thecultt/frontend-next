import React from 'react';
import type {
    WithContext,
    Product as SchemaProduct,
    ImageObject as SchemaImageObject,
    BreadcrumbList as SchemaBreadcrumbList,
} from 'schema-dts';

import { ProductPage } from '@/models/IProduct';
import { APP_PROD_DOMAIN } from '@/constants/app';
import { APP_ROUTE } from '@/constants/routes';
import { FullscreenLoader } from '@/shared/ui';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';

interface Props {
    data: ProductPage;
}

export const ServerProduct: React.FC<Props> = ({ data }) => {
    const productJsonLd: WithContext<SchemaProduct> = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: data.name,
        image: data.images.map(
            (image) =>
                ({
                    '@type': 'ImageObject',
                    contentUrl: image,
                }) satisfies SchemaImageObject,
        ),
        description: data.description,
        brand: {
            '@type': 'Brand',
            name: data.manufacturer,
        },
        offers: {
            '@type': 'Offer',
            url: `${APP_PROD_DOMAIN}${APP_ROUTE.product}/${data.article}`,
            priceCurrency: 'RUB',
            price: data.price ?? 0,
            availability:
                !!data.availability && !data.is_trial ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
        },
    };

    const breadcrumbJsonLd: WithContext<SchemaBreadcrumbList> = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Главная',
                item: APP_PROD_DOMAIN,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Каталог',
                item: `${APP_PROD_DOMAIN}${APP_ROUTE.catalog}`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: data.category,
                item: `${APP_PROD_DOMAIN}${getCatalogFiltersUrl({ category_slug: data.category_slug })}`,
            },
            {
                '@type': 'ListItem',
                position: 4,
                name: data.manufacturer,
                item: `${APP_PROD_DOMAIN}${getCatalogFiltersUrl({ category_slug: data.category_slug, brand_slug: data.manufacturer_slug })}`,
            },
            {
                '@type': 'ListItem',
                position: 5,
                name: data.name,
                item: `${APP_PROD_DOMAIN}${APP_ROUTE.product}/${data.article}`,
            },
        ],
    };

    return (
        <>
            <FullscreenLoader />

            <nav className="static-product-breadcrumbs" aria-label="Навигация по каталогу">
                <ul>
                    <a
                        href={APP_ROUTE.home}
                        className="static-product-breadcrumbs__item"
                        title="Перейти на главную страницу"
                    >
                        Главная страница
                    </a>
                    <a href={APP_ROUTE.catalog} className="static-product-breadcrumbs__item" title="Перейти в каталог">
                        Каталог
                    </a>
                    <a
                        href={getCatalogFiltersUrl({ category_slug: data.category_slug })}
                        className="static-product-breadcrumbs__item"
                        title={data.category}
                    >
                        {data.category}
                    </a>
                    <a
                        href={getCatalogFiltersUrl({
                            category_slug: data.category_slug,
                            brand_slug: data.manufacturer_slug,
                        })}
                        className="static-product-breadcrumbs__item"
                        title={data.manufacturer}
                    >
                        {data.manufacturer}
                    </a>
                    <a
                        href={`${APP_ROUTE.product}/${data.article}`}
                        className="static-product-breadcrumbs__item"
                        title={data.name}
                    >
                        {data.name}
                    </a>
                </ul>
            </nav>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <article className="static-product">
                <img width="100%" className="static-product__image" src={data.images[0]} alt={data.name} />
                <h1 className="static-product__name">{data.name}</h1>
                <h2 className="static-product__article">{data.article}</h2>
                <p className="static-product__prices">
                    <span className="static-product__price">{data.price}</span>
                    {data.old_price && <span className="static-product__old-price">{data.old_price}</span>}
                </p>
                <p className="static-product__condition">Состояние: {data.condition}</p>
                <a
                    className="static-product__brand"
                    href={getCatalogFiltersUrl({
                        category_slug: data.category_slug,
                        brand_slug: data.manufacturer_slug,
                    })}
                >
                    {data.manufacturer}
                </a>
                <p className="static-product__description" dangerouslySetInnerHTML={{ __html: data.description }} />
            </article>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
        </>
    );
};
