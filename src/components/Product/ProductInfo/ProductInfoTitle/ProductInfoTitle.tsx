'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'usehooks-ts';

import { ProductInfoTitleSplit, ProductInfoBadges } from '@/components';
import { ProductPage } from '@/models/IProduct';
import { WaitingPopupType } from '@/types/waiting';
import { useWaitingData } from '@/hooks/catalog/useWaitingData';
import { useHash } from '@/hooks/useHash';
import { useCart } from '@/hooks/catalog/useCart';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { getClassNames } from '@/functions/getClassNames';
import { getUrlWithParams } from '@/functions/getUrlWithParams';
import { formatMoney } from '@/functions/formatMoney';
import { MEDIA_SIZES } from '@/constants/styles';
import { APP_ROUTE } from '@/constants/routes';
import { CATEGORY_NAMES } from '@/constants/catalog';
import { Noop } from '@/types/functions';
import { Button } from '@/shared/ui';

import { ProductInfoTitleFavorites } from './ProductInfoTitleFavorites';

interface Props {
    product: ProductPage;
    onBoutiquePopupVisible: Noop;
    onPartnerPopupVisible: Noop;
}

const ProductInfoTitle: React.FC<Props> = ({ product, onBoutiquePopupVisible, onPartnerPopupVisible }) => {
    const {
        id,
        article,
        manufacturer,
        manufacturer_slug,
        category,
        category_slug,
        name,
        price,
        old_price,
        availability,
        subcategory,
        shoe_size,
        size,
        is_trial,
        images,
        condition,
        is_jewelry,
    } = product;

    const router = useRouter();

    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    const { changeHash } = useHash();
    const { setWaitingData } = useWaitingData();

    const { allCart, addToCart } = useCart();

    const inCart = !!allCart.find((item) => item.id === id);
    const canBuy = !!availability && !is_trial;

    const handleAddClick = () => {
        if (inCart) {
            const orderPath = !is_jewelry
                ? APP_ROUTE.order
                : getUrlWithParams(APP_ROUTE.order, {
                      type: 'jewelry',
                  });
            router.push(isMobile ? APP_ROUTE.cart : orderPath);
            return;
        }

        if (!canBuy) {
            return;
        }

        addToCart({
            id: id,
            checked: true,
            article,
            manufacturer,
            category,
            subcategory,
            name,
            image: images[0],
            price: price ?? 0,
            old_price,
            availability,
            is_trial,
            condition,
            is_jewelry,
        });
    };

    const subscribeGood = () => {
        setWaitingData({
            category,
            brand: manufacturer,
            model: name,
            type: category !== CATEGORY_NAMES.bags ? subcategory : '',
            size: size || shoe_size,
        });

        changeHash(WaitingPopupType.Form);
    };

    return (
        <div className="product-content-info-title">
            <div className="product-content-info-title__vendor-model">
                <p className="product-content-info-title__vendor">Артикул: {article}</p>
                <h1 className="product-content-info-title__model">{name}</h1>
            </div>

            <Link
                href={getCatalogFiltersUrl({
                    category_slug,
                    brand_slug: manufacturer_slug,
                })}
                className="product-content-info-title__brand"
            >
                {manufacturer}
            </Link>

            {!isMobile && (
                <ProductInfoBadges
                    className="product-content-info-title-badges"
                    product={product}
                    onNewBrandClick={onBoutiquePopupVisible}
                    onFromPartnerClick={onPartnerPopupVisible}
                />
            )}

            {canBuy && isMobile && (
                <p className="product-content-info-title__condition">
                    Состояние: <span className="product-content-info-title__condition-value">{condition}</span>
                </p>
            )}

            {!canBuy && (
                <p className="product-content-info-title__notavailable">{is_trial ? 'На примерке' : 'Нет в наличии'}</p>
            )}

            <div
                className={getClassNames('product-content-info-title-price', {
                    'product-content-info-title-price--disabled': !canBuy,
                })}
            >
                <h3 className="product-content-info-title-price__price">{formatMoney(price)}</h3>
                {old_price && <p className="product-content-info-title-price__oldprice">{formatMoney(old_price)}</p>}
            </div>

            {/* TODO to const */}
            {!is_jewelry && (price ?? 0) <= 150000 && <ProductInfoTitleSplit price={price ?? 0} disabled={!canBuy} />}

            <div className="product-content-info-title-btn">
                {canBuy ? (
                    <Button
                        className={getClassNames('product-content-info-title-btn__btn add', {
                            'in-cart': inCart,
                        })}
                        label={inCart ? 'Перейти в корзину' : isMobile ? 'В корзину' : 'Добавить в корзину'}
                        onClick={handleAddClick}
                    />
                ) : (
                    <Button
                        className="product-content-info-title-btn__btn subscribe"
                        theme="light"
                        label="Подписаться на модель"
                        onClick={subscribeGood}
                    />
                )}

                <ProductInfoTitleFavorites productData={product} />
            </div>
        </div>
    );
};

export default ProductInfoTitle;
