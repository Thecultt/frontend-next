'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { XIcon } from '@/assets/icons';
import { DEFAULT_TRANSITION } from '@/constants/animation';
import { pushDataLayer } from '@/functions/pushDataLayer';
import { useCart } from '@/hooks/catalog/useCart';
import { CartList, CartNull } from '@/components';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { setHeaderCartIsVisible } from '@/redux/actions/header';

const HeaderCartModal: React.FC = () => {
    const dispatch = useAppDispatch();

    const { cartIsVisible } = useTypedSelector(({ header }) => header);
    const { allCart, cart, jewelryCart, isMoreOneCart } = useCart();

    const closeCart = () => {
        dispatch(setHeaderCartIsVisible(false));
    };

    React.useEffect(() => {
        if (cartIsVisible) {
            pushDataLayer('view_cart', {
                items: allCart.map((item, index) => ({
                    item_name: item.name,
                    item_id: `${item.id}`,
                    price: `${item.price}`,
                    item_brand: item.manufacturer,
                    item_category: item.category,
                    item_category2: item.subcategory,
                    item_category3: '-',
                    item_category4: '-',
                    item_list_name: 'Search Results',
                    item_list_id: item.article,
                    index,
                    quantity: 1,
                })),
            });
        }
    }, [cartIsVisible]);

    return (
        <AnimatePresence mode="wait" initial={false}>
            {cartIsVisible && (
                <motion.div
                    key="header-cart-modal"
                    initial={{ opacity: 0, y: 20 }}
                    exit={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={DEFAULT_TRANSITION}
                    className="header-block-cart-modal"
                >
                    <div className="header-block-cart-modal__header">
                        <p className="header-block-cart-modal__title">Корзина:</p>
                        <button type="button" className="header-block-cart-modal__close" onClick={closeCart}>
                            <XIcon />
                        </button>
                    </div>

                    {allCart.length > 0 ? (
                        <>
                            {jewelryCart.length > 0 && (
                                <CartList
                                    cart={jewelryCart}
                                    hasTitle={isMoreOneCart}
                                    onLinkClick={closeCart}
                                    isJewelry
                                />
                            )}

                            {cart.length > 0 && (
                                <CartList cart={cart} hasTitle={isMoreOneCart} onLinkClick={closeCart} />
                            )}
                        </>
                    ) : (
                        <CartNull />
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default HeaderCartModal;
