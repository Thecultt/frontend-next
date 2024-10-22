'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { usePopupInfo } from '@/hooks/usePopupInfo';
import { fetchConciergeProduct, setConciergeProductIsSendFormProductPage } from '@/redux/actions/concierge';
import { ConciergeProductInfo, ConciergeProductForm } from '@/components';
import { PageLoader } from '@/shared/ui';

type PageParams = {
    id: string;
};

const ConciergeProduct: React.FC = () => {
    const dispatch = useDispatch();
    const { id } = useParams<PageParams>();

    const { openPopupInfo } = usePopupInfo();

    const { isLoadedProduct, product, isSendFormProductPageSuccess } = useTypedSelector(({ concierge }) => concierge);

    React.useEffect(() => {
        dispatch(fetchConciergeProduct(id as string) as any);
    }, []);

    React.useEffect(() => {
        if (isSendFormProductPageSuccess) {
            openPopupInfo({
                title: (
                    <>
                        Спасибо!
                        <br />
                        Ваша заявка принята
                    </>
                ),
                content: (
                    <p className="concierge-product-success__subtitle">
                        Скоро мы свяжемся с вами в WhatsApp
                        <br />
                        по указанному номеру телефона.
                    </p>
                ),
                callbackClose: () => dispatch(setConciergeProductIsSendFormProductPage(false)),
            });
        }
    }, [isSendFormProductPageSuccess]);

    return (
        <section className="concierge-product">
            <div className="container">
                <div className="concierge-product-wrapper">
                    <button className="concierge-product__back" onClick={() => window.history.back()}>
                        <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 1.5L1 7.5L7 13.5"
                                stroke="#202020"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Вернуться
                    </button>

                    {isLoadedProduct ? (
                        <>
                            <ConciergeProductInfo {...product} />

                            <ConciergeProductForm id={id} />

                            <div className="concierge-product-buyer-media">
                                <h3 className="concierge-product-buyer-media__title">
                                    Доставляется через консьерж-сервис
                                </h3>

                                <p className="concierge-product-buyer-media__subtitle">
                                    Этот товар будет доставлен консьержем THE CULTT с официального сайта бренда. Подайте
                                    заявку, чтобы определить актуальную стоимость с учетом доставки.
                                </p>

                                <p className="concierge-product-buyer-media__notoffer">
                                    *предложение не является публичной офертой.
                                </p>
                            </div>
                        </>
                    ) : (
                        <PageLoader />
                    )}
                </div>
            </div>
        </section>
    );
};

export default ConciergeProduct;
