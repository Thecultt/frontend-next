'use client';

import React from 'react';

import { CartList, CartNull } from '@/components';
import { useCart } from '@/hooks/catalog/useCart';

const Cart: React.FC = () => {
    const { allCart, cart, jewelryCart, isMoreOneCart } = useCart();

    return (
        <div className="cart">
            <div className="container">
                <div className="cart__wrapper">
                    {allCart.length > 0 ? (
                        <>
                            {jewelryCart.length > 0 && (
                                <div className="cart__list">
                                    <CartList cart={jewelryCart} hasTitle={isMoreOneCart} isJewelry />
                                </div>
                            )}

                            {cart.length > 0 && (
                                <div className="cart__list">
                                    <CartList cart={cart} hasTitle={isMoreOneCart} />
                                </div>
                            )}
                        </>
                    ) : (
                        <CartNull />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
