'use client';

import React from 'react';
import Link from 'next/link';

import { CartItem } from '@/models/ICartItem';
import { Noop } from '@/types/functions';
import { NewCheckbox } from '@/components';
import { formatMoney } from '@/functions/formatMoney';
import { getClassNames } from '@/functions/getClassNames';
import { YANDEX_SPLIT_MERCHANT_ID } from '@/constants/env';
import { YANDEX_SPLIT_LIMIT } from '@/constants/app';
import { APP_ROUTE } from '@/constants/routes';
import { XIcon } from '@/assets/icons';

import './styles.sass';

interface Props {
    data: CartItem;
    checkDisabled?: boolean;
    removeDisabled?: boolean;
    onCheck?: Noop;
    onRemove?: Noop;
}

export const CartProductItem: React.FC<Props> = ({
    data,
    checkDisabled = false,
    removeDisabled = false,
    onCheck,
    onRemove,
}) => {
    const { article, name, checked, image, condition, price, old_price, availability, is_trial } = data;

    const canBuy = !!availability && !is_trial;

    return (
        <div className="cart-product-item">
            <NewCheckbox disabled={checkDisabled || (!checked && !canBuy)} checked={checked} onChange={onCheck} />
            <Link href={`${APP_ROUTE.product}/${article}`} className="cart-product-item-image">
                <div
                    className="cart-product-item-image__background"
                    style={{
                        backgroundImage: `url('${image}')`,
                    }}
                />
            </Link>
            <Link
                href={`${APP_ROUTE.product}/${article}`}
                className={getClassNames('cart-product-item-info', {
                    'cart-product-item-info--disabled': !canBuy,
                })}
            >
                <h5 className="cart-product-item-info__title">{name}</h5>
                {!!condition && <p className="cart-product-item-info__condition">Состояние: {condition}</p>}

                <div className="cart-product-item-info-prices">
                    <span className="cart-product-item-info-prices__current">{formatMoney(price)}</span>
                    {old_price && <span className="cart-product-item-info-prices__old">{formatMoney(old_price)}</span>}
                </div>

                {canBuy && price <= YANDEX_SPLIT_LIMIT && (
                    <div className="cart-product-item-info-split">
                        {/* @ts-ignore */}
                        <yandex-pay-badge
                            type="bnpl"
                            amount={`${price}.00`}
                            size="s"
                            variant="detailed"
                            color="primary"
                            merchant-id={YANDEX_SPLIT_MERCHANT_ID}
                            class="cart-product-item-info-split__element"
                        />
                    </div>
                )}

                {!canBuy && (
                    <span className="cart-product-item-info__unavailable">
                        {is_trial ? 'На примерке' : 'Нет в наличии'}
                    </span>
                )}
            </Link>
            <button type="button" className="cart-product-item__remove" disabled={removeDisabled} onClick={onRemove}>
                <XIcon className="cart-product-item__remove-icon" />
            </button>
        </div>
    );
};
