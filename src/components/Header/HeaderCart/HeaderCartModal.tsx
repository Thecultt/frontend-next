'use client';

import React from 'react';

import { XIcon } from '@/assets/icons';
import { getClassNames } from '@/functions/getClassNames';
import { pushDataLayer } from '@/functions/pushDataLayer';
import { Noop } from '@/types/functions';
import { useCart } from '@/hooks/catalog/useCart';
import { CartList } from '@/components';

interface HeaderCartModalProps {
    state: boolean;
    onCloseCart: Noop;
}

const HeaderCartModal: React.FC<HeaderCartModalProps> = ({ state, onCloseCart }) => {
    const { allCart, cart, jewelryCart } = useCart();
    const hasTitles = jewelryCart.length > 0 && cart.length > 0;

    React.useEffect(() => {
        if (state) {
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
    }, [state]);

    return (
        <div
            className={getClassNames('header-block-cart-modal', {
                active: state,
            })}
        >
            <div className="header-block-cart-modal__header">
                <p className="header-block-cart-modal__title">Корзина:</p>
                <button type="button" className="header-block-cart-modal__close" onClick={onCloseCart}>
                    <XIcon />
                </button>
            </div>

            {allCart.length > 0 ? (
                <>
                    {jewelryCart.length > 0 && (
                        <CartList cart={jewelryCart} hasTittle={hasTitles} onLinkClick={onCloseCart} isJewelry />
                    )}

                    {cart.length > 0 && <CartList cart={cart} hasTittle={hasTitles} onLinkClick={onCloseCart} />}
                </>
            ) : (
                <div className="header-block-cart-modal-null">
                    <p className="header-block-cart-modal-null__title">Ваша корзина пока пуста</p>
                    <button className="btn disabled header-block-cart-modal-null__btn" disabled>
                        Перейти к оформлению
                    </button>
                </div>
            )}
        </div>
    );
};

export default HeaderCartModal;
