import React from 'react';

import { FooterEmailSubscribeForm } from '@/components';
import { sendMindbox } from '@/functions/mindbox';

import { IFormValues } from './validate';

interface Props {
    id?: string;
}

const FooterEmailSubscribe: React.FC<Props> = ({ id }) => {
    const [isSubmit, setIsSubmit] = React.useState(false);

    const handleSubmit = async (data: IFormValues) => {
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
        <div className="footer-email" id={id}>
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
                            <h4 className="footer-email-text__title">Подпишитесь и получите 2000₽ на первую покупку</h4>
                            <p className="footer-email-text__subtitle">
                                Истории культовых сумок и брендов, специальные предложения и промокод на 2000₽ для новых
                                подписчиков — в рассылке THE CULTT
                            </p>
                        </div>

                        <FooterEmailSubscribeForm onSubmit={handleSubmit} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default FooterEmailSubscribe;
