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
} from '@/components';
import { PageLoader } from '@/shared/ui';
import { NotFound } from '@/screens';
import { usePopupInfo } from '@/hooks/usePopupInfo';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';

const Product: React.FC = () => {
    const dispatch = useDispatch();
    const { article } = useParams<{ article?: string }>();

    const { itemByArticle, itemByArticleIsLoaded } = useTypedSelector(({ products }) => products);

    const { openPopupInfo } = usePopupInfo();

    const showBoutiquePopup = () => {
        openPopupInfo({
            title: 'Лот из бутика',
            content:
                'Этот лот новый и не был в использовании. Мы получили его напрямую из бутика-партнера или от частного байера — в таком состоянии, в каком вы бы купили его в бутике бренда.',
            btn: {
                label: 'Смотреть все',
                href: getCatalogFiltersUrl({ boutique: true }),
            },
        });
    };

    const showPartnerPopup = () => {
        openPopupInfo({
            title: 'Только онлайн',
            content:
                'Этот лот находится у нашего партнера и недоступен для примерки. Доставка займет 5-7 рабочих дней.',
        });
    };

    React.useEffect(() => {
        if (article) {
            dispatch(fetchProductByArticle(article) as any);
        }

        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, [article]);

    return itemByArticleIsLoaded ? (
        itemByArticle && itemByArticle.article ? (
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
                                <ProductCover
                                    product={itemByArticle}
                                    onBoutiquePopupVisible={showBoutiquePopup}
                                    onPartnerPopupVisible={showPartnerPopup}
                                />
                                <ProductInfo
                                    product={itemByArticle}
                                    onBoutiquePopupVisible={showBoutiquePopup}
                                    onPartnerPopupVisible={showPartnerPopup}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <CatalogProductsSection title="Может быть интересно" />
                </div>

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
