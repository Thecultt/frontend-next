import React from 'react';

import LogoSplit from '@/assets/images/logo-split.svg';

interface ProductInfoTitleSplitPopupProps {
    price: number;
    onClosePopup: () => void;
}

const ProductInfoTitleSplitPopup: React.FC<ProductInfoTitleSplitPopupProps> = ({ price, onClosePopup }) => {
    const [initWidget, setInitWidget] = React.useState(false);

    React.useEffect(() => {
        if (!initWidget) {
            const YaPay = window.YaPay;

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

            setInitWidget(() => true);
        }
    }, []);

    return (
        <div className="product-content-info-split-popup">
            <img src={LogoSplit.src} alt="Яндекс Сплит" className="product-content-info-split-popup__logo" />

            <p className="product-content-info-split-popup__title">Разделите оплату на несколько месяцев в сплит</p>

            <p className="product-content-info-split-popup__description">
                Сплит делит оплату на части — платежи можно вносить постепенно. Это не кредит и не рассрочка, поэтому у
                него нет анкет, проверки кредитной истории и скрытых условий. А покупку вы получите после первого
                платежа — то есть сразу.
            </p>

            <div className="product-content-info-split-popup-widget" id="product-content-info-split-popup-widget"></div>

            <button className="btn product-content-info-split-popup__btn" onClick={onClosePopup}>
                Вернутся к товару
            </button>
        </div>
    );
};

export default ProductInfoTitleSplitPopup;
