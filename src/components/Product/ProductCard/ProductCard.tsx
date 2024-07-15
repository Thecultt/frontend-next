'use client';

import React from 'react';
import Link from 'next/link';

import { Product } from '@/models/IProduct';
import { Noop } from '@/types/functions';
import { WaitingPopupType } from '@/types/waiting';
import { useWaitingData } from '@/hooks/catalog/useWaitingData';
import { useHash } from '@/hooks/useHash';
import { pushDataLayer } from '@/functions/pushDataLayer';
import { formatMoney } from '@/functions/formatMoney';
import { APP_ROUTE } from '@/constants/routes';
import { YANDEX_SPLIT_MERCHANT_ID } from '@/constants/env';

import { ProductCardBadges } from './ProductCardBadges';
import { ProductCardFavorites } from './ProductCardFavorites';
import './styles.sass';

interface Props {
    productData: Product;
    className?: string;
    onClick?: Noop;
}

// TODO images carousel

export const ProductCard: React.FC<Props> = ({ productData, className = '', onClick }) => {
    const {
        id,
        article,
        category,
        name,
        subcategory,
        size,
        shoe_size,
        manufacturer,
        condition,
        price,
        old_price,
        availability,
        is_trial,
        model_name,
    } = productData;

    const { changeHash } = useHash();
    const { setWaitingData } = useWaitingData();

    const subscribe = () => {
        setWaitingData({
            category,
            brand: manufacturer,
            model: name,
            type: subcategory,
            size: size || shoe_size,
        });
        changeHash(WaitingPopupType.Form);
    };

    const handleClick = () => {
        pushDataLayer('select_item', {
            items: [
                {
                    item_name: model_name,
                    item_id: `${id}`,
                    price: `${price}`,
                    item_brand: manufacturer,
                    item_category: category,
                    item_category2: subcategory,
                    item_category3: '-',
                    item_category4: '-',
                    item_list_name: 'Search Results',
                    item_list_id: article,
                    index: 1,
                    quantity: 1,
                },
            ],
        });

        onClick?.();
    };

    return (
        <div className={`product-card ${className}`} onClick={handleClick}>
            <div className="product-card-cover">
                <ProductCardBadges productData={productData} />
                <ProductCardFavorites productData={productData} />
            </div>

            <Link className="product-card-info" href={`${APP_ROUTE.product}/${article}`}>
                <h3 className="product-card-info__name">{name}</h3>

                {availability && !is_trial ? (
                    <>
                        <p className="product-card-info__condition">
                            Состояние: <span className="product-card-info__condition-value">{condition}</span>
                        </p>
                        <div className="product-card-info__price-split">
                            <div className="product-card-info__prices">
                                <span className="product-card-info__price">{formatMoney(price)}</span>
                                {old_price && (
                                    <span className="product-card-info__price product-card-info__price--old">
                                        {formatMoney(old_price)}
                                    </span>
                                )}
                            </div>
                            {/* @ts-ignore */}
                            <yandex-pay-badge
                                type="bnpl"
                                amount={`${price}.00`}
                                size="s"
                                variant="detailed"
                                color="primary"
                                merchant-id={YANDEX_SPLIT_MERCHANT_ID}
                                class="product-card-info__split"
                            />
                        </div>
                    </>
                ) : (
                    <span className="product-card-info__outstock">{is_trial ? 'На примерке' : 'Нет в наличии'}</span>
                )}
            </Link>

            {(!availability || is_trial) && (
                <button type="button" className="product-card__btn btn-light-green" onClick={subscribe}>
                    Подписаться на товар
                </button>
            )}
        </div>
    );
};
