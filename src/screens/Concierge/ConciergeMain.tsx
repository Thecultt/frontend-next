'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { usePopupInfo } from '@/hooks/usePopupInfo';
import { fetchConciergeCategories, setConciergeProductIsSendFormCustomProduct } from '@/redux/actions/concierge';
import {
    ConciergeMainBanner,
    ConciergeMainCatalog,
    ConciergeMainService,
    ConciergeMainApplication,
} from '@/components';

const ConciergeMain: React.FC = () => {
    const dispatch = useDispatch();

    const { isSendFormCustomProductSuccess } = useTypedSelector(({ concierge }) => concierge);

    const { openPopupInfo } = usePopupInfo();

    const scrollToForm = () => {
        const block = document.getElementById('concierge-application');
        block?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    React.useEffect(() => {
        dispatch(fetchConciergeCategories() as any);
    }, []);

    React.useEffect(() => {
        if (isSendFormCustomProductSuccess) {
            openPopupInfo({
                title: (
                    <>
                        Спасибо! <br /> Ваша заявка принята
                    </>
                ),
                content: (
                    <p className="concierge-product-success__subtitle">
                        Скоро мы свяжемся с вами в WhatsApp <br /> по указанному номеру телефона.
                    </p>
                ),
                callbackClose: () => dispatch(setConciergeProductIsSendFormCustomProduct(false)),
            });
        }
    }, [isSendFormCustomProductSuccess]);

    return (
        <section className="concierge">
            <div className="container">
                <div className="concierge-wrapper">
                    <ConciergeMainBanner scrollToForm={scrollToForm} />
                    <ConciergeMainCatalog scrollToForm={scrollToForm} />
                    <ConciergeMainService />
                    <ConciergeMainApplication />
                </div>
            </div>
        </section>
    );
};

export default ConciergeMain;
