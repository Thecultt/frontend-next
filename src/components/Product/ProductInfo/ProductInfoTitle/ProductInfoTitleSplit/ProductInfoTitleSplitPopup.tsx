import React from 'react';

import LogoSplit from '@/assets/images/logo-split.svg';

import { BaseImage } from '@/components';

import { EXTERNAL_LINKS } from '@/constants/routes';

interface ProductInfoTitleSplitPopupProps {
    price: number;
    onClosePopup: () => void;
    state: boolean;
}

const ProductInfoTitleSplitPopup: React.FC<ProductInfoTitleSplitPopupProps> = ({ price, onClosePopup, state }) => {
    React.useEffect(() => {
        const YaPay = window.YaPay;

        if (!YaPay) {
            return;
        }

        const paymentData = {
            env: YaPay.PaymentEnv.Sandbox,
            version: 4,
            currencyCode: YaPay.CurrencyCode.Rub,
            merchantId: process.env.NEXT_PUBLIC_YANDEX_SPLIT_MERCHANT_ID,
            totalAmount: `${price}.00`,
            availablePaymentMethods: ['SPLIT'],
        };

        // Создаем платежную сессию
        YaPay.createSession(paymentData, {
            onPayButtonClick: () => {},
            onFormOpenError: () => {},
        })
            .then((paymentSession: any) => {
                // Показываем кнопку Яндекс Пэй на странице.
                paymentSession.mountWidget(document.querySelector('#product-content-info-split-popup-widget'), {
                    widgetType: YaPay.WidgetType.Info,
                });
            })
            .catch((err: any) => {
                console.log(err);
                // Не получилось создать платежную сессию.
            });
    }, [state]);

    return (
        <div className="product-content-info-split-popup">
            <BaseImage src={LogoSplit.src} alt="Яндекс Сплит" className="product-content-info-split-popup__logo" />

            <p className="product-content-info-split-popup__title">Разделите оплату на несколько месяцев в сплит</p>

            <p className="product-content-info-split-popup__description">
                Сплит делит оплату на&nbsp;части&nbsp;&mdash; платежи можно вносить постепенно. Это не&nbsp;кредит
                и&nbsp;не&nbsp;рассрочка, поэтому у&nbsp;него нет анкет, проверки кредитной истории и&nbsp;скрытых
                условий. А&nbsp;покупку вы&nbsp;получите после первого платежа&nbsp;&mdash; то&nbsp;есть сразу.
            </p>

            <a href={EXTERNAL_LINKS.yandexSplit} target="__blank" className="product-content-info-split-popup__limit">
                Узнать свой лимит
            </a>

            <div className="product-content-info-split-popup-widget" id="product-content-info-split-popup-widget"></div>

            <div className="product-content-info-split-popup-greater-split">
                <h3 className="product-content-info-split-popup-greater-split__title">Улучшенный сплит</h3>
                <p className="product-content-info-split-popup-greater-split__subtitle">
                    Хотите расширить лимит и повысить вероятность одобрения? Вы можете оформить улучшенный Сплит
                </p>
                <a
                    href={EXTERNAL_LINKS.yandexSplit}
                    target="__blank"
                    className="product-content-info-split-popup-greater-split__link"
                >
                    Оформить Улучшенный Сплит
                </a>
            </div>

            <button className="btn product-content-info-split-popup__btn" onClick={onClosePopup}>
                Вернутся к товару
            </button>
        </div>
    );
};

export default ProductInfoTitleSplitPopup;
