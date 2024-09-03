'use client';

import React from 'react';

import { CartList } from '@/components';
import { useCart } from '@/hooks/catalog/useCart';

const Cart: React.FC = () => {
    const { allCart, cart, jewelryCart } = useCart();
    const hasTitles = jewelryCart.length > 0 && cart.length > 0;

    return (
        <div className="cart">
            <div className="container">
                <div className="cart__wrapper">
                    {allCart.length > 0 ? (
                        <>
                            {jewelryCart.length > 0 && (
                                <div className="cart__list">
                                    <CartList cart={jewelryCart} hasTittle={hasTitles} isJewelry />
                                </div>
                            )}

                            {cart.length > 0 && (
                                <div className="cart__list">
                                    <CartList cart={cart} hasTittle={hasTitles} />
                                </div>
                            )}
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
