'use client';

import React from 'react';

import { useAuthUser } from '@/hooks/useAuthUser';
import { PageLoader, OrderForm, OrderProducts } from '@/components';
import { pushDataLayer } from '@/functions/pushDataLayer';
import { useOrder } from '@/hooks/order/useOrder';

const Order: React.FC = () => {
    const { isLoggedIn, isLoaded: isLoadedUser } = useAuthUser();
    const { cartItems, isJewelry } = useOrder();

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
        <section className="order" key={`${isJewelry}`}>
            <div className="container">
                <div className="order-wrapper">
                    {isLoggedIn && !isLoadedUser ? (
                        <div className="order-loader">
                            <PageLoader />
                        </div>
                    ) : (
                        <OrderForm />
                    )}

                    <OrderProducts />
                </div>
            </div>
        </section>
    );
};

export default Order;
