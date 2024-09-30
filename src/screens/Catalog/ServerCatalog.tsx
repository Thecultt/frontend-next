import React from 'react';
import Link from 'next/link';
import type { ItemList as SchemaItemList, Product as SchemaProduct, WithContext } from 'schema-dts';

import CatalogProductsNull from '@/components/Catalog/CatalogProducts/CatalogProductsNull';
import { GetCatalogResponse } from '@/types/api';
import { APP_ROUTE } from '@/constants/routes';
import { APP_PROD_DOMAIN } from '@/constants/app';
import { CATALOG_PRODUCTS_LIMIT } from '@/constants/catalog';

// TODO breadcrumbs
// TODO sidebar/filters

interface Props {
    serverCatalogData?: GetCatalogResponse;
    mainTitle?: string;
}

const ServerCatalog: React.FC<Props> = ({ serverCatalogData, mainTitle }) => {
    if (!serverCatalogData) {
        return null;
    }

    const { items, current_page } = serverCatalogData;

    if (!items.length) {
        return <CatalogProductsNull />;
    }

    const jsonLd: WithContext<SchemaItemList> = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: current_page * CATALOG_PRODUCTS_LIMIT + (index + 1),
            item: {
                '@type': 'Product',
                name: item.name,
                image: item.images[0] ?? '',
                brand: {
                    '@type': 'Brand',
                    name: item.manufacturer,
                },
                offers: {
                    '@type': 'Offer',
                    url: `${APP_PROD_DOMAIN}/${APP_ROUTE.product}/${item.article}`,
                    priceCurrency: 'RUB',
                    price: item.price,
                    availability:
                        !!item.availability && !item.is_trial
                            ? 'https://schema.org/InStock'
                            : 'https://schema.org/OutOfStock',
                },
            } satisfies SchemaProduct,
        })),
    };

    return (
        <section className="static-catalog">
            <h1 className="static-catalog-main-title">{mainTitle || 'Каталог'}</h1>
            <div className="static-catalog-products">
                {items.map((item) => (
                    <article key={item.article} className="static-catalog-products-item">
                        <Link href={`${APP_PROD_DOMAIN}/${APP_ROUTE.product}/${item.article}`} title={item.name}>
                            <img
                                width="100%"
                                className="static-catalog-products-item__image"
                                src={item.images[0]}
                                alt={item.name}
                            />
                        </Link>
                        <h2 className="static-catalog-products-item__title">
                            <Link href={`${APP_PROD_DOMAIN}/${APP_ROUTE.product}/${item.article}`} title={item.name}>
                                {item.name}
                            </Link>
                        </h2>
                        <p className="static-catalog-products-item__prices">
                            <span className="static-catalog-products-item__price">{item.price}</span>
                            {item.old_price && (
                                <span className="static-catalog-products-item__old-price">{item.old_price}</span>
                            )}
                        </p>
                    </article>
                ))}
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </section>
    );
};

export default ServerCatalog;
