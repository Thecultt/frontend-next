import { MetadataRoute } from 'next/types';

import { APP_PROD_DOMAIN } from '@/constants/app';
import { APP_ROUTE } from '@/constants/routes';
import { catalogAPI } from '@/services/api';
import { FAKE_CATEGORY_SLUGS } from '@/constants/catalog';

const concatWithProd = (url: string) => `${APP_PROD_DOMAIN}${url}`;

const STATIC_PAGES = [
    APP_ROUTE.auth,
    APP_ROUTE.about,
    APP_ROUTE.contact,
    APP_ROUTE.sell.info,
    APP_ROUTE.sell.infoBrands,
    APP_ROUTE.sell.create,
    APP_ROUTE.exchange,
    APP_ROUTE.visit,
    APP_ROUTE.concierge.root,
    APP_ROUTE.vipService,
    APP_ROUTE.help.root,
    APP_ROUTE.help.all,
    APP_ROUTE.help.delivery,
    APP_ROUTE.help.return,
    APP_ROUTE.help.sellers,
    APP_ROUTE.help.theCultt,
    APP_ROUTE.help.publicOffer,
    APP_ROUTE.help.userAgreement,
];

const fetchCatalogFilters = async () => {
    try {
        const { data } = await catalogAPI.getCatalogFilters();
        return data;
    } catch (e) {
        console.error('Sitemap fetchCatalogFilters', e);
        return null;
    }
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
    const urls: MetadataRoute.Sitemap = [
        {
            url: concatWithProd(APP_ROUTE.home),
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: concatWithProd(APP_ROUTE.catalog),
            lastModified: new Date(),
            priority: 0.7,
        },
    ];

    FAKE_CATEGORY_SLUGS.forEach((slug) =>
        urls.push({
            url: concatWithProd(`${APP_ROUTE.catalog}/${slug}`),
            lastModified: new Date(),
            priority: 0.9,
        }),
    );

    const filters = await fetchCatalogFilters();
    if (filters) {
        const { categories, selections } = filters;

        if (categories && Object.keys(categories).length > 0) {
            Object.keys(categories).forEach((categoryKey) => {
                const category = categories[categoryKey];
                if (category) {
                    urls.push({
                        url: concatWithProd(`${APP_ROUTE.catalog}/${category.slug}`),
                        lastModified: new Date(),
                        priority: 0.9,
                    });

                    const brandsSet = new Set<string>([]);

                    if (category.subsubcategories) {
                        Object.keys(category.subsubcategories).forEach((typeKey) => {
                            Object.keys(category.subsubcategories[typeKey].manufacturers).forEach((brandKey) => {
                                brandsSet.add(category.subsubcategories[typeKey].manufacturers[brandKey].slug);
                            });
                        });
                    }

                    Array.from(brandsSet).forEach((brandSlug) =>
                        urls.push({
                            url: concatWithProd(`${APP_ROUTE.catalog}/${category.slug}/${brandSlug}`),
                            lastModified: new Date(),
                            priority: 0.8,
                        }),
                    );
                }
            });
        }

        if (!!selections && Object.keys(selections).length > 0) {
            Object.keys(selections).forEach((selectionId) =>
                urls.push({
                    url: concatWithProd(`${APP_ROUTE.selections}/${selectionId}`),
                    lastModified: new Date(),
                    priority: 0.9,
                }),
            );
        }
    }

    STATIC_PAGES.forEach((page) =>
        urls.push({
            url: concatWithProd(page),
            lastModified: new Date(),
            priority: 0.7,
        }),
    );

    return urls;
};

export default sitemap;
