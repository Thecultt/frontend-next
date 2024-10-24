'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { getUrlWithParams } from '@/functions/getUrlWithParams';
import { CartItem } from '@/models/ICartItem';
import { APP_ROUTE } from '@/constants/routes';
import { DEFAULT_TRANSITION } from '@/constants/animation';
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

    return (
        <AnimatePresence mode="wait" initial={false}>
            {item && isVisibleMessage && (
                <motion.div
                    key="header-cart-message-modal"
                    initial={{ opacity: 0, y: 20 }}
                    exit={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={DEFAULT_TRANSITION}
                    className="header-block-cart-modal"
                >
                    <div className="header-block-cart-modal__header">
                        <p className="header-block-cart-modal__title">Добавлено:</p>
                        <button
                            type="button"
                            className="header-block-cart-modal__close"
                            onClick={closeIsVisibleMessage}
                        >
                            <XIcon />
                        </button>
                    </div>

                    <div className="header-block-cart-modal__items">
                        <CartProductItem
                            key={item.id}
                            data={item}
                            onRemove={() => handleRemoveItem(item)}
                            checkDisabled
                        />
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
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HeaderCartModalAddMessage;
