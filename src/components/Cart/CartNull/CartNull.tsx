import React from 'react';

import { Button } from '@/shared/ui';

import './styles.sass';

export const CartNull = () => (
    <div className="cart-null">
        <p className="cart-null__title">Ваша корзина пока пуста</p>
        <Button label="Перейти к оформлению" className="cart-null__button" disabled wide />
    </div>
);
