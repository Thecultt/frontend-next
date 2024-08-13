'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchConciergeCategories, setConciergeProductIsSendFormCustomProduct } from '@/redux/actions/concierge';
import {
    ConciergeMainBanner,
    ConciergeMainCatalog,
    ConciergeMainService,
    ConciergeMainApplication,
    Popup,
} from '@/components';

import NoSsr from '@/components/NoSsr/NoSsr';

const ConciergeMain: React.FC = () => {
    const dispatch = useDispatch();

    const { isSendFormCustomProductSuccess } = useTypedSelector(({ concierge }) => concierge);

    React.useEffect(() => {
        dispatch(fetchConciergeCategories() as any);
    }, []);

    const scrollToForm = () => {
        const block = document.getElementById('concierge-application');
        block?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
        <section className="concierge">
            <Popup
                state={isSendFormCustomProductSuccess}
                setState={() => dispatch(setConciergeProductIsSendFormCustomProduct(false))}
            >
                <div className="concierge-product-success">
                    <h4 className="concierge-product-success__title">Спасибо! Ваша заявка принята</h4>
                    <p className="concierge-product-success__subtitle">
                        Скоро мы свяжемся с вами в WhatsApp <br /> по указанному номеру телефона.
                    </p>
                </div>
            </Popup>

            <div className="container">
                <div className="concierge-wrapper">
                    <NoSsr>
                        <ConciergeMainBanner scrollToForm={scrollToForm} />
                    </NoSsr>

                    <ConciergeMainCatalog scrollToForm={scrollToForm} />

                    <ConciergeMainService />

                    <ConciergeMainApplication />
                </div>
            </div>
        </section>
    );
};

export default ConciergeMain;
