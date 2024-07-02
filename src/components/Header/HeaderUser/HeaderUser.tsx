import React from 'react';

import { HeaderUserMenu } from '@/components';
import { getClassNames } from '@/functions/getClassNames';

const HeaderUser: React.FC = () => {
    const [state, setState] = React.useState(false);

    const PopupRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        document.addEventListener('mousedown', togglePopup);
        document.addEventListener('touchstart', togglePopup);

        return () => {
            document.removeEventListener('mousedown', togglePopup);
            document.removeEventListener('touchstart', togglePopup);
        };
    }, [PopupRef]);

    // React.useEffect(() => {
    //     setState(false);
    // }, [pathname]);

    const toggleClickModalUser = () => {
        setState(!state);
    };

    const closeModalUser = () => {
        setState(false);
    };

    const togglePopup = (e: any) => {
        if (PopupRef.current && !PopupRef.current.contains(e.target)) {
            setState(false);
        }
    };

    return (
        <div className="header-block-user" ref={PopupRef}>
            <button
                className={getClassNames('header-block-user__icon', {
                    active: state,
                })}
                onClick={toggleClickModalUser}
            >
                <svg width="38" height="38" viewBox="0 0 189 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.487061" y="0.00390625" width="188.026" height="187.885" rx="93.9425" fill="#F7F4F0" />
                    <path
                        d="M94.5047 89.0446C105.358 89.0446 114.156 80.2465 114.156 69.3934C114.156 58.5403 105.358 49.7422 94.5047 49.7422C83.6517 49.7422 74.8535 58.5403 74.8535 69.3934C74.8535 80.2465 83.6517 89.0446 94.5047 89.0446Z"
                        strokeWidth="7.46"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M133.802 138.153V128.327C133.802 123.115 131.732 118.117 128.047 114.431C124.361 110.746 119.363 108.676 114.151 108.676H74.8487C69.6369 108.676 64.6385 110.746 60.9532 114.431C57.2679 118.117 55.1975 123.115 55.1975 128.327V138.153"
                        strokeWidth="7.46"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <HeaderUserMenu state={state} onClose={closeModalUser} />
        </div>
    );
};

export default HeaderUser;
