'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { viewProductPageWithData } from '@/redux/actions/products';
import {
    ProductInfoBreadCrumbs,
    ProductCover,
    ProductInfo,
    ProductExchange,
    ProductRecommendations,
} from '@/components';
import { usePopupInfo } from '@/hooks/usePopupInfo';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { ProductPage } from '@/models/IProduct';

interface Props {
    serverProductData: ProductPage;
}

export const ClientProduct: React.FC<Props> = ({ serverProductData }) => {
    const dispatch = useDispatch();

    const { openPopupInfo } = usePopupInfo();

    const showBoutiquePopup = () => {
        openPopupInfo({
            title: 'Новое от брендов',
            content:
                'Это лоты, полученные от брендов напрямую или из бутиков-партнеров. Все аксессуары в подборке новые и никогда не были в использовании — в таком состоянии, в котором вы бы купили их в магазине бренда.',
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
        dispatch(viewProductPageWithData(serverProductData) as any);

        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, [serverProductData]);

    return (
        <>
            <section className="product">
                <div className="container">
                    <div className="product-wrapper">
                        <ProductInfoBreadCrumbs
                            category={serverProductData.category}
                            categorySlug={serverProductData.category_slug}
                            brand={serverProductData.manufacturer}
                            brandSlug={serverProductData.manufacturer_slug}
                            model={serverProductData.name}
                        />

                        <div className="product-content">
                            <ProductCover
                                product={serverProductData}
                                onBoutiquePopupVisible={showBoutiquePopup}
                                onPartnerPopupVisible={showPartnerPopup}
                            />
                            <ProductInfo
                                product={serverProductData}
                                onBoutiquePopupVisible={showBoutiquePopup}
                                onPartnerPopupVisible={showPartnerPopup}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <ProductRecommendations />
            <ProductExchange />
        </>
    );
};
