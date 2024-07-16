import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';

interface Props {
    onClose?: () => void;
}

export const HeaderTopMessageVisit: React.FC<Props> = ({ onClose }) => (
    <div className="header-top-message">
        <Link href={APP_ROUTE.visit} className="header-top-message-link" onClick={onClose}>
            <div className="container">
                <div className="header-top-message-link-wrapper">
                    <p className="header-top-message-link__text">Визит в THE CULTT</p>
                </div>
            </div>
        </Link>

        {/* <div className='header-top-message-link'>
				<div className="container">
					<div className="header-top-message-link-wrapper">
						<p className="header-top-message-link__text">
							Технические работы. Мы правда недолго!
						</p>
					</div>
				</div>
			</div> */}

        <div className="header-top-message-close">
            <div className="container">
                <div className="header-top-message-close-wrapper">
                    <div className="header-top-message-close__close" onClick={onClose}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.5 4.5L4.5 13.5M4.5 4.5L13.5 13.5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
