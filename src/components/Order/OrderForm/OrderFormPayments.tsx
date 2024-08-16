import React from 'react';
import { Field } from 'redux-form';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { RenderRadioSelect, Popup, ProductInfoTitleSplitPopup } from '@/components';
import { PAYMENTS_NAMES, PAYMENTS_METHODS } from '@/constants/order';
import { YANDEX_SPLIT_LIMIT } from '@/constants/app';

interface OrderFormPaymentsProps {
    paymentValue: string;
}

const OrderFormPayments: React.FC<OrderFormPaymentsProps> = ({ paymentValue }) => {
    // const { sum } = useTypedSelector(({ order }) => order)
    const { items } = useTypedSelector(({ cart }) => cart);

    const [initWidget, setInitWidget] = React.useState(false);
    const [isStateSplitPopup, setIsStateSplitPopup] = React.useState(false);

    const totalPrice = Object.keys(items)
        .map((article) => items[article])
        .filter((item) => item.availability && !item.is_trial && item.checked)
        .map((item) => item.price).length
        ? Object.keys(items)
              .map((article) => items[article])
              .filter((item) => item.availability && !item.is_trial && item.checked)
              .map((item) => item.price)
              .reduce((a: number, b: number) => a + b)
        : 0;

    React.useEffect(() => {
        if (!initWidget && paymentValue === 'Яндекс Сплит') {
            const YaPay = window.YaPay;

            const paymentData = {
                env: YaPay.PaymentEnv.Sandbox,
                version: 4,
                currencyCode: YaPay.CurrencyCode.Rub,
                merchantId: process.env.NEXT_PUBLIC_YANDEX_SPLIT_MERCHANT_ID,
                totalAmount: `${totalPrice}.00`,
                availablePaymentMethods: ['SPLIT'],
            };

            // Создаем платежную сессию
            YaPay.createSession(paymentData, {
                onPayButtonClick: () => {},
                onFormOpenError: () => {},
            })
                .then((paymentSession: any) => {
                    // Показываем кнопку Яндекс Пэй на странице.
                    paymentSession.mountWidget(document.querySelector('#order-form-block-payments-split-widget'), {
                        widgetType: YaPay.WidgetType.Info,
                    });
                })
                .catch((err: any) => {
                    console.log(err);
                    // Не получилось создать платежную сессию.
                });

            setInitWidget(true);
        } else {
            setInitWidget(false);
        }
    }, [paymentValue]);

    return (
        <>
            <Popup state={isStateSplitPopup} setState={() => setIsStateSplitPopup(!isStateSplitPopup)} borderBlack>
                <ProductInfoTitleSplitPopup
                    price={totalPrice}
                    onClosePopup={() => setIsStateSplitPopup(!isStateSplitPopup)}
                    state={isStateSplitPopup}
                />
            </Popup>

            <div className="order-form-block order-form-block-payments">
                <h3 className="order-form-block__title">Варианты оплаты</h3>

                <div className="order-form-block-checkboxs-wrapper">
                    {Object.keys(PAYMENTS_METHODS).map((method, index) =>
                        totalPrice > YANDEX_SPLIT_LIMIT &&
                        PAYMENTS_METHODS[method].title === PAYMENTS_NAMES.yandexSplit ? null : (
                            <div className="order-form-block-checkbox" key={`order-form-block-checkbox-${index}`}>
                                <Field
                                    component={RenderRadioSelect}
                                    label={PAYMENTS_METHODS[method].title}
                                    description={PAYMENTS_METHODS[method].description}
                                    type="radio"
                                    name="payment"
                                    value={PAYMENTS_METHODS[method].title}
                                    onClickInfoTag={
                                        PAYMENTS_METHODS[method].title === PAYMENTS_NAMES.yandexSplit
                                            ? () => setIsStateSplitPopup(true)
                                            : null
                                    }
                                />
                            </div>
                        ),
                    )}
                </div>

                {/* {paymentValue === PAYMENTS_NAMES.yandexSplit && totalPrice <= YANDEX_SPLIT_LIMIT ? (
				<div className="order-form-block-payments-split">
					<div
						className="order-form-block-payments-split-widget"
						id="order-form-block-payments-split-widget"
					></div>
				</div>
			) : null} */}
            </div>
        </>
    );
};

export default OrderFormPayments;
