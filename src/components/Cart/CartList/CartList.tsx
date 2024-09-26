'use client';

import React from 'react';
import Link from 'next/link';

import { CartItem } from '@/models/ICartItem';
import { formatMoney } from '@/functions/formatMoney';
import { CartProductItem } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { APP_ROUTE } from '@/constants/routes';
import { Noop } from '@/types/functions';
import { useCart } from '@/hooks/catalog/useCart';
import { getUrlWithParams } from '@/functions/getUrlWithParams';

import './styles.sass';

interface Props {
    cart: CartItem[];
    hasTittle: boolean;
    isJewelry?: boolean;
    onLinkClick?: Noop;
}

export const CartList: React.FC<Props> = ({ cart, hasTittle, isJewelry, onLinkClick }) => {
    const { changeCheck, removeFromCart } = useCart();

    const availableItems = cart.filter((item) => !!item.availability && !item.is_trial && item.checked);
    const cartSum = formatMoney(availableItems.reduce((acc, cur) => acc + cur.price, 0));

    return (
        <div className="cart-list">
            {hasTittle && <h5 className="cart-list__title">{isJewelry ? 'THE CULTT JEWELRY' : 'THE CULTT'}</h5>}

            <div className="cart-list__items">
                {cart.map((item) => (
                    <CartProductItem
                        key={item.id}
                        data={item}
                        onCheck={() => changeCheck(item.article, !item.checked)}
                        onRemove={() => removeFromCart(item)}
                    />
                ))}
            </div>

            <div className="cart-list-total">
                <p className="cart-list-total__description">Товары - {availableItems.length} шт.</p>
                <p className="cart-list-total__sum">{cartSum}</p>
            </div>

            <Link
                href={
                    !isJewelry
                        ? APP_ROUTE.order
                        : getUrlWithParams(APP_ROUTE.order, {
                              type: 'jewelry',
                          })
                }
                className={getClassNames('btn cart-list__btn', {
                    disabled: !availableItems.length,
                })}
                onClick={onLinkClick}
                scroll={false}
                prefetch={false}
            >
                Перейти к оформлению
            </Link>
        </div>
    );
};
