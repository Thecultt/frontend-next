'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useOnClickOutside } from 'usehooks-ts';

import { HeaderCartModal, HeaderCartModalAddMessage } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { useCart } from '@/hooks/catalog/useCart';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setCartIsVisibleMessage } from '@/redux/actions/cart';
import { setHeaderCartIsVisible, setHeaderCatalogMenuIsVisible } from '@/redux/actions/header';

const HeaderCart: React.FC = React.memo(() => {
    const dispatch = useDispatch();

    const PopupRef = React.useRef<HTMLDivElement>(null);

    const { cartIsVisible } = useTypedSelector(({ header }) => header);

    const { allCart, isVisibleMessage } = useCart();
    const cartCount = allCart.length;

    const closeIsVisibleMessage = () => {
        dispatch(setCartIsVisibleMessage(false));
    };

    const toggleClickModalCart = () => {
        const nextCartIsVisible = !cartIsVisible;

        if (nextCartIsVisible) {
            dispatch(setHeaderCatalogMenuIsVisible(false));
        }

        dispatch(setHeaderCartIsVisible(nextCartIsVisible));
        dispatch(setCartIsVisibleMessage(false));
    };

    const closePopup = () => {
        if (cartIsVisible) {
            dispatch(setHeaderCartIsVisible(false));
            dispatch(setCartIsVisibleMessage(false));
        }
    };

    useOnClickOutside(PopupRef, closePopup);

    return (
        <div className="header-block-cart-wrapper" ref={PopupRef}>
            <div className="header-block-cart" onClick={toggleClickModalCart}>
                <button
                    className={getClassNames('header-block-cart__icon', {
                        active: cartIsVisible,
                    })}
                >
                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="39" height="39" rx="19.5" fill="#F8F8F8" />
                        <path d="M15.612 15.5247C15.7123 15.9266 16.1194 16.1711 16.5213 16.0708C16.9232 15.9705 17.1677 15.5634 17.0674 15.1615L15.612 15.5247ZM15.8691 13.4576L16.5968 13.276L15.8691 13.4576ZM22.8179 13.4576L22.0902 13.276V13.276L22.8179 13.4576ZM21.7018 9.88764L21.2075 10.4516L21.7018 9.88764ZM16.9852 9.88764L16.4909 9.32363V9.32363L16.9852 9.88764ZM11.9955 27.9776L11.2953 28.2464H11.2953L11.9955 27.9776ZM14.5492 15.1654L14.2075 14.4978L14.1037 14.5509L14.0209 14.6331L14.5492 15.1654ZM27.0045 27.9776L27.7047 28.2464L27.0045 27.9776ZM24.4507 15.1654L24.9791 14.6331L24.8963 14.5509L24.7925 14.4978L24.4507 15.1654ZM19.3436 9L19.3435 9.75L19.3436 9ZM21.6197 15.1615C21.5194 15.5634 21.7639 15.9705 22.1658 16.0708C22.5676 16.1711 22.9747 15.9266 23.075 15.5247L21.6197 15.1615ZM17.0674 15.1615L16.5968 13.276L15.1415 13.6392L15.612 15.5247L17.0674 15.1615ZM21.2075 10.4516C22.0069 11.1524 22.3481 12.2428 22.0902 13.276L23.5456 13.6392C23.9394 12.0614 23.4187 10.3952 22.1962 9.32363L21.2075 10.4516ZM16.5968 13.276C16.339 12.2428 16.6801 11.1524 17.4796 10.4516L16.4909 9.32363C15.2683 10.3952 14.7477 12.0614 15.1415 13.6392L16.5968 13.276ZM12.6956 27.7087C12.0271 25.9679 11.9062 23.6596 12.3317 21.406C12.7574 19.1513 13.71 17.0552 15.0776 15.6977L14.0209 14.6331C12.3754 16.2665 11.3208 18.6748 10.8578 21.1277C10.3945 23.5816 10.5033 26.184 11.2953 28.2464L12.6956 27.7087ZM14.891 15.833C16.0807 15.2241 17.6065 14.538 19.6366 14.5915L19.6762 13.0921C17.2637 13.0285 15.4635 13.8549 14.2075 14.4978L14.891 15.833ZM19.6641 29.25C17.8946 29.232 16.1575 29.0376 14.8243 28.7076C14.1554 28.542 13.6175 28.3493 13.2354 28.1451C12.8287 27.9279 12.7154 27.7603 12.6956 27.7087L11.2953 28.2464C11.5114 28.8091 12.0207 29.1968 12.5285 29.4681C13.0609 29.7526 13.7293 29.9818 14.4638 30.1636C15.9372 30.5284 17.7948 30.731 19.6487 30.75L19.6641 29.25ZM27.7047 28.2464C28.4967 26.184 28.6055 23.5816 28.1422 21.1277C27.6791 18.6748 26.6246 16.2665 24.9791 14.6331L23.9224 15.6977C25.2899 17.0552 26.2426 19.1513 26.6682 21.406C27.0937 23.6596 26.9729 25.9679 26.3044 27.7087L27.7047 28.2464ZM24.7925 14.4978C23.5365 13.8549 21.7362 13.0285 19.3238 13.0921L19.3633 14.5915C21.3934 14.538 22.9193 15.2241 24.109 15.833L24.7925 14.4978ZM19.3512 30.75C21.2052 30.731 23.0627 30.5284 24.5362 30.1636C25.2706 29.9818 25.9391 29.7526 26.4714 29.4681C26.9793 29.1968 27.4886 28.8091 27.7047 28.2464L26.3044 27.7087C26.2845 27.7603 26.1712 27.9279 25.7646 28.1451C25.3824 28.3493 24.8446 28.542 24.1757 28.7076C22.8425 29.0376 21.1054 29.232 19.3359 29.25L19.3512 30.75ZM17.4796 10.4516C18.0135 9.98368 18.6778 9.75 19.3435 9.75L19.3436 8.25C18.3261 8.24999 17.3072 8.60807 16.4909 9.32363L17.4796 10.4516ZM19.3435 9.75C20.0093 9.75 20.6736 9.98369 21.2075 10.4516L22.1962 9.32363C21.3798 8.60808 20.361 8.25001 19.3436 8.25L19.3435 9.75ZM23.075 15.5247L23.5456 13.6392L22.0902 13.276L21.6197 15.1615L23.075 15.5247Z" />
                    </svg>
                </button>

                {cartCount > 0 && <span className="header-block-cart__count">{cartCount}</span>}
            </div>

            <HeaderCartModalAddMessage state={isVisibleMessage} setState={closeIsVisibleMessage} />
            <HeaderCartModal />
        </div>
    );
});

export default HeaderCart;
