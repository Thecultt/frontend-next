import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { changeCheckCartItem, removeCartItem } from '@/redux/actions/cart';
import { HeaderCartModalItem } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';
import { ReglogStateTypesNotLogin } from '@/types/reglog';

interface HeaderCartModalProps {
    state: boolean;
    setState: () => void;
}

const HeaderCartModal: React.FC<HeaderCartModalProps> = ({ state, setState }) => {
    const dispatch = useDispatch();

    // const isLoadedUser = useTypedSelector(({ user }) => user.isLoaded);
    const { isLoaded: isLoadedUser } = useAuthUser();

    const { items } = useTypedSelector(({ cart }) => cart);

    const changeCheck = (article: string, status: boolean) => {
        dispatch(changeCheckCartItem(article, status));
    };

    const removeItem = (article: string) => {
        dispatch(removeCartItem(article, items[article]));
    };

    React.useEffect(() => {
        if (state) {
            // Measure the removal of a product from a shopping cart.
            window?.dataLayer?.push({ ecommerce: null }); // Clear the previous ecommerce object.
            window?.dataLayer?.push({
                event: 'view_cart',
                ecommerce: {
                    timestamp: Math.floor(Date.now() / 1000),
                    items: Object.keys(items).map((article, index) => ({
                        item_name: items[article].name,
                        item_id: `${items[article].id}`,
                        price: `${items[article].price}`,
                        item_brand: items[article].manufacturer,
                        item_category: items[article].category,
                        item_category2: items[article].subcategory,
                        item_category3: '-',
                        item_category4: '-',
                        item_list_name: 'Search Results',
                        item_list_id: article,
                        index,
                        quantity: 1,
                    })),
                },
            });
        }
    }, [state]);

    return (
        <div
            className={getClassNames('header-block-cart-modal', {
                active: state,
            })}
        >
            <div className="header-block-cart-modal-close" onClick={setState}>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        id="Vector"
                        d="M20 4.5L4 20.5M4 4.5L20 20.5"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <p className="header-block-cart-modal__title">Корзина:</p>

            {Object.keys(items).length ? (
                <>
                    <div className="header-block-cart-modal-items-wrapper">
                        {Object.keys(items).map((key, index) => (
                            <HeaderCartModalItem
                                {...items[key]}
                                key={`header-block-cart-modal-item-${index}`}
                                changeCheck={() => changeCheck(key, !items[key].checked)}
                                removeItem={() => removeItem(key)}
                            />
                        ))}
                    </div>

                    <div className="header-block-cart-modal-btn">
                        <div className="header-block-cart-modal-btn-title">
                            <p className="header-block-cart-modal-btn-title__description">
                                Товары -{' '}
                                {
                                    Object.keys(items)
                                        .map((article) => items[article])
                                        .filter((item) => item.availability && item.checked).length
                                }{' '}
                                шт.
                            </p>

                            <p className="header-block-cart-modal-btn-title__sum">
                                {Object.keys(items)
                                    .map((article) => items[article])
                                    .filter((item) => item.availability && item.checked)
                                    .map((item) => item.price).length
                                    ? Object.keys(items)
                                          .map((article) => items[article])
                                          .filter((item) => item.availability && item.checked)
                                          .map((item) => item.price)
                                          .reduce((a: number, b: number) => a + b)
                                          .toLocaleString('ru-RU')
                                    : 0}
                                ₽
                            </p>
                        </div>

                        <Link
                            href={isLoadedUser ? '/order' : `/?redirect=/order#${ReglogStateTypesNotLogin.REGLOG}`}
                            className={getClassNames('btn header-block-cart-modal-btn__btn', {
                                disabled: !Object.keys(items).filter((key) => items[key].checked).length,
                            })}
                            onClick={isLoadedUser ? setState : undefined}
                            scroll={false}
                            prefetch={false}
                        >
                            Перейти к заказу
                        </Link>
                    </div>
                </>
            ) : (
                <div className="header-block-cart-modal-null">
                    <p className="header-block-cart-modal-null__title">Ваша корзина пока пуста</p>

                    <button className="btn disabled header-block-cart-modal-null__btn">Перейти к заказу</button>
                </div>
            )}
        </div>
    );
};

export default HeaderCartModal;
