import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { removeCartItem } from '@/redux/actions/cart';
import { HeaderCartModalItem } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';
import { CartItem } from '@/models/ICartItem';
import { ReglogStateTypesNotLogin } from '@/types/reglog';
import { APP_ROUTE } from '@/constants/routes';

interface HeaderCartModalAddMessageProps {
    state: boolean;
    setState: () => void;
    openCart: () => void;
}

const HeaderCartModalAddMessage: React.FC<HeaderCartModalAddMessageProps> = ({ state, setState, openCart }) => {
    const dispatch = useDispatch();

    // const isLoadedUser = useTypedSelector(({ user }) => user.isLoaded);
    const { isLoaded: isLoadedUser } = useAuthUser();

    const { items } = useTypedSelector(({ cart }) => cart);

    const item: CartItem | undefined = items[Object.keys(items)[Object.keys(items).length - 1]];

    const removeItem = (article: string) => {
        dispatch(removeCartItem(article, items[article]));
    };

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

            <p className="header-block-cart-modal__title">Добавлено:</p>
            <div className="header-block-cart-modal-items-wrapper">
                {item && (
                    <HeaderCartModalItem
                        {...item}
                        removeItem={() => {
                            setState();

                            setTimeout(() => {
                                removeItem(items[Object.keys(items)[Object.keys(items).length - 1]].article);
                            }, 300);
                        }}
                        hiddenCheck
                    />
                )}
            </div>
            <div className="header-block-cart-modal-btn-more">
                <button
                    className="btn-regular gray header-block-cart-modal-btn-more__btn"
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
                    href={
                        isLoadedUser
                            ? APP_ROUTE.order
                            : `/?redirect=${APP_ROUTE.order}#${ReglogStateTypesNotLogin.REGLOG}`
                    }
                    className="btn header-block-cart-modal-btn-more__btn"
                    onClick={setState}
                    scroll={false}
                    prefetch={false}
                >
                    Оформить
                </Link>

                {/* <a
					href="/order"
					className="btn header-block-cart-modal-btn-more__btn"
					onClick={setState}
				>
					Оформить
				</a> */}
            </div>
        </div>
    );
};

export default HeaderCartModalAddMessage;
