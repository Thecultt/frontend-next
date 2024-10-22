'use client';

import React from 'react';
import { useFormikContext } from 'formik';

import { DELIVERY_ITEM } from '@/constants/delivery';
import { PAYMENT_ITEM } from '@/constants/pay';

import { OrderFormContacts } from './OrderFormContacts/OrderFormContacts';
import { OrderFormLocation } from './OrderFormLocation/OrderFormLocation';
import { OrderFormDelivery } from './OrderFormDelivery/OrderFormDelivery';
import { OrderFormAddress } from './OrderFormAddress/OrderFormAddress';
import { OrderFormPayment } from './OrderFormPayment/OrderFormPayment';

import { IOrderFormValues } from '../types';

import './styles.sass';

export const OrderForm = () => {
    const { values, errors, setFieldValue } = useFormikContext<IOrderFormValues>();

    React.useEffect(() => {
        if (values.delivery === DELIVERY_ITEM.withFittingMoscow.id) {
            setFieldValue('payment', PAYMENT_ITEM.afterFitting.id);
        }
    }, [values.delivery]);

    console.log('values', values);
    console.log('errors', errors);

    return (
        <div className="order-form">
            <OrderFormContacts />
            <OrderFormLocation />
            {values.country && values.city && (
                <>
                    <OrderFormDelivery />
                    {values.delivery !== DELIVERY_ITEM.pickup.id && <OrderFormAddress />}
                    {values.delivery !== DELIVERY_ITEM.withFittingMoscow.id && <OrderFormPayment />}
                </>
            )}
        </div>
    );
};
