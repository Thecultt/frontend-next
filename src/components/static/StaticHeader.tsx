import React from 'react';

import { APP_ROUTE } from '@/constants/routes';
import { APP_PROD_DOMAIN } from '@/constants/app';
import { STATIC_HEADER_MENU } from '@/constants/static';

export const StaticHeader = () => (
    <header className="static-header">
        <div className="static-header__container">
            <div className="static-header__logo">
                <a href={`${APP_PROD_DOMAIN}/${APP_ROUTE.home}`} title="Перейти на главную">
                    <img width={100} src={`${APP_PROD_DOMAIN}/images/seo/logo.svg`} alt="Логотип THE CULTT" />
                </a>
            </div>
            <nav className="static-header__navigation" aria-label="Основная навигация">
                <ul>
                    {STATIC_HEADER_MENU.map(({ title, href }) => (
                        <li key={title}>
                            <a href={href} className="static-header__navigation-item" title={title}>
                                {title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
);
