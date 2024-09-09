'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { setHeaderTopMessageHeight } from '@/redux/actions/header';
import { Noop } from '@/types/functions';

interface Props {
    onClose?: Noop;
}

export const HeaderTopMessageSubscribe: React.FC<Props> = ({ onClose }) => {
    const dispatch = useDispatch();
    const blockRef = React.useRef<HTMLDivElement>(null);

    const handleClose: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        onClose?.();
    };

    const scrollToSubscribeForm = () => {
        const block = document.getElementById('footer-email');
        block?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    React.useEffect(() => {
        if (blockRef.current) {
            dispatch(setHeaderTopMessageHeight(blockRef.current.getBoundingClientRect().height));
        }

        return () => {
            dispatch(setHeaderTopMessageHeight(0));
        };
    }, []);

    return (
        <div className="header-top-message-subscribe" onClick={scrollToSubscribeForm} ref={blockRef}>
            <div className="container header-top-message-subscribe__wrapper">
                <div className="header-top-message-subscribe__content">
                    <svg
                        className="header-top-message-subscribe__icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.25 5.49994C6.24993 4.83157 6.45593 4.17943 6.83993 3.63238C7.22393 3.08533 7.76725 2.66997 8.39587 2.4429C9.02449 2.21584 9.70783 2.1881 10.3528 2.36348C10.9977 2.53885 11.5729 2.90881 12 3.42295C12.5274 2.78356 13.2791 2.36984 14.1015 2.26639C14.9238 2.16294 15.7546 2.37759 16.424 2.86642C17.0933 3.35526 17.5506 4.08135 17.7022 4.89618C17.8539 5.711 17.6886 6.553 17.24 7.24995H18C18.7293 7.24995 19.4288 7.53968 19.9445 8.0554C20.4603 8.57113 20.75 9.2706 20.75 9.99995V11.9999C20.7502 12.3825 20.6251 12.7546 20.3937 13.0593C20.1624 13.3639 19.8376 13.5844 19.469 13.6869C19.613 15.5129 19.529 17.3519 19.219 19.1599C19.1289 19.6853 18.8705 20.1672 18.4827 20.533C18.0949 20.8988 17.5988 21.1286 17.069 21.1879L16.154 21.2899C13.3929 21.5985 10.6061 21.5985 7.845 21.2899L6.931 21.1879C6.40124 21.1286 5.9051 20.8988 5.51732 20.533C5.12954 20.1672 4.87112 19.6853 4.781 19.1599C4.4711 17.353 4.38712 15.5146 4.531 13.6869C4.16244 13.5844 3.83762 13.3639 3.60627 13.0593C3.37492 12.7546 3.24978 12.3825 3.25 11.9999V9.99995C3.25 9.2706 3.53973 8.57113 4.05546 8.0554C4.57118 7.53968 5.27065 7.24995 6 7.24995H6.76C6.42577 6.72755 6.24875 6.1201 6.25 5.49994ZM11.25 5.49994C11.25 5.03582 11.0656 4.5907 10.7374 4.26251C10.4092 3.93432 9.96413 3.74994 9.5 3.74994C9.03587 3.74994 8.59075 3.93432 8.26256 4.26251C7.93437 4.5907 7.75 5.03582 7.75 5.49994C7.75 5.96407 7.93437 6.40919 8.26256 6.73738C8.59075 7.06557 9.03587 7.24995 9.5 7.24995C9.96413 7.24995 10.4092 7.06557 10.7374 6.73738C11.0656 6.40919 11.25 5.96407 11.25 5.49994ZM14.5 7.24995C14.7298 7.24995 14.9574 7.20468 15.1697 7.11673C15.382 7.02879 15.5749 6.89988 15.7374 6.73738C15.8999 6.57488 16.0288 6.38196 16.1168 6.16964C16.2047 5.95732 16.25 5.72976 16.25 5.49994C16.25 5.27013 16.2047 5.04257 16.1168 4.83025C16.0288 4.61793 15.8999 4.42501 15.7374 4.26251C15.5749 4.10001 15.382 3.9711 15.1697 3.88316C14.9574 3.79521 14.7298 3.74994 14.5 3.74994C14.0359 3.74994 13.5908 3.93432 13.2626 4.26251C12.9344 4.5907 12.75 5.03582 12.75 5.49994C12.75 5.96407 12.9344 6.40919 13.2626 6.73738C13.5908 7.06557 14.0359 7.24995 14.5 7.24995ZM4.75 9.99995C4.75 9.30995 5.31 8.74995 6 8.74995H11.25V12.2499H5C4.9337 12.2499 4.87011 12.2236 4.82322 12.1767C4.77634 12.1298 4.75 12.0662 4.75 11.9999V9.99995ZM12.75 13.7499H17.969C18.109 15.4699 18.033 17.2029 17.741 18.9059C17.7058 19.1109 17.605 19.2989 17.4537 19.4416C17.3023 19.5843 17.1087 19.6739 16.902 19.6969L15.988 19.7999C14.912 19.9199 13.831 19.9909 12.75 20.0139V13.7499ZM12.75 12.2499H19C19.0663 12.2499 19.1299 12.2236 19.1768 12.1767C19.2237 12.1298 19.25 12.0662 19.25 11.9999V9.99995C19.25 9.30995 18.69 8.74995 18 8.74995H12.75V12.2499ZM11.25 13.7499V20.0139C10.168 19.9914 9.08756 19.92 8.012 19.7999L7.098 19.6969C6.89143 19.674 6.69792 19.5845 6.5466 19.442C6.39529 19.2995 6.29435 19.1118 6.259 18.9069C5.9672 17.2043 5.8906 15.4717 6.031 13.7499H11.25Z"
                            fill="#285141"
                        />
                    </svg>

                    <h3 className="header-top-message-subscribe__title">
                        Подпишитесь на рассылку и получите промокод на 2000₽
                    </h3>
                </div>
                <button type="button" className="header-top-message-subscribe__close" onClick={handleClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 6L6 18M6 6L18 18"
                            stroke="#0B0B0B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};
