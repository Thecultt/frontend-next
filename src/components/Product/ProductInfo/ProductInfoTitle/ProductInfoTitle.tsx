import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { ProductPage } from '@/models/IProduct';
import { CartItem } from '@/models/ICartItem';
import { addCartItem, setCartIsVisibleMessage } from '@/redux/actions/cart';
import { sendSaveFavorite, sendRemoveFavorite } from '@/redux/actions/favorites';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import {
    ProductInfoTitleBoutique,
    ProductInfoTitlePartner,
    ProductInfoTitleSplit,
    ProductInfoTitleSale,
} from '@/components';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { CATEGORY_NAMES } from '@/constants/catalog';
import { useWaitingData } from '@/hooks/catalog/useWaitingData';
import { WaitingPopupType } from '@/types/waiting';

const ProductInfoTitle: React.FC<ProductPage> = ({
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
    store_price,
    condition,
    from_boutique,
    from_parnter,
}) => {
    const dispatch = useDispatch();

    const cartItems = useTypedSelector(({ cart }) => cart.items);
    const favoritesItems = useTypedSelector(({ favorites }) => favorites.items);

    const [isCartLocal, setIsCartLocal] = React.useState<boolean>(cartItems[article] ? true : false);
    const [isFavoriteLocal, setIsFavoriteLocal] = React.useState<boolean>(favoritesItems[id] ? true : false);

    const { setWaitingData } = useWaitingData();

    const addCart = (item: CartItem) => {
        dispatch(setCartIsVisibleMessage(true));

        dispatch(addCartItem(item));

        setIsCartLocal(true);

        setTimeout(() => {
            dispatch(setCartIsVisibleMessage(false));
        }, 5000);
    };

    const addFavorite = () => {
        dispatch(
            sendSaveFavorite({
                id,
                article,
                price,
                old_price,
                store_price,
                condition,
                manufacturer,
                name,
                availability,
                images,
                num_of_favorites: 0,
                category,
                subcategory,
                shoe_size,
                size,
                is_trial,
                from_boutique,
                from_parnter,
                price_drop: false,
            }) as any,
        );
    };

    const removeFavorite = () => {
        dispatch(
            sendRemoveFavorite({
                id,
                article,
                price,
                old_price,
                store_price,
                condition,
                manufacturer,
                name,
                availability,
                images,
                num_of_favorites: 0,
                category,
                subcategory,
                shoe_size,
                size,
                is_trial,
                from_boutique,
                from_parnter,
                price_drop: false,
            }) as any,
        );
    };

    const subscribeGood = () => {
        setWaitingData({
            category,
            brand: manufacturer,
            model: name,
            type: category !== CATEGORY_NAMES.bags ? subcategory : '',
            size: size || shoe_size,
        });

        window.location.hash = WaitingPopupType.Form;
    };

    return (
        <>
            <div className="product-content-info-title">
                <p className="product-content-info-title__vendor">Артикул: {article}</p>

                <h2 className="product-content-info-title__model">{name}</h2>

                <Link
                    href={getCatalogFiltersUrl({
                        categories: [category],
                        brands: [manufacturer],
                        sort: 'a',
                    })}
                    className="product-content-info-title__brand"
                >
                    {manufacturer}
                </Link>

                <div className="product-content-info-title-badges">
                    {from_boutique ? <ProductInfoTitleBoutique /> : null}

                    {from_parnter ? <ProductInfoTitlePartner /> : null}

                    {price_drop ? <ProductInfoTitleSale /> : null}
                </div>

                <div className="product-content-info-title-price">
                    <h3 className="product-content-info-title-price__price">{price.toLocaleString('ru-RU')}₽</h3>

                    {old_price ? (
                        <p className="product-content-info-title-price__oldprice">
                            {old_price.toLocaleString('ru-RU')}₽
                        </p>
                    ) : null}
                </div>

                {price < 150000 ? <ProductInfoTitleSplit price={price} /> : null}

                {is_trial ? (
                    <p className="product-content-info-title__notavailable">На примерке</p>
                ) : !availability ? (
                    <p className="product-content-info-title__notavailable">Нет в наличии</p>
                ) : null}

                {availability && !is_trial ? (
                    <div className="product-content-info-title-btn">
                        {isCartLocal ? (
                            <button className="btn product-content-info-title-btn__btn add">В корзине</button>
                        ) : (
                            <button
                                className="btn product-content-info-title-btn__btn add"
                                onClick={() =>
                                    addCart({
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
                                    })
                                }
                            >
                                Добавить в корзину
                            </button>
                        )}

                        {isFavoriteLocal ? (
                            <button
                                className="btn product-content-info-title-btn__btn fav"
                                onClick={() => {
                                    removeFavorite();
                                    setIsFavoriteLocal(false);
                                }}
                            >
                                В избранном
                                <svg
                                    width="18"
                                    height="16"
                                    viewBox="0 0 18 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.1279 0.666687C11.5501 0.666687 10.1687 1.34518 9.30757 2.49205C8.44647 1.34518 7.06503 0.666687 5.48723 0.666687C4.23127 0.668103 3.02716 1.16766 2.13907 2.05575C1.25097 2.94385 0.751416 4.14796 0.75 5.40391C0.75 10.7524 8.68027 15.0816 9.01799 15.2604C9.107 15.3083 9.2065 15.3334 9.30757 15.3334C9.40865 15.3334 9.50814 15.3083 9.59715 15.2604C9.93487 15.0816 17.8651 10.7524 17.8651 5.40391C17.8637 4.14796 17.3642 2.94385 16.4761 2.05575C15.588 1.16766 14.3839 0.668103 13.1279 0.666687ZM9.30757 14.0226C7.91238 13.2096 1.97251 9.5062 1.97251 5.40391C1.97372 4.47213 2.34441 3.57885 3.00329 2.91997C3.66216 2.2611 4.55544 1.89041 5.48723 1.8892C6.97334 1.8892 8.22107 2.68077 8.74216 3.95218C8.78821 4.06429 8.86656 4.16018 8.96723 4.22767C9.06791 4.29515 9.18637 4.33118 9.30757 4.33118C9.42877 4.33118 9.54724 4.29515 9.64791 4.22767C9.74859 4.16018 9.82693 4.06429 9.87298 3.95218C10.3941 2.67848 11.6418 1.8892 13.1279 1.8892C14.0597 1.89041 14.953 2.2611 15.6119 2.91997C16.2707 3.57885 16.6414 4.47213 16.6426 5.40391C16.6426 9.50009 10.7012 13.2089 9.30757 14.0226Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        ) : (
                            <button
                                className="btn-regular product-content-info-title-btn__btn fav"
                                onClick={() => {
                                    addFavorite();
                                    setIsFavoriteLocal(true);
                                }}
                            >
                                В избранное
                                <svg
                                    width="20"
                                    height="16"
                                    viewBox="0 0 20 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14.0188 0C12.2976 0 10.7905 0.740174 9.85116 1.9913C8.91177 0.740174 7.40475 0 5.68351 0C4.31338 0.00154431 2.9998 0.546512 2.03097 1.51534C1.06214 2.48418 0.517169 3.79775 0.515625 5.16789C0.515625 11.0026 9.16683 15.7254 9.53525 15.9204C9.63236 15.9727 9.7409 16 9.85116 16C9.96142 16 10.07 15.9727 10.1671 15.9204C10.5355 15.7254 19.1867 11.0026 19.1867 5.16789C19.1852 3.79775 18.6402 2.48418 17.6714 1.51534C16.7025 0.546512 15.3889 0.00154431 14.0188 0ZM9.85116 14.5701C8.32913 13.6832 1.84927 9.64311 1.84927 5.16789C1.8506 4.15139 2.25498 3.1769 2.97376 2.45813C3.69253 1.73936 4.66701 1.33497 5.68351 1.33365C7.30473 1.33365 8.66588 2.19718 9.23435 3.58418C9.28459 3.70648 9.37005 3.81109 9.47988 3.88471C9.58971 3.95832 9.71894 3.99763 9.85116 3.99763C9.98338 3.99763 10.1126 3.95832 10.2224 3.88471C10.3323 3.81109 10.4177 3.70648 10.468 3.58418C11.0364 2.19468 12.3976 1.33365 14.0188 1.33365C15.0353 1.33497 16.0098 1.73936 16.7286 2.45813C17.4473 3.1769 17.8517 4.15139 17.853 5.16789C17.853 9.63644 11.3715 13.6824 9.85116 14.5701Z" />
                                </svg>
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="product-content-info-title-btn">
                        <button className="btn product-content-info-title-btn__btn subscribe" onClick={subscribeGood}>
                            Подписаться на модель
                        </button>

                        {isFavoriteLocal ? (
                            <button
                                className="btn product-content-info-title-btn__btn fav"
                                onClick={() => {
                                    removeFavorite();
                                    setIsFavoriteLocal(false);
                                }}
                            >
                                В избранном
                                <svg
                                    width="18"
                                    height="16"
                                    viewBox="0 0 18 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.1279 0.666687C11.5501 0.666687 10.1687 1.34518 9.30757 2.49205C8.44647 1.34518 7.06503 0.666687 5.48723 0.666687C4.23127 0.668103 3.02716 1.16766 2.13907 2.05575C1.25097 2.94385 0.751416 4.14796 0.75 5.40391C0.75 10.7524 8.68027 15.0816 9.01799 15.2604C9.107 15.3083 9.2065 15.3334 9.30757 15.3334C9.40865 15.3334 9.50814 15.3083 9.59715 15.2604C9.93487 15.0816 17.8651 10.7524 17.8651 5.40391C17.8637 4.14796 17.3642 2.94385 16.4761 2.05575C15.588 1.16766 14.3839 0.668103 13.1279 0.666687ZM9.30757 14.0226C7.91238 13.2096 1.97251 9.5062 1.97251 5.40391C1.97372 4.47213 2.34441 3.57885 3.00329 2.91997C3.66216 2.2611 4.55544 1.89041 5.48723 1.8892C6.97334 1.8892 8.22107 2.68077 8.74216 3.95218C8.78821 4.06429 8.86656 4.16018 8.96723 4.22767C9.06791 4.29515 9.18637 4.33118 9.30757 4.33118C9.42877 4.33118 9.54724 4.29515 9.64791 4.22767C9.74859 4.16018 9.82693 4.06429 9.87298 3.95218C10.3941 2.67848 11.6418 1.8892 13.1279 1.8892C14.0597 1.89041 14.953 2.2611 15.6119 2.91997C16.2707 3.57885 16.6414 4.47213 16.6426 5.40391C16.6426 9.50009 10.7012 13.2089 9.30757 14.0226Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        ) : (
                            <button
                                className="btn-regular product-content-info-title-btn__btn fav"
                                onClick={() => {
                                    addFavorite();
                                    setIsFavoriteLocal(true);
                                }}
                            >
                                В избранное
                                <svg
                                    width="20"
                                    height="16"
                                    viewBox="0 0 20 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M14.0188 0C12.2976 0 10.7905 0.740174 9.85116 1.9913C8.91177 0.740174 7.40475 0 5.68351 0C4.31338 0.00154431 2.9998 0.546512 2.03097 1.51534C1.06214 2.48418 0.517169 3.79775 0.515625 5.16789C0.515625 11.0026 9.16683 15.7254 9.53525 15.9204C9.63236 15.9727 9.7409 16 9.85116 16C9.96142 16 10.07 15.9727 10.1671 15.9204C10.5355 15.7254 19.1867 11.0026 19.1867 5.16789C19.1852 3.79775 18.6402 2.48418 17.6714 1.51534C16.7025 0.546512 15.3889 0.00154431 14.0188 0ZM9.85116 14.5701C8.32913 13.6832 1.84927 9.64311 1.84927 5.16789C1.8506 4.15139 2.25498 3.1769 2.97376 2.45813C3.69253 1.73936 4.66701 1.33497 5.68351 1.33365C7.30473 1.33365 8.66588 2.19718 9.23435 3.58418C9.28459 3.70648 9.37005 3.81109 9.47988 3.88471C9.58971 3.95832 9.71894 3.99763 9.85116 3.99763C9.98338 3.99763 10.1126 3.95832 10.2224 3.88471C10.3323 3.81109 10.4177 3.70648 10.468 3.58418C11.0364 2.19468 12.3976 1.33365 14.0188 1.33365C15.0353 1.33497 16.0098 1.73936 16.7286 2.45813C17.4473 3.1769 17.8517 4.15139 17.853 5.16789C17.853 9.63644 11.3715 13.6824 9.85116 14.5701Z" />
                                </svg>
                            </button>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default ProductInfoTitle;
