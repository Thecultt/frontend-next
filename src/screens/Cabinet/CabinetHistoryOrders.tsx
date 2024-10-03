'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useOrder } from '@/hooks/order/useOrder';
import { fetchHistoryOrders } from '@/redux/actions/history_orders';
import { CabinetHistoryOrdersItem, CabinetHistoryOrdersNull } from '@/components';
import { PageLoader } from '@/shared/ui';
import { orderPay } from '@/functions/orderPay';

const CabinetHistoryOrders: React.FC = () => {
    const dispatch = useDispatch();

    const { isLoaded } = useTypedSelector(({ history_orders }) => history_orders);
    const historyOrdersItems = useTypedSelector(({ history_orders }) => history_orders.items);

    const { submitOrder } = useOrder();

    const successPayment = (orderId: number) => {
        submitOrder(orderId);
    };

    const onClickPay = ({
        payment_type,
        id,
        cost,
        delivery_price,
        num,
        products,
    }: {
        payment_type: string;
        id: number;
        cost: string;
        delivery_price: string;
        num: string;
        products: { model_name: string; price: number; is_jewelry?: boolean }[];
    }) => {
        orderPay({
            type: payment_type,
            orderId: id,
            totalPrice: parseInt(cost),
            deliveryPrice: parseInt(delivery_price),
            products: products.map((product) => ({
                name: product.model_name,
                price: product.price,
                is_jewelry: product?.is_jewelry,
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
