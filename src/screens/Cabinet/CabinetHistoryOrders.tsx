'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchHistoryOrders } from '@/redux/actions/history_orders';
import { CabinetHistoryOrdersItem, CabinetHistoryOrdersNull, PageLoader } from '@/components';
import { sendSubmitOrder } from '@/redux/actions/order';
import orderPay from '@/components/Order/orderPay';

const CabinetHistoryOrders: React.FC = () => {
    const dispatch = useDispatch();

    const { isLoaded } = useTypedSelector(({ history_orders }) => history_orders);
    const historyOrdersItems = useTypedSelector(({ history_orders }) => history_orders.items);

    // const { items } = useTypedSelector(({ cart }) => cart);
    // const { promocode, currentDelivery, isValid } = useTypedSelector(({ order }) => order);
    // const { order: { payment_type, id, cost, products, client_name, client_phone, delivery_type, delivery_address, yandex_split_link } } = useTypedSelector(({ order }) => order)

    const successPayment = (orderId: number) => {
        dispatch(sendSubmitOrder(orderId) as any);
    };

    const onClickPay = ({
        is_jewelry,
        payment_type,
        id,
        cost,
        delivery_price,
        num,
        products,
    }: {
        is_jewelry: boolean;
        payment_type: string;
        id: number;
        cost: string;
        delivery_price: string;
        num: string;
        products: { model_name: string; price: number }[];
    }) => {
        orderPay({
            isJewelry: is_jewelry,
            type: payment_type,
            orderId: id,
            totalPrice: parseInt(cost),
            deliveryPrice: parseInt(delivery_price),
            products: products.map((product) => ({
                name: product.model_name,
                price: product.price,
            })),
            orderNum: num,
            onSuccessCallback: () => successPayment(id),
        });
    };

    React.useEffect(() => {
        dispatch(fetchHistoryOrders() as any);
    }, []);

    if (!isLoaded) {
        return <PageLoader />;
    }

    return (
        <div className="cabinet-content cabinet-history-orders">
            {historyOrdersItems.length ? (
                historyOrdersItems.map((item, index) => (
                    <CabinetHistoryOrdersItem
                        {...item}
                        key={`cabinet-history-orders-${index}`}
                        onClickPay={() =>
                            onClickPay({
                                is_jewelry: !!item.products.find((product) => product.is_jewelry),
                                payment_type: item.payment_type,
                                id: item.id,
                                cost: item.cost,
                                delivery_price: item.delivery_price,
                                num: item.num,
                                products: item.products,
                            })
                        }
                    />
                ))
            ) : (
                <CabinetHistoryOrdersNull />
            )}
        </div>
    );
};

export default CabinetHistoryOrders;
