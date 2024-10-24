'use client';

import React from 'react';

import { Noop } from '@/types/functions';
import { CartItem } from '@/models/ICartItem';
import { formatMoney } from '@/functions/formatMoney';
import { getUrlWithParams } from '@/functions/getUrlWithParams';
import { APP_ROUTE } from '@/constants/routes';
import { useCart } from '@/hooks/catalog/useCart';
import { CartProductItem } from '@/components';
import { Button } from '@/shared/ui';

import './styles.sass';

interface Props {
    cart: CartItem[];
    hasTitle: boolean;
    isJewelry?: boolean;
    onLinkClick?: Noop;
}

export const CartList: React.FC<Props> = ({ cart, hasTitle, isJewelry, onLinkClick }) => {
    const { toggleChecked, removeFromCart } = useCart();

    const availableItems = cart.filter((item) => !!item.availability && !item.is_trial && item.checked);
    const cartSum = formatMoney(availableItems.reduce((acc, cur) => acc + cur.price, 0));

    return (
        <div className="cart-list">
            {hasTitle && <h5 className="cart-list__title">{isJewelry ? 'THE CULTT JEWELRY' : 'THE CULTT'}</h5>}

            <div className="cart-list__items">
                {cart.map((item) => (
                    <CartProductItem
                        key={item.id}
                        data={item}
                        onCheck={() => toggleChecked(item.article)}
                        onRemove={() => removeFromCart(item.article)}
                    />
                ))}
            </div>

            <div className="cart-list-total">
                <p className="cart-list-total__description">Товары - {availableItems.length} шт.</p>
                <p className="cart-list-total__sum">{cartSum}</p>
            </div>

            <Button
                className="cart-list__btn"
                label="Перейти к оформлению"
                href={
                    !isJewelry
                        ? APP_ROUTE.order
                        : getUrlWithParams(APP_ROUTE.order, {
                              type: 'jewelry',
                          })
                }
                onClick={onLinkClick}
                disabled={!availableItems.length}
                wide
            />
        </div>
    );
};
