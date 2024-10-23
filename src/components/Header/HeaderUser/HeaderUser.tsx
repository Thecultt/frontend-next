'use client';

import React from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { HeaderUserMenu } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { setHeaderCatalogMenuIsVisible } from '@/redux/actions/header';

const HeaderUser: React.FC = () => {
    const dispatch = useAppDispatch();

    const PopupRef = React.useRef<HTMLDivElement>(null);
    const [state, setState] = React.useState(false);

    const toggleClickModalUser = () => {
        const nextState = !state;

        if (nextState) {
            dispatch(setHeaderCatalogMenuIsVisible(false));
        }

        setState(nextState);
    };

    const closeModalUser = () => {
        setState(false);
    };

    useOnClickOutside(PopupRef, closeModalUser);

    return (
        <div className="header-block-user" ref={PopupRef}>
            <button
                className={getClassNames('header-block-user__icon', {
                    active: state,
                })}
                onClick={toggleClickModalUser}
            >
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="39" height="39" rx="19.5" fill="#F8F8F8" />
                    <mask id="path-2-inside-1_97_2367" fill="white">
                        <path d="M15.4556 13.7419C15.4556 11.123 17.5275 9 20.0834 9C22.6392 9 24.7111 11.123 24.7111 13.7419C24.7111 16.3608 22.6392 18.4839 20.0834 18.4839C17.5275 18.4839 15.4556 16.3608 15.4556 13.7419Z" />
                        <path d="M20.0834 19.8387C12.58 19.8391 10.1667 25.2471 10.1667 26.6074C10.1667 27.9677 10.1667 30 20.0834 30C30 30 30 27.9677 30 26.6074C30 25.2581 27.5209 19.8383 20.0834 19.8387Z" />
                    </mask>
                    <path
                        d="M20.0834 19.8387L20.0833 18.3387L20.0834 19.8387ZM20.0834 16.9839C18.3902 16.9839 16.9556 15.5671 16.9556 13.7419H13.9556C13.9556 17.1546 16.6648 19.9839 20.0834 19.9839V16.9839ZM23.2111 13.7419C23.2111 15.5671 21.7765 16.9839 20.0834 16.9839V19.9839C23.5019 19.9839 26.2111 17.1546 26.2111 13.7419H23.2111ZM20.0834 10.5C21.7765 10.5 23.2111 11.9168 23.2111 13.7419H26.2111C26.2111 10.3293 23.5019 7.5 20.0834 7.5V10.5ZM20.0834 7.5C16.6648 7.5 13.9556 10.3293 13.9556 13.7419H16.9556C16.9556 11.9168 18.3902 10.5 20.0834 10.5V7.5ZM11.6667 26.6074C11.6667 26.6295 11.6672 26.5455 11.7257 26.3439C11.7796 26.1579 11.87 25.9166 12.007 25.6381C12.281 25.081 12.721 24.4166 13.3653 23.7804C14.6281 22.5333 16.7295 21.3389 20.0834 21.3387L20.0833 18.3387C15.9339 18.3389 13.077 19.8487 11.2573 21.6458C10.3603 22.5317 9.72799 23.4744 9.31504 24.3139C8.92449 25.1079 8.66669 25.9403 8.66669 26.6074H11.6667ZM20.0834 21.3387C23.4001 21.3385 25.504 22.5327 26.7791 23.7865C27.429 24.4256 27.8757 25.0926 28.1546 25.6509C28.294 25.93 28.3861 26.1711 28.441 26.356C28.5008 26.5576 28.5 26.6368 28.5 26.6074H31.5C31.5 25.9347 31.2324 25.0991 30.8383 24.3101C30.42 23.4727 29.7819 22.5318 28.8824 21.6473C27.0586 19.854 24.2041 18.3385 20.0833 18.3387L20.0834 21.3387ZM28.5 26.6074C28.5 26.9762 28.4849 27.0741 28.4552 27.1474C28.4506 27.1587 28.4081 27.2968 28.0406 27.4979C27.1666 27.9759 25.0353 28.5 20.0834 28.5V31.5C25.0481 31.5 27.8751 31.0079 29.4803 30.1298C30.3523 29.6528 30.9297 29.0278 31.235 28.2755C31.5151 27.5851 31.5 26.9188 31.5 26.6074H28.5ZM20.0834 28.5C15.1314 28.5 13.0001 27.9759 12.1262 27.4979C11.7586 27.2968 11.7161 27.1587 11.7115 27.1474C11.6818 27.0741 11.6667 26.9762 11.6667 26.6074H8.66669C8.66669 26.9188 8.65156 27.5851 8.93173 28.2755C9.23702 29.0278 9.81438 29.6528 10.6864 30.1298C12.2916 31.0079 15.1186 31.5 20.0834 31.5V28.5Z"
                        mask="url(#path-2-inside-1_97_2367)"
                    />
                </svg>
            </button>

            <HeaderUserMenu state={state} onClose={closeModalUser} />
        </div>
    );
};

export default HeaderUser;
