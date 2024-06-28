'use client';

import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { CabinetMenuMedia, NavLink } from '@/components';
import { MEDIA_SIZES } from '@/constants/styles';
import { APP_ROUTE } from '@/constants/routes';

const CabinetMenu: React.FC = () => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    if (isMobile) {
        return <CabinetMenuMedia />;
    }

    return (
        <div className="cabinet-menu">
            <NavLink href={APP_ROUTE.cabinet.history} className="cabinet-menu__item">
                История заказов
            </NavLink>
            <NavLink href={APP_ROUTE.cabinet.sells} className="cabinet-menu__item">
                Мои продажи
            </NavLink>
            <NavLink href={APP_ROUTE.cabinet.favorites} className="cabinet-menu__item">
                Избранное
            </NavLink>
            <NavLink href={APP_ROUTE.cabinet.waiting} className="cabinet-menu__item">
                Лист ожидания
            </NavLink>
            <NavLink href={APP_ROUTE.cabinet.setting} className="cabinet-menu__item">
                Профиль
            </NavLink>
        </div>
    );
};

export default CabinetMenu;
