'use client';

import React from 'react';
import isEqual from 'lodash.isequal';

import { useOrder } from '@/hooks/order/useOrder';
import { useCart } from '@/hooks/catalog/useCart';
import { Checkbox } from '@/shared/ui';
import { CartProductItem } from '@/components';

import './styles.sass';

export const OrderCart = () => {
    const { toggleChecked, removeFromCart, checkAvailabilityCart } = useCart();
    const { cartItems, availableCartItems, checkedCartItems } = useOrder();

    const isCheckedAll =
        availableCartItems.length === 0
            ? false
            : isEqual(
                  availableCartItems.map((item) => item.id),
                  checkedCartItems.map((item) => item.id),
              );

    const checkAllItems = () => {
        availableCartItems.forEach((item) => {
            if (!item.checked) {
                toggleChecked(item.article);
            }
        });
    };

    const uncheckAllItems = () => {
        checkedCartItems.forEach((item) => {
            toggleChecked(item.article);
        });
    };

    React.useEffect(() => {
        checkAvailabilityCart(cartItems);
    }, []);

    return (
        <div className="order-cart">
            <div className="order-cart__header">
                <h3 className="order-cart__title">Ваш заказ:</h3>
            </div>

            <div className="order-products-check-all">
                <Checkbox
                    disabled={availableCartItems.length === 0}
                    checked={isCheckedAll}
                    onChange={isCheckedAll ? uncheckAllItems : checkAllItems}
                >
                    <span className="order-products-check-all__title">Выделить все</span>
                </Checkbox>
            </div>

            <div className="order-cart__list">
                {cartItems.map((item) => (
                    <CartProductItem
                        key={item.id}
                        data={item}
                        removeDisabled={cartItems.length === 1 && !!item.availability && !item.is_trial}
                        onCheck={() => toggleChecked(item.article)}
                        onRemove={() => removeFromCart(item.article)}
                    />
                ))}
            </div>
        </div>
    );
};
