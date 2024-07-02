import React from 'react';
import Link from 'next/link';

import { getClassNames } from '@/functions/getClassNames';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { APP_ROUTE } from '@/constants/routes';

import { HeaderHoverMenuCategory } from '../Header';

interface HeaderHoverMenuProps extends HeaderHoverMenuCategory {
    isOpenHoverMenu: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const HeaderHoverMenu: React.FC<HeaderHoverMenuProps> = ({
    title,
    types,
    brands,
    fullTextView,
    image,
    isOpenHoverMenu,
    onOpen,
    onClose,
}) => {
    return (
        <div
            className={getClassNames('header-hover-menu-wrapper-wrapper', {
                active: isOpenHoverMenu,
            })}
        >
            <div
                className={getClassNames('header-hover-menu-wrapper', {
                    active: isOpenHoverMenu,
                })}
                onMouseOver={() => onOpen()}
                onMouseOut={() => onClose()}
            >
                <nav className="header-hover-menu">
                    <div className="header-hover-menu-list-wrapper">
                        <div className="header-hover-menu-list type">
                            <h3 className="header-hover-menu-list__title">Тип</h3>

                            <div className="header-hover-menu-list-coll-wrapper">
                                <div className="header-hover-menu-list-coll">
                                    {types
                                        .map((type, index) => (
                                            <Link
                                                onClick={onClose}
                                                href={getCatalogFiltersUrl({
                                                    categories: [title],
                                                    types: [type],
                                                    sort: 'a',
                                                })}
                                                className="header-hover-menu-list-coll__item"
                                                key={`header-hover-menu-list-coll__item-${type}-${index}`}
                                            >
                                                {type}
                                            </Link>
                                        ))
                                        .slice(0, 4)}
                                    {/* 4 / 7 */}

                                    <Link
                                        onClick={onClose}
                                        href={getCatalogFiltersUrl({
                                            categories: [title],
                                            sort: 'a',
                                        })}
                                        className="header-hover-menu-list-coll__item last"
                                    >
                                        {fullTextView}
                                    </Link>

                                    <Link
                                        onClick={onClose}
                                        href={getCatalogFiltersUrl({
                                            categories: [title],
                                            boutique: true,
                                            sort: 'a',
                                        })}
                                        className="header-hover-menu-list-boutique"
                                    >
                                        <p className="header-hover-menu-list-boutique__btn">Из бутика</p>
                                        <p className="header-hover-menu-list-boutique__subtitle">
                                            Новые, <br /> не были в носке
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="header-hover-menu-list">
                            <h3 className="header-hover-menu-list__title">Бренды</h3>

                            <div className="header-hover-menu-list-coll-wrapper">
                                <div className="header-hover-menu-list-coll">
                                    {brands
                                        .map((brand, index) => (
                                            <Link
                                                onClick={onClose}
                                                href={getCatalogFiltersUrl({
                                                    categories: [title],
                                                    brands: [brand],
                                                    sort: 'a',
                                                })}
                                                className="header-hover-menu-list-coll__item"
                                                key={`header-hover-menu-list-coll__item-${brand}-${index}`}
                                            >
                                                {brand}
                                            </Link>
                                        ))
                                        .slice(0, 8)}
                                </div>

                                <div className="header-hover-menu-list-coll">
                                    {brands
                                        .map((brand, index) => (
                                            <Link
                                                onClick={onClose}
                                                href={getCatalogFiltersUrl({
                                                    categories: [title],
                                                    brands: [brand],
                                                    sort: 'a',
                                                })}
                                                className="header-hover-menu-list-coll__item"
                                                key={`header-hover-menu-list-coll__item-${brand}-${index}`}
                                            >
                                                {brand}
                                            </Link>
                                        ))
                                        .slice(8, 15)}

                                    <Link
                                        onClick={onClose}
                                        href={APP_ROUTE.brands}
                                        className="header-hover-menu-list-coll__item last"
                                    >
                                        Все бренды
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-hover-menu-image" style={{ backgroundImage: `url("${image}")` }}></div>
                </nav>
            </div>
        </div>
    );
};

export default HeaderHoverMenu;
