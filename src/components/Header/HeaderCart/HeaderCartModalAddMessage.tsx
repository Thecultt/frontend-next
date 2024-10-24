'use client';

import React from 'react';

import { getClassNames } from '@/functions/getClassNames';
import { getUrlWithParams } from '@/functions/getUrlWithParams';
import { CartItem } from '@/models/ICartItem';
import { APP_ROUTE } from '@/constants/routes';
import { useCart } from '@/hooks/catalog/useCart';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { setHeaderCartIsVisible } from '@/redux/actions/header';
import { setCartIsVisibleMessage } from '@/redux/slices/cart/slice';
import { CartProductItem } from '@/components';
import { XIcon } from '@/assets/icons';
import { Button } from '@/shared/ui';

const HeaderCartModalAddMessage: React.FC = () => {
    const dispatch = useAppDispatch();

    const { allCart, isVisibleMessage, removeFromCart } = useCart();
    const item: CartItem | undefined = allCart.slice(-1)[0];

    const closeIsVisibleMessage = () => {
        dispatch(setCartIsVisibleMessage(false));
    };

    const handleRemoveItem = (item: CartItem) => {
        closeIsVisibleMessage();
        removeFromCart(item.article);
    };

    const seeAllCart = () => {
        closeIsVisibleMessage();
        setTimeout(() => {
            dispatch(setHeaderCartIsVisible(true));
        }, 200);
    };

    if (!item) {
        return null;
    }

    return (
        <div
            className={getClassNames('header-block-cart-modal', {
                active: isVisibleMessage,
            })}
        >
            <div className="header-block-cart-modal__header">
                <p className="header-block-cart-modal__title">Добавлено:</p>
                <button type="button" className="header-block-cart-modal__close" onClick={closeIsVisibleMessage}>
                    <XIcon />
                </button>
            </div>

            <div className="header-block-cart-modal__items">
                <CartProductItem key={item.id} data={item} onRemove={() => handleRemoveItem(item)} checkDisabled />
            </div>

            <div className="header-block-cart-modal__more">
                <Button
                    label="Посмотреть всё"
                    className="header-block-cart-modal__more-btn"
                    onClick={seeAllCart}
                    theme="light"
                    wide
                />

                <Button
                    label="Оформить"
                    href={
                        !item.is_jewelry
                            ? APP_ROUTE.order
                            : getUrlWithParams(APP_ROUTE.order, {
                                  type: 'jewelry',
                              })
                    }
                    className="header-block-cart-modal__more-btn"
                    onClick={closeIsVisibleMessage}
                    wide
                />
            </div>
        </div>
    );
};

export default HeaderCartModalAddMessage;
