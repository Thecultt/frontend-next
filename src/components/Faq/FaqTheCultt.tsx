import React from 'react';

import { EXTERNAL_LINKS } from '@/constants/routes';

const FaqTheCultt: React.FC = () => {
    return (
        <div className="faq-main-content-all">
            <div className="faq-main-content-all-col-wrapper">
                <div className="faq-main-content-all-col">
                    <h4 className="faq-main-content-all-col__title">Условия продажи THE CULTT</h4>

                    <a
                        href={EXTERNAL_LINKS.userAgreement}
                        className="faq-main-content-all-col__link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Пользовательское соглашение
                    </a>
                    <a
                        href={EXTERNAL_LINKS.publicOfferSeller}
                        className="faq-main-content-all-col__link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Публичная оферта продавца
                    </a>
                    <a
                        href={EXTERNAL_LINKS.publicOfferBuyer}
                        className="faq-main-content-all-col__link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Публичная оферта покупателя
                    </a>
                    <a
                        href={EXTERNAL_LINKS.termsOfUse}
                        className="faq-main-content-all-col__link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Условия использования сервиса THE CULTT
                    </a>
                </div>

                <div className="faq-main-content-all-col">
                    <h4 className="faq-main-content-all-col__title">Условия обработки персональных данных</h4>

                    <a
                        href={EXTERNAL_LINKS.personalData}
                        className="faq-main-content-all-col__link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Положение об обработке данных THE CULTT
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FaqTheCultt;
