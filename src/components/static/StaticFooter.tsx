import React from 'react';

import { APP_PROD_DOMAIN } from '@/constants/app';
import { APP_ROUTE } from '@/constants/routes';
import { STATIC_FOOTER_MENU } from '@/constants/static';
import { FOOTER_BOTTOM_LINKS } from '@/constants/menu';

export const StaticFooter = () => (
    <footer className="static-footer">
        <div className="static-footer__container">
            <div className="static-footer__logo">
                <a href={`${APP_PROD_DOMAIN}${APP_ROUTE.home}`} title="Перейти на главную">
                    <img width={100} src={`${APP_PROD_DOMAIN}/images/seo/logo.svg`} alt="Логотип THE CULTT" />
                </a>
            </div>
            <nav className="static-footer__navigation" aria-label="Нижняя навигация">
                <ul>
                    {STATIC_FOOTER_MENU.map(({ title, items }) => (
                        <li key={title}>
                            <h3>{title}</h3>
                            <ul>
                                {items.map((item) => (
                                    <li key={item.title}>
                                        <a
                                            href={item.href}
                                            className="static-footer__navigation-item"
                                            title={item.title}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

        <div className="static-footer__container">
            <p>© Все права защищены {new Date().getFullYear()}, THE CULTT</p>

            <nav>
                <ul>
                    {FOOTER_BOTTOM_LINKS.map((item) => (
                        <li key={item.title}>
                            <a href={item.href} title={item.title}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </footer>
);
