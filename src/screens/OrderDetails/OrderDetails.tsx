'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { fetchOrder } from '@/redux/actions/order';
import { OrderStatusSuccess, OrderStatusError } from '@/components';

const OrderStatus: React.FC = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id?: string }>();

    const {
        order: { success_status },
        isLoadedOrder,
    } = useTypedSelector(({ order }) => order);

    React.useEffect(() => {
        dispatch(fetchOrder(parseInt(id as string)) as any);
    }, []);

    return <>{isLoadedOrder ? success_status ? <OrderStatusSuccess /> : <OrderStatusError /> : null}</>;
};

export default OrderStatus;
