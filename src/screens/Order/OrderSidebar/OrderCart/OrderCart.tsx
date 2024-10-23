'use client';

import React from 'react';
import isEqual from 'lodash.isequal';

import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useOrder } from '@/hooks/order/useOrder';
import { useAuthUser } from '@/hooks/useAuthUser';
import { Checkbox } from '@/shared/ui';
import { CartProductItem } from '@/components';
import { changeCheckCartItem, checkAvailabilityCartItems, removeCartItem } from '@/redux/actions/cart';

import './styles.sass';

export const OrderCart = () => {
    const dispatch = useAppDispatch();

    const { user } = useAuthUser();
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
                dispatch(changeCheckCartItem(item.article, true));
            }
        });
    };

    const uncheckAllItems = () => {
        checkedCartItems.forEach((item) => {
            dispatch(changeCheckCartItem(item.article, false));
        });
    };

    const changeCheck = (article: string, status: boolean) => {
        dispatch(changeCheckCartItem(article, status));
    };

    const removeItem = (article: string) => {
        const item = cartItems.find((item) => item.article === article);
        if (item) {
            dispatch(removeCartItem(item, user.email));
        }
    };

    React.useEffect(() => {
        dispatch(checkAvailabilityCartItems(cartItems));
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
                        onCheck={() => changeCheck(item.article, !item.checked)}
                        onRemove={() => removeItem(item.article)}
                    />
                ))}
            </div>
        </div>
    );
};
