import React from 'react';

import { getClassNames } from '@/functions/getClassNames';

const MenuMedia: React.FC = () => {
    const [state, setState] = React.useState<boolean>(true);

    const [prevScrollpos, setPrevScrollpos] = React.useState<number>(0);
    const [currentScrollPos, setCurrentScrollPos] = React.useState<number>(0);

    React.useEffect(() => {
        setPrevScrollpos(window.pageYOffset);

        window.onscroll = function () {
            setCurrentScrollPos(window.pageYOffset);

            if (prevScrollpos > currentScrollPos && currentScrollPos > 0) {
                setState(true);
            } else if (currentScrollPos > 100) {
                setState(false);
            }

            setPrevScrollpos(currentScrollPos);
        };
    }, [currentScrollPos]);

    return (
        <div
            className={getClassNames('menu-media', {
                active: state,
            })}
        >
            <button className="menu-media__btn active">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        id="Vector"
                        d="M15.8731 11.0895C15.8731 10.0479 15.4593 9.04892 14.7228 8.3124C13.9862 7.57588 12.9873 7.16211 11.9457 7.16211H6.05469V21.8897H12.9276C13.7087 21.8897 14.458 22.2 15.0103 22.7524C15.5627 23.3048 15.8731 24.054 15.8731 24.8352M15.8731 11.0895V24.8352M15.8731 11.0895C15.8731 10.0479 16.2868 9.04892 17.0234 8.3124C17.7599 7.57588 18.7588 7.16211 19.8004 7.16211H25.6914V21.8897H18.8186C18.0374 21.8897 17.2882 22.2 16.7358 22.7524C16.1834 23.3048 15.8731 24.054 15.8731 24.8352"
                        stroke="black"
                        strokeWidth="1.32548"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Каталог
            </button>

            <button className="menu-media__btn">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        id="Vector"
                        d="M23.9888 24.8352L19.8886 20.7349M22.2455 14.7028C22.2455 18.8675 18.8694 22.2436 14.7048 22.2436C10.5402 22.2436 7.16406 18.8675 7.16406 14.7028C7.16406 10.5382 10.5402 7.16211 14.7048 7.16211C18.8694 7.16211 22.2455 10.5382 22.2455 14.7028Z"
                        stroke="#202020"
                        strokeWidth="1.65685"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Поиск
            </button>

            <button className="menu-media__btn main">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5.83301V14.1663" stroke="#F7F4F0" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.83594 10H14.1693" stroke="#F7F4F0" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#F7F4F0" />
                </svg>
                Продать
            </button>

            <button className="menu-media__btn">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        id="Vector"
                        d="M6.66406 9.59967L9.86406 5.33301H22.6641L25.8641 9.59967M6.66406 9.59967V24.533C6.66406 25.0988 6.88882 25.6414 7.2889 26.0415C7.68898 26.4416 8.2316 26.6663 8.7974 26.6663H23.7307C24.2965 26.6663 24.8391 26.4416 25.2392 26.0415C25.6393 25.6414 25.8641 25.0988 25.8641 24.533V9.59967M6.66406 9.59967H25.8641M20.5306 13.8736C20.5306 15.0052 20.0811 16.0905 19.2809 16.8906C18.4808 17.6908 17.3955 18.1403 16.2639 18.1403C15.1323 18.1403 14.0471 17.6908 13.2469 16.8906C12.4468 16.0905 11.9973 15.0052 11.9973 13.8736"
                        stroke="#202020"
                        strokeWidth="1.32548"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Корзина
            </button>

            <button className="menu-media__btn">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        id="Vector"
                        d="M25.6245 26.6663V24.2963C25.6245 23.0391 25.1251 21.8335 24.2361 20.9445C23.3472 20.0556 22.1415 19.5562 20.8844 19.5562H11.4042C10.147 19.5562 8.94135 20.0556 8.0524 20.9445C7.16346 21.8335 6.66406 23.0391 6.66406 24.2963V26.6663M20.8832 10.0731C20.8832 12.691 18.761 14.8132 16.1431 14.8132C13.5253 14.8132 11.403 12.691 11.403 10.0731C11.403 7.45522 13.5253 5.33301 16.1431 5.33301C18.761 5.33301 20.8832 7.45522 20.8832 10.0731Z"
                        stroke="#202020"
                        strokeWidth="1.32548"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Профиль
            </button>
        </div>
    );
};

export default MenuMedia;
