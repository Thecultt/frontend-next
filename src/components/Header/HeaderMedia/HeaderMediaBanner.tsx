import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';
import HeaderMediaMenuBannerConcierge from '@/assets/images/header-media-menu-banner-concierge.jpg';

const HeaderMediaBanner: React.FC = () => {
    return (
        <Link href={APP_ROUTE.vipService} className="header-media-modal-menu-banner">
            <div
                className="header-media-modal-menu-banner-image"
                style={{
                    backgroundImage: `url("${HeaderMediaMenuBannerConcierge.src}")`,
                }}
            ></div>

            <div className="header-media-modal-menu-banner-text">
                <h4 className="header-media-modal-menu-banner-text__title">VIP-сервис</h4>

                <p className="header-media-modal-menu-banner-text__subtitle">
                    Мы создали удобный сервис для всех, кто хочет продать от 7 лотов
                </p>
            </div>
        </Link>
    );
};

export default HeaderMediaBanner;
