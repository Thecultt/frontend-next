import React from 'react';
import Link from 'next/link';

import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';
import { NavLink } from '@/components';
import { ReglogStateTypesNotLogin } from '@/types/reglog';

interface HeaderUserMenuInterface {
    state: boolean;
    onClose?: () => void;
}

const HeaderUserMenu: React.FC<HeaderUserMenuInterface> = ({ state, onClose }) => {
    const { isLoggedIn, logout } = useAuthUser();

    return (
        <div
            className={getClassNames('header-block-user-menu', {
                active: state,
            })}
        >
            <div className="header-block-user-menu-block">
                {isLoggedIn ? (
                    <>
                        <NavLink
                            href="/cabinet/history"
                            className="header-block-user-menu-block__link"
                            onClick={onClose}
                        >
                            История заказов
                        </NavLink>
                        <NavLink href="/cabinet/sells" className="header-block-user-menu-block__link" onClick={onClose}>
                            Мои продажи
                        </NavLink>
                        <NavLink
                            href="/cabinet/favorites"
                            className="header-block-user-menu-block__link"
                            onClick={onClose}
                        >
                            Избранное
                        </NavLink>
                        <NavLink
                            href="/cabinet/waiting"
                            className="header-block-user-menu-block__link"
                            onClick={onClose}
                        >
                            Лист ожидания
                        </NavLink>
                        <NavLink
                            href="/cabinet/setting"
                            className="header-block-user-menu-block__link"
                            onClick={onClose}
                        >
                            Профиль
                        </NavLink>
                    </>
                ) : (
                    <>
                        <Link
                            href={`#${ReglogStateTypesNotLogin.REGLOG}`}
                            className="header-block-user-menu-block__link"
                            scroll={false}
                            prefetch={false}
                            onClick={onClose}
                        >
                            Войти
                        </Link>
                        <Link
                            href={`#${ReglogStateTypesNotLogin.REGLOG}`}
                            className="header-block-user-menu-block__link"
                            scroll={false}
                            prefetch={false}
                            onClick={onClose}
                        >
                            Зарегистрироваться
                        </Link>
                    </>
                )}
            </div>

            <div className="header-block-user-menu-block">
                <Link href="/help/all" className="header-block-user-menu-block__link" onClick={onClose}>
                    Вопросы и ответы
                </Link>

                {isLoggedIn && (
                    <span className="header-block-user-menu-block__link" onClick={logout}>
                        Выйти
                    </span>
                )}
            </div>
        </div>
    );
};

export default HeaderUserMenu;
