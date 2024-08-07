'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'usehooks-ts';

import { ProductPage } from '@/models/IProduct';
import { addCartItem, setCartIsVisibleMessage } from '@/redux/actions/cart';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import {
    ProductInfoTitleBoutique,
    ProductInfoTitlePartner,
    ProductInfoTitleSplit,
    ProductInfoTitleSale,
} from '@/components';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { CATEGORY_NAMES, SORT } from '@/constants/catalog';
import { useWaitingData } from '@/hooks/catalog/useWaitingData';
import { WaitingPopupType } from '@/types/waiting';
import { useHash } from '@/hooks/useHash';
import { formatMoney } from '@/functions/formatMoney';
import { YANDEX_SPLIT_LIMIT } from '@/constants/app';
import { MEDIA_SIZES } from '@/constants/styles';
import { APP_ROUTE } from '@/constants/routes';
import { getClassNames } from '@/functions/getClassNames';

import { ProductInfoTitleFavorites } from './ProductInfoTitleFavorites';

interface Props {
    product: ProductPage;
    setBoutiquePopupVisible: (state: boolean) => void;
    setPartnerPopupVisible: (state: boolean) => void;
}

const ProductInfoTitle: React.FC<Props> = ({ product, setBoutiquePopupVisible, setPartnerPopupVisible }) => {
    const {
        id,
        article,
        manufacturer,
        category,
        name,
        price,
        old_price,
        price_drop,
        availability,
        subcategory,
        shoe_size,
        size,
        is_trial,
        images,
        from_boutique,
        from_parnter,
        condition,
    } = product;

    const router = useRouter();
    const dispatch = useDispatch();

    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);
    const { changeHash } = useHash();

    const { setWaitingData } = useWaitingData();
    const { items: cartItems } = useTypedSelector(({ cart }) => cart);

    const inCart = !!cartItems[article];
    const canBuy = !!availability && !is_trial;

    const addToCart = () => {
        if (inCart) {
            router.push(isMobile ? APP_ROUTE.cart : APP_ROUTE.order);
            return;
        }

        if (!canBuy) {
            return;
        }

        dispatch(setCartIsVisibleMessage(true));

        dispatch(
            addCartItem({
                id: id,
                checked: true,
                article,
                manufacturer,
                category,
                subcategory,
                name,
                image: images[0],
                price,
                availability,
                is_trial,
            }),
        );

        setTimeout(() => {
            dispatch(setCartIsVisibleMessage(false));
        }, 5000);
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
                    categories: [category],
                    brands: [manufacturer],
                    sort: SORT.a,
                })}
                className="product-content-info-title__brand"
            >
                {manufacturer}
            </Link>

            {!isMobile && (
                <div className="product-content-info-title-badges">
                    {from_boutique && <ProductInfoTitleBoutique onClick={() => setBoutiquePopupVisible(true)} />}
                    {from_parnter && <ProductInfoTitlePartner onClick={() => setPartnerPopupVisible(true)} />}
                    {price_drop && <ProductInfoTitleSale />}
                </div>
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

            {price <= YANDEX_SPLIT_LIMIT && <ProductInfoTitleSplit price={price} disabled={!canBuy} />}

            <div className="product-content-info-title-btn">
                {canBuy ? (
                    <button
                        type="button"
                        className={getClassNames('btn product-content-info-title-btn__btn add', {
                            'in-cart': inCart,
                        })}
                        onClick={addToCart}
                    >
                        {inCart ? 'Перейти в корзину' : isMobile ? 'В корзину' : 'Добавить в корзину'}
                    </button>
                ) : (
                    <button className="btn product-content-info-title-btn__btn subscribe" onClick={subscribeGood}>
                        Подписаться на модель
                    </button>
                )}

                <ProductInfoTitleFavorites productData={product} />
            </div>
        </div>
    );
};

export default ProductInfoTitle;
