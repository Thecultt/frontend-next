import React from 'react';

import { FooterEmailSubscribeForm } from '@/components';
import { sendMindbox } from '@/functions/mindbox';

const FooterEmailSubscribe: React.FC = () => {
    const [isSubmit, setIsSubmit] = React.useState(false);

    const onSubmit = async (data: any) => {
        try {
            await sendMindbox('KlientImportPriPodpiskeVFooter', {
                customer: {
                    email: data.email,
                    customFields: {
                        tipKlienta: data.type,
                    },
                    subscriptions: [
                        {
                            pointOfContact: 'Email',
                            isSubscribed: true,
                        },
                    ],
                },
                executionDateTimeUtc: new Date(),
            });

            setIsSubmit(true);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="footer-email">
            <div className="container">
                {isSubmit ? (
                    <div className="footer-email-wrapper">
                        <div className="footer-email-text">
                            <h4 className="footer-email-text__title">Подписка оформлена!</h4>
                            <p className="footer-email-text__subtitle">
                                Промокод на 2000р уже отправлен на вашу почту. Ожидайте полезные письма и предложения
                                для покупателей и продавцов.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="footer-email-wrapper">
                        <div className="footer-email-text">
                            <h4 className="footer-email-text__title">
                                Дарим бонус 2000₽ за подписку на email рассылки
                            </h4>
                            <p className="footer-email-text__subtitle">
                                Подпишитесь на рассылку THE CULTT и получайте полезные письма и предложения для
                                покупателей и продавцов.
                            </p>
                        </div>

                        <FooterEmailSubscribeForm onSubmit={onSubmit} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FooterEmailSubscribe;
