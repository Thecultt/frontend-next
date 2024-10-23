'use client';

import React from 'react';
import { useFormikContext } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import dayjs from 'dayjs';

import { DEFAULT_TRANSITION } from '@/constants/animation';
import { DELIVERY_ITEM } from '@/constants/delivery';
import { PAYMENT_ITEM, PAYMENT_ITEMS } from '@/constants/pay';
import { pushDataLayer } from '@/functions/pushDataLayer';
import { useOrder } from '@/hooks/order/useOrder';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useDebounce } from '@/hooks/useDebounce';
import { setDeliveryPrice, setTempForm } from '@/redux/slices/order/slice';

import { OrderFormContacts } from './OrderFormContacts/OrderFormContacts';
import { OrderFormLocation } from './OrderFormLocation/OrderFormLocation';
import { OrderFormDelivery } from './OrderFormDelivery/OrderFormDelivery';
import { OrderFormAddress } from './OrderFormAddress/OrderFormAddress';
import { OrderFormPayment } from './OrderFormPayment/OrderFormPayment';

import { IOrderFormValues } from '../types';

import './styles.sass';

export const OrderForm = () => {
    const dispatch = useAppDispatch();

    const { values, setFieldValue } = useFormikContext<IOrderFormValues>();
    const { checkedCartItems } = useOrder();

    const debouncedValues = useDebounce(values, 1000);

    React.useEffect(() => {
        if (values.delivery === DELIVERY_ITEM.withFittingMoscow.id) {
            setFieldValue('payment', PAYMENT_ITEM.afterFitting.id);
        }

        const currentDelivery = Object.values(DELIVERY_ITEM).find((item) => item.id === values.delivery);
        if (currentDelivery) {
            dispatch(setDeliveryPrice(currentDelivery.price));
            pushDataLayer('add_shipping_info', {
                shipping_tier: `${currentDelivery.title}|${dayjs().format('DD.MM.YYYY')}|${currentDelivery.price}`,
                items: checkedCartItems.map((item, index) => ({
                    item_name: item.name,
                    item_id: `${item.id}`,
                    price: `${item.price}`,
                    item_brand: item.manufacturer,
                    item_category: item.category,
                    item_category2: item.subcategory,
                    item_category3: '-',
                    item_category4: '-',
                    item_list_name: 'Search Results',
                    item_list_id: item.article,
                    index,
                    quantity: 1,
                })),
            });
        }
    }, [values.delivery]);

    React.useEffect(() => {
        const currentPayment = PAYMENT_ITEMS.find((item) => item.id === values.payment);
        if (currentPayment) {
            pushDataLayer('add_payment_info', {
                payment_type: currentPayment.title,
                items: checkedCartItems.map((item, index) => ({
                    item_name: item.name,
                    item_id: `${item.id}`,
                    price: `${item.price}`,
                    item_brand: item.manufacturer,
                    item_category: item.category,
                    item_category2: item.subcategory,
                    item_category3: '-',
                    item_category4: '-',
                    item_list_name: 'Search Results',
                    item_list_id: item.article,
                    index,
                    quantity: 1,
                })),
            });
        }
    }, [values.payment]);

    React.useEffect(() => {
        dispatch(setTempForm(debouncedValues));
    }, [debouncedValues]);

    return (
        <div className="order-form">
            <OrderFormContacts />
            <OrderFormLocation />
            <AnimatePresence mode="wait" initial={false}>
                {(debouncedValues.country || values.country) && (
                    <motion.div
                        key="OrderFormDelivery"
                        initial={{ opacity: 0, y: -10 }}
                        exit={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={DEFAULT_TRANSITION}
                    >
                        <OrderFormDelivery />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence mode="wait" initial={false}>
                {(debouncedValues.country || values.country) && values.delivery !== DELIVERY_ITEM.pickup.id && (
                    <motion.div
                        key="OrderFormAddress"
                        initial={{ opacity: 0, y: -10 }}
                        exit={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={DEFAULT_TRANSITION}
                    >
                        <OrderFormAddress />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence mode="wait" initial={false}>
                {(debouncedValues.country || values.country) &&
                    values.delivery !== DELIVERY_ITEM.withFittingMoscow.id && (
                        <motion.div
                            key="OrderFormPayment"
                            initial={{ opacity: 0, y: -10 }}
                            exit={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={DEFAULT_TRANSITION}
                        >
                            <OrderFormPayment />
                        </motion.div>
                    )}
            </AnimatePresence>
        </div>
    );
};
