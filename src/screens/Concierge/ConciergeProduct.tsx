'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import {
    fetchBuyerTheCulttProduct,
    sendBuyerTheCulttProductApplication,
    setBuyerTheCulttProductIsSendFormProductPage,
} from '@/redux/actions/buyer_thecultt';
import { ConciergeProductInfo, ConciergeProductForm, PageLoader, Popup } from '@/components';

const BuyerTheCulttProduct: React.FC = () => {
    const dispatch = useDispatch();

    const { id } = useParams();

    const { isLoadedProduct, product, isSendFormProductPageSuccess } = useTypedSelector(
        ({ buyer_thecultt }) => buyer_thecultt,
    );

    React.useEffect(() => {
        dispatch(fetchBuyerTheCulttProduct(id as string) as any);
    }, []);

    const onSubmitProductApplication = (data: any) => {
        dispatch(sendBuyerTheCulttProductApplication(data, parseInt(id as string)) as any);
    };

    return (
        <section className="buyer-thecultt-product">
            <Popup
                state={isSendFormProductPageSuccess}
                setState={() => dispatch(setBuyerTheCulttProductIsSendFormProductPage(false))}
            >
                <div className="buyer-thecultt-product-success">
                    <h4 className="buyer-thecultt-product-success__title">Спасибо! Ваша заявка принята</h4>
                    <p className="buyer-thecultt-product-success__subtitle">
                        Скоро мы свяжемся с вами в WhatsApp <br /> по указанному номеру телефона.
                    </p>
                </div>
            </Popup>

            <div className="container">
                <div className="buyer-thecultt-product-wrapper">
                    <button className="buyer-thecultt-product__back" onClick={() => window.history.back()}>
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

                            <ConciergeProductForm onSubmit={onSubmitProductApplication} />
                        </>
                    ) : (
                        <PageLoader />
                    )}
                </div>
            </div>
        </section>
    );
};

export default BuyerTheCulttProduct;
