'use client';

import React from 'react';
import { useFormikContext } from 'formik';

import { useOrder } from '@/hooks/order/useOrder';
import { formatMoney } from '@/functions/formatMoney';
import { checkPromoCodeIsAvailable } from '@/functions/checkPromoCodeIsAvailable';

import { IOrderFormValues } from '../../types';

import './styles.sass';

export const OrderSummary = () => {
    const { values } = useFormikContext<IOrderFormValues>();
    const { checkedCartItems, cartSum, deliveryPrice, promoCode } = useOrder();

    const promoCodeIsAvailable = React.useMemo(
        () => checkPromoCodeIsAvailable(promoCode, values.payment),
        [promoCode, values.payment],
    );

    const totalSum = React.useMemo(
        () => (promoCodeIsAvailable ? cartSum + deliveryPrice - (promoCode?.discount ?? 0) : cartSum + deliveryPrice),
        [promoCodeIsAvailable, promoCode, cartSum, deliveryPrice],
    );

    return (
        <div className="order-summary">
            <div className="order-summary-item">
                <span className="order-summary-item__title">Товары - {checkedCartItems.length} шт</span>
                <span className="order-summary-item__value">{formatMoney(cartSum)}</span>
            </div>

            {promoCodeIsAvailable && promoCode?.discount && (
                <div className="order-summary-item order-summary-item--green">
                    <span className="order-summary-item__title">Скидка в корзине</span>
                    <span className="order-summary-item__value">- {formatMoney(promoCode.discount)}</span>
                </div>
            )}

            <div className="order-summary-item">
                <span className="order-summary-item__title">Доставка</span>
                <span className="order-summary-item__value">{formatMoney(deliveryPrice)}</span>
            </div>
            <div className="order-summary-item">
                <span className="order-summary-item__title">Итого:</span>
                <span className="order-summary-item__value">{formatMoney(totalSum)}</span>
            </div>
        </div>
    );
};
