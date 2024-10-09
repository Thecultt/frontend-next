import React from 'react';
import type { ItemList as SchemaItemList, Product as SchemaProduct, WithContext } from 'schema-dts';

import { FullscreenLoader } from '@/shared/ui';
import { GetCatalogResponse } from '@/types/api';
import { APP_ROUTE } from '@/constants/routes';
import { APP_PROD_DOMAIN } from '@/constants/app';
import { CATALOG_PRODUCTS_LIMIT, CATEGORY_SLUG_NAMES, CATEGORY_SLUGS } from '@/constants/catalog';

interface Props {
    serverCatalogData?: GetCatalogResponse | null;
    mainTitle?: string;
}

const ServerCatalogNotFound = () => (
    <>
        <FullscreenLoader />
        <div className="static-catalog-not-found">
            <h2 className="static-catalog-not-found__title">Подходящих результатов не найдено</h2>
            <p className="static-catalog-not-found__description">
                Проверьте, правильно ли введен запрос или воспользуйтесь фильтрами
            </p>
        </div>
    </>
);

export const ServerCatalog: React.FC<Props> = ({ serverCatalogData, mainTitle }) => {
    if (!serverCatalogData) {
        return <ServerCatalogNotFound />;
    }

    const { items, current_page } = serverCatalogData;

    if (!items.length) {
        return <ServerCatalogNotFound />;
    }

    const productsJsonLd: WithContext<SchemaItemList> = {
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
                    url: `${APP_PROD_DOMAIN}${APP_ROUTE.product}/${item.article}`,
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
        <>
            <FullscreenLoader />
            <section className="static-catalog">
                <h1 className="static-catalog-main-title">{mainTitle || 'Каталог'}</h1>
                <nav className="static-catalog-sidebar">
                    <a
                        href={`${APP_PROD_DOMAIN}${APP_ROUTE.catalog}`}
                        className="static-catalog-sidebar__item"
                        title="Каталог"
                    >
                        Каталог
                    </a>
                    {Object.values(CATEGORY_SLUGS).map((slug) => (
                        <a
                            key={slug}
                            href={`${APP_PROD_DOMAIN}${APP_ROUTE.catalog}/${slug}`}
                            className="static-catalog-sidebar__item"
                            title={CATEGORY_SLUG_NAMES[slug]}
                        >
                            {CATEGORY_SLUG_NAMES[slug]}
                        </a>
                    ))}
                </nav>
                <div className="static-catalog-products">
                    {items.map((item) => (
                        <article key={item.article} className="static-catalog-products-item">
                            <a href={`${APP_PROD_DOMAIN}${APP_ROUTE.product}/${item.article}`} title={item.name}>
                                <img
                                    width="100%"
                                    className="static-catalog-products-item__image"
                                    src={item.images[0]}
                                    alt={item.name}
                                />
                            </a>
                            <h2 className="static-catalog-products-item__title">
                                <a href={`${APP_PROD_DOMAIN}${APP_ROUTE.product}/${item.article}`} title={item.name}>
                                    {item.name}
                                </a>
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

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
                />
            </section>
        </>
    );
};
