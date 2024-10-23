'use client';

import React from 'react';

import { OrderCart } from './OrderCart/OrderCart';
import { OrderPromoCode } from './OrderPromoCode/OrderPromoCode';
import { OrderSummary } from './OrderSummary/OrderSummary';
import { OrderSubmit } from './OrderSubmit/OrderSubmit';

import './styles.sass';

export const OrderSidebar = () => (
    <div className="order-sidebar">
        <OrderCart />
        <OrderPromoCode />
        <OrderSummary />
        <OrderSubmit />
    </div>
);
