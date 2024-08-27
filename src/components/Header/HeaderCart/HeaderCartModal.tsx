'use client';

import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { XIcon } from '@/assets/icons';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { changeCheckCartItem, removeCartItem } from '@/redux/actions/cart';
import { HeaderCartModalItem } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';
import { APP_ROUTE } from '@/constants/routes';
import { pushDataLayer } from '@/functions/pushDataLayer';
import { CartItem } from '@/models/ICartItem';
import { formatMoney } from '@/functions/formatMoney';
import { Noop } from '@/types/functions';

interface HeaderCartModalProps {
    state: boolean;
    setState: Noop;
}

const HeaderCartModal: React.FC<HeaderCartModalProps> = ({ state, setState }) => {
    const dispatch = useDispatch();

    const { isLoaded: isLoadedUser } = useAuthUser();
    const { items } = useTypedSelector(({ cart }) => cart);

    const mappedItems = Object.keys(items).map((article) => items[article]);
    const availableItems = mappedItems.filter((item) => !!item.availability && !item.is_trial && item.checked);
    const cartSum = formatMoney(availableItems.reduce((acc, cur) => acc + cur.price, 0));

    const changeCheck = (article: string, status: boolean) => {
        dispatch(changeCheckCartItem(article, status));
    };

    const removeItem = (item: CartItem) => {
        dispatch(removeCartItem(item));
    };

    React.useEffect(() => {
        if (state) {
            pushDataLayer('view_cart', {
                items: mappedItems.map((item, index) => ({
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
                <button type="button" className="header-block-cart-modal__close" onClick={setState}>
                    <XIcon />
                </button>
            </div>

            {mappedItems.length ? (
                <>
                    <div className="header-block-cart-modal__items">
                        {mappedItems.map((item) => (
                            <HeaderCartModalItem
                                {...item}
                                key={item.id}
                                changeCheck={() => changeCheck(item.article, !item.checked)}
                                removeItem={() => removeItem(item)}
                            />
                        ))}
                    </div>

                    <div className="header-block-cart-modal-total">
                        <p className="header-block-cart-modal-total__description">
                            Товары - {availableItems.length} шт.
                        </p>
                        <p className="header-block-cart-modal-total__sum">{cartSum}</p>
                    </div>

                    <Link
                        href={APP_ROUTE.order}
                        className={getClassNames('btn header-block-cart-modal__btn', {
                            disabled: !mappedItems.filter((item) => item.checked).length,
                        })}
                        onClick={isLoadedUser ? setState : undefined}
                        scroll={false}
                        prefetch={false}
                    >
                        Перейти к оформлению
                    </Link>
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
