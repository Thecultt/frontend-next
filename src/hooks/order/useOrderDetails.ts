'use client';

import React from 'react';
import { useTypedSelector } from '../useTypedSelector';

export const useOrderDetails = () => {
    const { order } = useTypedSelector(({ order }) => order);

    const isJewelry = React.useMemo(() => order.products.some((product) => product.is_jewelry), [order.products]);

    return { ...order, isJewelry };
};
