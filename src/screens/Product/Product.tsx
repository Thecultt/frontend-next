'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchProductByArticle } from '@/redux/actions/products';
import {
    ProductInfoBreadCrumbs,
    ProductCover,
    ProductInfo,
    CatalogProductsSection,
    ProductExchange,
    PageLoader,
} from '@/components';
import { NotFound } from '@/screens';

const Product: React.FC = () => {
    const dispatch = useDispatch();
    const { article } = useParams<{ article?: string }>();

    const { itemByArticle, itemByArticleIsLoaded } = useTypedSelector(({ products }) => products);

    React.useEffect(() => {
        if (article) {
            dispatch(fetchProductByArticle(article) as any);
        }

        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, [article]);

    return itemByArticleIsLoaded ? (
        itemByArticle.article !== '' ? (
            <>
                <section className="product">
                    <div className="container">
                        <div className="product-wrapper">
                            <ProductInfoBreadCrumbs
                                category={itemByArticle.category}
                                brand={itemByArticle.manufacturer}
                                model={itemByArticle.name}
                            />

                            <div className="product-content">
                                <ProductCover {...itemByArticle} />

                                <ProductInfo {...itemByArticle} />
                            </div>
                        </div>
                    </div>
                </section>

                <CatalogProductsSection title="Может быть интересно" />

                <ProductExchange />
            </>
        ) : (
            <NotFound />
        )
    ) : (
        <PageLoader />
    );
};

export default Product;
