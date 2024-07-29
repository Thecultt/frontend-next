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
    Popup,
    ProductInfoTitleBoutiquePopup,
    ProductInfoTitlePartnerPopup,
} from '@/components';
import { NotFound } from '@/screens';

const Product: React.FC = () => {
    const dispatch = useDispatch();
    const { article } = useParams<{ article?: string }>();

    const { itemByArticle, itemByArticleIsLoaded } = useTypedSelector(({ products }) => products);

    const [boutiquePopupVisible, setBoutiquePopupVisible] = React.useState(false);
    const [partnerPopupVisible, setPartnerPopupVisible] = React.useState(false);

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
                                <ProductCover
                                    product={itemByArticle}
                                    setBoutiquePopupVisible={setBoutiquePopupVisible}
                                    setPartnerPopupVisible={setPartnerPopupVisible}
                                />
                                <ProductInfo
                                    product={itemByArticle}
                                    setBoutiquePopupVisible={setBoutiquePopupVisible}
                                    setPartnerPopupVisible={setPartnerPopupVisible}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <CatalogProductsSection title="Может быть интересно" />
                </div>

                <ProductExchange />

                <Popup
                    state={boutiquePopupVisible}
                    setState={() => setBoutiquePopupVisible(!boutiquePopupVisible)}
                    center
                >
                    <ProductInfoTitleBoutiquePopup />
                </Popup>
                <Popup state={partnerPopupVisible} setState={() => setPartnerPopupVisible(!partnerPopupVisible)} center>
                    <ProductInfoTitlePartnerPopup />
                </Popup>
            </>
        ) : (
            <NotFound />
        )
    ) : (
        <PageLoader />
    );
};

export default Product;
