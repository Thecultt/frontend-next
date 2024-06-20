import React from 'react';
import Link from 'next/link';

import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';

interface HeaderUserMenuInterface {
    state: boolean;
}

// TODO NavLink

const HeaderUserMenu: React.FC<HeaderUserMenuInterface> = ({ state }) => {
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
                        <Link
                            href="/cabinet/history"
                            className="header-block-user-menu-block__link"
                            // className={({ isActive }) =>
                            //     getClassNames('header-block-user-menu-block__link', {
                            //         active: isActive,
                            //     })
                            // }
                        >
                            История заказов
                        </Link>
                        <Link href="/cabinet/sells" className="header-block-user-menu-block__link">
                            Мои продажи
                        </Link>
                        <Link href="/cabinet/favorites" className="header-block-user-menu-block__link">
                            Избранное
                        </Link>
                        <Link href="/cabinet/waiting" className="header-block-user-menu-block__link">
                            Лист ожидания
                        </Link>
                        <Link href="/cabinet/setting" className="header-block-user-menu-block__link">
                            Профиль
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="#reglog" className="header-block-user-menu-block__link">
                            Войти
                        </Link>
                        <Link href="#reglog" className="header-block-user-menu-block__link">
                            Зарегистрироваться
                        </Link>
                    </>
                )}
            </div>

            <div className="header-block-user-menu-block">
                <Link href="/help/all" className="header-block-user-menu-block__link">
                    Вопросы и ответы
                </Link>

                {isLoggedIn ? (
                    <span className="header-block-user-menu-block__link" onClick={logout}>
                        Выйти
                    </span>
                ) : null}
            </div>
        </div>
    );
};

export default HeaderUserMenu;
