'use client';

import React from 'react';
import { Formik } from 'formik';

import { useAuthUser } from '@/hooks/useAuthUser';
import { useOrder } from '@/hooks/order/useOrder';
import { pushDataLayer } from '@/functions/pushDataLayer';
import { Skeleton } from '@/shared/ui';

import { OrderForm } from './OrderForm/OrderForm';
import { OrderSidebar } from './OrderSidebar/OrderSidebar';

import { IOrderFormValues } from './types';
import { INITIAL_VALUES } from './constants';
import { getSchema } from './validate';

import './styles.sass';

const Order: React.FC = () => {
    const { isLoggedIn, isLoaded: isLoadedUser, user } = useAuthUser();
    const { cartItems, cartSum, isJewelry } = useOrder();

    const validationSchema = React.useMemo(() => getSchema({ isJewelry, cartSum }), [isJewelry, cartSum]);

    // TODO default values from session storage
    const initialValues: IOrderFormValues = {
        ...INITIAL_VALUES,
        email: user.email ?? '',
        name: user.fullname ?? '',
        phone: user.phone ?? '',
        passport: user.pasport ?? '',
        promo: !(isLoggedIn && isLoadedUser),
        country: user.country ?? '',
        city: user.city ?? '',
        street: user.street ?? '',
        house: user.house ?? '',
        flat: user.flat ?? '',
        comment: user.comment ?? '',
    };

    // TODO submit
    const handleSubmit = (values: any) => {
        console.log('submit', values);
    };

    React.useEffect(() => {
        pushDataLayer('begin_checkout', {
            items: cartItems.map((item, index) => ({
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
    }, []);

    return (
        <section className="order" key={isJewelry ? 'jewelry' : 'default'}>
            <div className="container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    <div className="order__wrapper">
                        {isLoggedIn && !isLoadedUser ? (
                            <Skeleton className="order__loader" radius={16} />
                        ) : (
                            <OrderForm />
                        )}

                        <OrderSidebar />
                    </div>
                </Formik>
            </div>
        </section>
    );
};

export default Order;
