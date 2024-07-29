import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';

import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { APP_ROUTE } from '@/constants/routes';
import { MEDIA_SIZES } from '@/constants/styles';

interface ProductInfoBreadCrumbsProps {
    category: string;
    brand: string;
    model: string;
}

const ProductInfoBreadCrumbs: React.FC<ProductInfoBreadCrumbsProps> = ({ category, brand, model }) => {
    const router = useRouter();
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    return (
        <div className="product-content-info-bread-crumbs">
            {isMobile ? (
                <button type="button" className="product-content-info-bread-crumbs-media-button" onClick={router.back}>
                    <svg
                        className="product-content-info-bread-crumbs-media-button__icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 18L9 12L15 6"
                            stroke="#202020"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="product-content-info-bread-crumbs-media-button__text">Вернуться</span>
                </button>
            ) : (
                <>
                    <button className="product-content-info-bread-crumbs-back" onClick={router.back}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 8H1M1 8L8 15M1 8L8 1"
                                stroke="#070707"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <Link href={APP_ROUTE.catalog} className="product-content-info-bread-crumbs__item">
                        Главная страница
                    </Link>

                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.75 0.5L4.75 4.5L0.75 8.5"
                            stroke="#202020"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <Link
                        href={getCatalogFiltersUrl({
                            categories: [category],
                            sort: 'a',
                        })}
                        className="product-content-info-bread-crumbs__item"
                    >
                        {category}
                    </Link>

                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.75 0.5L4.75 4.5L0.75 8.5"
                            stroke="#202020"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <Link
                        href={getCatalogFiltersUrl({
                            categories: [category],
                            brands: [brand],
                            sort: 'a',
                        })}
                        className="product-content-info-bread-crumbs__item"
                    >
                        {brand}
                    </Link>

                    <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.75 0.5L4.75 4.5L0.75 8.5"
                            stroke="#202020"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <Link
                        href={getCatalogFiltersUrl({
                            categories: [category],
                            brands: [brand],
                            models: [model],
                            sort: 'a',
                        })}
                        className="product-content-info-bread-crumbs__item"
                    >
                        {model}
                    </Link>
                </>
            )}
        </div>
    );
};

export default ProductInfoBreadCrumbs;
