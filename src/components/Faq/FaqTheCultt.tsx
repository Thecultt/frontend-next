import React from 'react';

import { EXTERNAL_LINKS } from '@/constants/routes';

const FaqTheCultt: React.FC = () => {
    return (
        <div className="faq-main-content-all">
            <div className="faq-main-content-all-col-wrapper">
                <div className="faq-main-content-all-col">
                    <h4 className="faq-main-content-all-col__title">Условия продажи THE CULTT</h4>

                    <a
                        href="https://storage.yandexcloud.net/the-cultt-docs/03.05.2024/Пользовательское_соглашение_для_интернет_магазина_с_Ботом 23.04.24.docx.pdf"
                        className="faq-main-content-all-col__link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Пользовательское соглашение
                    </a>
                    <a
                        href="https://storage.yandexcloud.net/the-cultt-docs/17.07.2024/Оферта для продавца 120724.docx.pdf"
                        className="faq-main-content-all-col__link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Публичная оферта продавца
                    </a>
                    <a
                        href="https://storage.yandexcloud.net/the-cultt-docs/17.07.2024/Оферта для покупателя 120724.docx.pdf"
                        className="faq-main-content-all-col__link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Публичная оферта покупателя
                    </a>
                    <a
                        href="https://storage.yandexcloud.net/the-cultt-docs/03.05.2024/%D0%A3%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F%20%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%B0%20The%20Cultt.docx.pdf"
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
