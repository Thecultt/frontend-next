'use client';

import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { removeCartItem } from '@/redux/actions/cart';
import { CartProductItem } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { CartItem } from '@/models/ICartItem';
import { APP_ROUTE } from '@/constants/routes';
import { XIcon } from '@/assets/icons';
import { Noop } from '@/types/functions';

interface HeaderCartModalAddMessageProps {
    state: boolean;
    setState: Noop;
    openCart: Noop;
}

const HeaderCartModalAddMessage: React.FC<HeaderCartModalAddMessageProps> = ({ state, setState, openCart }) => {
    const dispatch = useDispatch();

    const { items } = useTypedSelector(({ cart }) => cart);
    const item: CartItem | undefined = items[Object.keys(items)[Object.keys(items).length - 1]];

    const removeItem = (item: CartItem) => {
        dispatch(removeCartItem(item));
    };

    return (
        <div
            className={getClassNames('header-block-cart-modal', {
                active: state,
            })}
        >
            <div className="header-block-cart-modal__header">
                <p className="header-block-cart-modal__title">Добавлено:</p>
                <button type="button" className="header-block-cart-modal__close" onClick={setState}>
                    <XIcon />
                </button>
            </div>

            <div className="header-block-cart-modal__items">
                {item && (
                    <CartProductItem
                        key={item.id}
                        data={item}
                        onRemove={() => {
                            setState();
                            setTimeout(() => {
                                removeItem(item);
                            }, 300);
                        }}
                        checkDisabled
                    />
                )}
            </div>

            <div className="header-block-cart-modal__more">
                <button
                    type="button"
                    className="btn-regular gray header-block-cart-modal__more-btn"
                    onClick={() => {
                        setState();
                        setTimeout(() => {
                            openCart();
                        }, 300);
                    }}
                >
                    Посмотреть всё
                </button>

                <Link
                    href={APP_ROUTE.order}
                    className="btn header-block-cart-modal__more-btn"
                    onClick={setState}
                    scroll={false}
                    prefetch={false}
                >
                    Оформить
                </Link>
            </div>
        </div>
    );
};

export default HeaderCartModalAddMessage;
