'use client';

import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { changeCheckCartItem, removeCartItem } from '@/redux/actions/cart';
import { CartItemBlock } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { APP_ROUTE } from '@/constants/routes';

const Cart: React.FC = () => {
    const dispatch = useDispatch();

    const { items } = useTypedSelector(({ cart }) => cart);

    const changeCheck = (article: string, status: boolean) => {
        dispatch(changeCheckCartItem(article, status));
    };

    const removeItem = (article: string) => {
        dispatch(removeCartItem(article, items[article]));
    };

    return (
        <div className="cart">
            <div className="container">
                <div className="cart-wrapper">
                    <h2 className="cart__title">Корзина</h2>

                    {Object.keys(items).length ? (
                        <>
                            <div className="cart-items-wrapper">
                                {Object.keys(items).map((key, index) => (
                                    <CartItemBlock
                                        {...items[key]}
                                        key={`cart-item-${index}`}
                                        changeCheck={() => changeCheck(key, !items[key].checked)}
                                        removeItem={() => removeItem(key)}
                                    />
                                ))}
                            </div>

                            <div className="cart-btn">
                                <div className="cart-btn-title">
                                    <p className="cart-btn-title__description">
                                        Товары -{' '}
                                        {
                                            Object.keys(items)
                                                .map((article) => items[article])
                                                .filter((item) => item.availability && item.checked).length
                                        }{' '}
                                        шт.
                                    </p>

                                    <p className="cart-btn-title__sum">
                                        {Object.keys(items)
                                            .map((article) => items[article])
                                            .filter((item) => item.availability && item.checked)
                                            .map((item) => item.price).length
                                            ? Object.keys(items)
                                                  .map((article) => items[article])
                                                  .filter((item) => item.availability && item.checked)
                                                  .map((item) => item.price)
                                                  .reduce((a: number, b: number) => a + b)
                                                  .toLocaleString('ru-RU')
                                            : 0}
                                        ₽
                                    </p>
                                </div>

                                <Link
                                    href={APP_ROUTE.order}
                                    className={getClassNames('btn cart-btn__btn', {
                                        disabled: !Object.keys(items).filter((key) => items[key].checked).length,
                                    })}
                                >
                                    Перейти к заказу
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="cart-null">
                            <p className="cart-null__title">Ваша корзина пока пуста</p>

                            <button className="btn disabled cart-null__btn">Перейти к заказу</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
