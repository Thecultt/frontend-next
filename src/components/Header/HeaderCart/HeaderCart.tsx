import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setCartIsVisibleMessage } from '@/redux/actions/cart';
import { HeaderCartModal, HeaderCartModalAddMessage } from '@/components';
import { getClassNames } from '@/functions/getClassNames';

const HeaderCart: React.FC = () => {
    const dispatch = useDispatch();

    const [state, setState] = React.useState<boolean>(false);

    const PopupRef = React.useRef<HTMLDivElement>(null);

    const { items, isVisibleMessage } = useTypedSelector(({ cart }) => cart);

    const closeIsVisibleMessage = () => {
        dispatch(setCartIsVisibleMessage(false));
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', togglePopup);
        document.addEventListener('touchstart', togglePopup);

        return () => {
            document.removeEventListener('mousedown', togglePopup);
            document.removeEventListener('touchstart', togglePopup);
        };
    }, [PopupRef]);

    const toggleClickModarCart = () => {
        setState(!state);
        dispatch(setCartIsVisibleMessage(false));
    };

    const togglePopup = (e: any) => {
        if (PopupRef.current && !PopupRef.current.contains(e.target)) {
            setState(false);
            dispatch(setCartIsVisibleMessage(false));
        }
    };

    return (
        <div className="header-block-cart-wrapper" ref={PopupRef}>
            <div className="header-block-cart" onClick={toggleClickModarCart}>
                <button
                    className={getClassNames('header-block-cart__icon', {
                        active: state,
                    })}
                >
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="38" height="37.7778" rx="18.8889" fill="#F7F4F0" />

                        <path
                            d="M13.6667 10L11 13.5556V26C11 26.4715 11.1873 26.9237 11.5207 27.2571C11.8541 27.5905 12.3063 27.7778 12.7778 27.7778H25.2222C25.6937 27.7778 26.1459 27.5905 26.4793 27.2571C26.8127 26.9237 27 26.4715 27 26V13.5556L24.3333 10H13.6667Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path d="M11 13.5586H27" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                            d="M22.5564 17.1133C22.5564 18.0563 22.1818 18.9606 21.515 19.6274C20.8482 20.2942 19.9439 20.6688 19.0009 20.6688C18.0579 20.6688 17.1535 20.2942 16.4867 19.6274C15.8199 18.9606 15.4453 18.0563 15.4453 17.1133"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {Object.keys(items).length ? (
                    <span className="header-block-cart__count">{Object.keys(items).length}</span>
                ) : null}
            </div>

            <HeaderCartModalAddMessage
                state={isVisibleMessage}
                setState={closeIsVisibleMessage}
                openCart={() => setState(true)}
            />

            <HeaderCartModal state={state} setState={() => setState(false)} />
        </div>
    );
};

export default HeaderCart;
