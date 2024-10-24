'use client';

import React from 'react';
import { Formik } from 'formik';

import { useAuthUser } from '@/hooks/useAuthUser';
import { useOrder } from '@/hooks/order/useOrder';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { selectOrderTempForm } from '@/redux/slices/order/selectors';
import { pushDataLayer } from '@/functions/pushDataLayer';
import { Skeleton } from '@/shared/ui';

import { OrderForm } from './OrderForm/OrderForm';
import { OrderSidebar } from './OrderSidebar/OrderSidebar';

import { INITIAL_VALUES } from './constants';
import { getSchema } from './validate';

import './styles.sass';

const Order: React.FC = () => {
    const { isLoggedIn, isLoaded: isLoadedUser, user } = useAuthUser();
    const { cartItems, cartSum, isJewelry } = useOrder();

    const validationSchema = React.useMemo(() => getSchema({ isJewelry, cartSum }), [isJewelry, cartSum]);

    const [initialValues, setInitialValues] = React.useState(INITIAL_VALUES);

    const tempForm = useAppSelector(selectOrderTempForm);

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

    React.useEffect(() => {
        setInitialValues((state) => ({
            ...INITIAL_VALUES,
            ...state,
            email: tempForm?.email ?? user.email ?? '',
            name: tempForm?.name ?? user.fullname ?? '',
            phone: tempForm?.phone ?? user.phone ?? '',
            passport: tempForm?.passport ?? user.pasport ?? '',
            promo: tempForm?.promo ?? !(isLoggedIn && isLoadedUser),
            country: tempForm?.country ?? user.country ?? '',
            city: tempForm?.city ?? user.city ?? '',
            street: tempForm?.street ?? user.street ?? '',
            house: tempForm?.house ?? user.house ?? '',
            flat: tempForm?.flat ?? user.flat ?? '',
            comment: tempForm?.comment ?? user.comment ?? '',
            delivery: tempForm?.delivery ?? INITIAL_VALUES.delivery,
            payment: tempForm?.payment ?? INITIAL_VALUES.payment,
        }));
    }, [isLoadedUser]);

    return (
        <section className="order" key={isJewelry ? 'jewelry' : 'default'}>
            <div className="container">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={() => {}}
                    validateOnMount
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
