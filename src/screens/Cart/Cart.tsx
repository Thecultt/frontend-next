'use client';

import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { changeCheckCartItem, removeCartItem } from '@/redux/actions/cart';
import { CartProductItem } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { APP_ROUTE } from '@/constants/routes';
import { formatMoney } from '@/functions/formatMoney';
import { CartItem } from '@/models/ICartItem';

const Cart: React.FC = () => {
    const dispatch = useDispatch();

    const { items } = useTypedSelector(({ cart }) => cart);

    const mappedItems = Object.keys(items).map((article) => items[article]);
    const availableItems = mappedItems.filter((item) => !!item.availability && !item.is_trial && item.checked);
    const cartSum = formatMoney(availableItems.reduce((acc, cur) => acc + cur.price, 0));

    const changeCheck = (article: string, status: boolean) => {
        dispatch(changeCheckCartItem(article, status));
    };

    const removeItem = (item: CartItem) => {
        dispatch(removeCartItem(item));
    };

    return (
        <div className="cart">
            <div className="container">
                <div className="cart-wrapper">
                    <h2 className="cart__title">Корзина</h2>

                    {mappedItems.length > 0 ? (
                        <>
                            <div className="cart__items">
                                {mappedItems.map((item) => (
                                    <CartProductItem
                                        key={item.id}
                                        data={item}
                                        onCheck={() => changeCheck(item.article, !item.checked)}
                                        onRemove={() => removeItem(item)}
                                    />
                                ))}
                            </div>

                            <div className="cart-btn">
                                <div className="cart-btn-title">
                                    <p className="cart-btn-title__description">Товары - {availableItems.length} шт.</p>
                                    <p className="cart-btn-title__sum">{cartSum}</p>
                                </div>

                                <Link
                                    href={APP_ROUTE.order}
                                    className={getClassNames('btn cart-btn__btn', {
                                        disabled: !mappedItems.filter((item) => item.checked).length,
                                    })}
                                >
                                    Перейти к заказу
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="cart-null">
                            <p className="cart-null__title">Ваша корзина пока пуста</p>
                            <button className="btn disabled cart-null__btn" disabled>
                                Перейти к заказу
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
