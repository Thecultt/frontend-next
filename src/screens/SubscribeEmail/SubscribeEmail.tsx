'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { Popup, SubscribeEmailForm } from '@/components';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { sendSubscribeEmail, setIsSendSubscribeEmail } from '@/redux/actions/subscribe_email';

import SubscribeEmailImage from '@/assets/images/subscribe-email/subscribe-email-image.jpg';

const SubscribeEmail: React.FC = () => {
    const dispatch = useDispatch();

    const { isSend } = useTypedSelector(({ subscribe_email }) => subscribe_email);

    const onSubmit = (data: any) => {
        dispatch(sendSubscribeEmail(data) as any);
    };

    return (
        <section className="subscribe-email">
            <Popup state={isSend} setState={() => dispatch(setIsSendSubscribeEmail(!isSend))}>
                <div className="subscribe-email-message">
                    <h4 className="subscribe-email-message__title">Спасибо за подписку!</h4>
                    <p className="subscribe-email-message__subtitle">
                        Отправили письмо с полезным гайдом на указанную почту.
                    </p>
                </div>
            </Popup>

            <div className="container">
                <div className="subscribe-email-wrapper">
                    <div
                        className="subscribe-email-image"
                        style={{
                            backgroundImage: `url("${SubscribeEmailImage.src}")`,
                        }}
                    />

                    <div className="subscribe-email-text">
                        <h2 className="subscribe-email-text__title">
                            Дарим <span>полезный гайд</span> по уходу за сумками за подписку на рассылку
                        </h2>

                        <p className="subscribe-email-text__description">
                            <span>Если вы хотите продать</span> свой аксессуар, ищите в гайде рекомендации по тому, как
                            увеличить стоимость и скорость продажи.
                        </p>

                        <p className="subscribe-email-text__description">
                            <span>Планируете купить</span> — расскажем, как правильно ухаживать за новой
                            покупкой. Оставьте свой e-mail, чтобы мы прислали вам бесплатные гайды от экспертов THE
                            CULTT.
                        </p>

                        <SubscribeEmailForm onSubmit={onSubmit} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscribeEmail;
