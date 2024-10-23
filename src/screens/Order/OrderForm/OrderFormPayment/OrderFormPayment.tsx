'use client';

import React from 'react';
import { useFormikContext } from 'formik';

import { FormikRadio } from '@/shared/form';
import { usePopupInfo } from '@/hooks/usePopupInfo';
import { useOrder } from '@/hooks/order/useOrder';
import { PAYMENT_ITEM, PAYMENT_ITEMS } from '@/constants/pay';
import { YANDEX_SPLIT_LIMIT } from '@/constants/app';
import { ProductInfoTitleSplitPopup } from '@/components';

import { IOrderFormValues } from '../../types';

export const OrderFormPayment = () => {
    const { values, setFieldValue } = useFormikContext<IOrderFormValues>();

    const { cartSum, isJewelry } = useOrder();
    const { openPopupInfo } = usePopupInfo();

    const payments = React.useMemo(() => {
        if (isJewelry) {
            return [PAYMENT_ITEM.card];
        }

        return cartSum > YANDEX_SPLIT_LIMIT
            ? PAYMENT_ITEMS.filter((item) => item.id !== PAYMENT_ITEM.yandexSplit.id)
            : PAYMENT_ITEMS;
    }, [cartSum, isJewelry]);

    const openSplitPopup = () => {
        openPopupInfo({
            content: <ProductInfoTitleSplitPopup price={cartSum} />,
            btn: { label: 'Вернуться к выбору оплаты' },
        });
    };

    React.useEffect(() => {
        if (!payments.map((item) => item.id).includes(values.payment)) {
            setFieldValue('payment', PAYMENT_ITEM.card.id);
        }
    }, [payments]);

    return (
        <div className="order-form__group">
            <h3 className="order-form__title">Варианты оплаты</h3>

            {payments.map((payment) => (
                <div className="order-form__column" key={payment.id}>
                    <div className="order-form__field">
                        <FormikRadio
                            name="payment"
                            value={payment.id}
                            onInfoClick={payment.id === PAYMENT_ITEM.yandexSplit.id ? openSplitPopup : undefined}
                            defaultChildrenStyles
                            wide
                        >
                            {payment.title}
                        </FormikRadio>
                    </div>

                    {!!payment.description && values.payment === payment.id && (
                        <p
                            className="order-form__field-description"
                            dangerouslySetInnerHTML={{ __html: payment.description }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};
