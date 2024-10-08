'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useToggle } from 'usehooks-ts';
import { motion, AnimatePresence } from 'framer-motion';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setHeaderCatalogMenuIsVisible } from '@/redux/actions/header';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { getClassNames } from '@/functions/getClassNames';
import { APP_ROUTE } from '@/constants/routes';
import { DEFAULT_TRANSITION } from '@/constants/animation';
import { ChevronDownIcon } from '@/assets/icons';

import { HEADER_MENU_CATEGORIES, MAX_TYPES_COUNT } from '../constants';
import './styles.sass';

export const HeaderCatalogMenu = () => {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const ref = React.useRef<HTMLDivElement>(null);

    const { catalogMenuIsVisible, topMessageHeight } = useTypedSelector(({ header }) => header);
    const [allTypesIsVisible, toggleAllTypesIsVisible] = useToggle(false);

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const selectedCategory = HEADER_MENU_CATEGORIES[selectedIndex];

    const typesIsMore = selectedCategory.types.length > MAX_TYPES_COUNT;
    const visibleTypes =
        typesIsMore && !allTypesIsVisible ? selectedCategory.types.slice(0, MAX_TYPES_COUNT) : selectedCategory.types;

    const style = { '--top-message-height': `${topMessageHeight}px` } as React.CSSProperties;

    const closeCatalogMenu = () => {
        dispatch(setHeaderCatalogMenuIsVisible(false));
    };

    React.useEffect(() => {
        closeCatalogMenu();
    }, [pathname]);

    React.useEffect(() => {
        if (!catalogMenuIsVisible) {
            setSelectedIndex(0);
        }
    }, [catalogMenuIsVisible]);

    return createPortal(
        <AnimatePresence mode="wait">
            {catalogMenuIsVisible && (
                <>
                    <motion.div
                        key="backdrop"
                        className="header-catalog-menu-backdrop"
                        onClick={closeCatalogMenu}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={DEFAULT_TRANSITION}
                        style={style}
                    />
                    <motion.div
                        ref={ref}
                        key="menu"
                        className="header-catalog-menu"
                        initial={{ opacity: 0, y: -10 }}
                        exit={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={DEFAULT_TRANSITION}
                        style={style}
                    >
                        <div className="header-catalog-menu__wrapper container">
                            <div className="header-catalog-menu__column">
                                <nav className="header-catalog-menu__nav">
                                    {HEADER_MENU_CATEGORIES.map((category, index) => (
                                        <Link
                                            key={index}
                                            href={getCatalogFiltersUrl({
                                                category_slug: category.slug,
                                            })}
                                            className={getClassNames('header-catalog-menu-nav-item', {
                                                'header-catalog-menu-nav-item--active': index === selectedIndex,
                                            })}
                                            onMouseEnter={() => setSelectedIndex(index)}
                                            onClick={closeCatalogMenu}
                                        >
                                            <category.icon className="header-catalog-menu-nav-item__icon" />
                                            <span className="header-catalog-menu-nav-item__title">
                                                {category.title}
                                            </span>
                                        </Link>
                                    ))}
                                </nav>

                                <Link
                                    href={getCatalogFiltersUrl({
                                        boutique: true,
                                    })}
                                    className="header-catalog-menu-boutique"
                                    onClick={closeCatalogMenu}
                                >
                                    <span className="header-catalog-menu-boutique__title">Из бутика</span>
                                    <span className="header-catalog-menu-boutique__text">
                                        Лоты от брендов и из бутиков-партнеров
                                    </span>
                                </Link>
                            </div>
                            <div className="header-catalog-menu__column header-catalog-menu-nesting">
                                <div className="header-catalog-menu-nesting__types">
                                    <h5 className="header-catalog-menu-nesting__title">Типы</h5>
                                    <div className="header-catalog-menu-nesting__links">
                                        <Link
                                            href={getCatalogFiltersUrl({
                                                category_slug: selectedCategory.slug,
                                            })}
                                            className="header-catalog-menu-nesting__link"
                                            onClick={closeCatalogMenu}
                                        >
                                            {selectedCategory.fullText}
                                        </Link>
                                        {visibleTypes.map((type, index) => (
                                            <Link
                                                key={index}
                                                href={getCatalogFiltersUrl({
                                                    category_slug: selectedCategory.slug,
                                                    types: [type],
                                                })}
                                                className="header-catalog-menu-nesting__link"
                                                onClick={closeCatalogMenu}
                                            >
                                                {type}
                                            </Link>
                                        ))}
                                        {typesIsMore && (
                                            <button
                                                type="button"
                                                className={getClassNames('header-catalog-menu-nesting-all-button', {
                                                    'header-catalog-menu-nesting-all-button--active': allTypesIsVisible,
                                                })}
                                                onClick={toggleAllTypesIsVisible}
                                            >
                                                <span className="header-catalog-menu-nesting-all-button__text">
                                                    Все
                                                </span>
                                                <ChevronDownIcon className="header-catalog-menu-nesting-all-button__icon" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <div className="header-catalog-menu-nesting__brands">
                                    <h5 className="header-catalog-menu-nesting__title">Бренды</h5>
                                    <div className="header-catalog-menu-nesting__links">
                                        <Link
                                            href={APP_ROUTE.brands}
                                            className="header-catalog-menu-nesting__link"
                                            onClick={closeCatalogMenu}
                                        >
                                            Все бренды
                                        </Link>
                                        {selectedCategory.brands.map((brand, index) => (
                                            <Link
                                                key={index}
                                                href={getCatalogFiltersUrl({
                                                    category_slug: selectedCategory.slug,
                                                    brand_slug: brand.slug,
                                                })}
                                                className="header-catalog-menu-nesting__link"
                                                onClick={closeCatalogMenu}
                                            >
                                                {brand.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="header-catalog-menu__column">
                                <div className="header-catalog-menu-services">
                                    <h5 className="header-catalog-menu-services__title">Сервисы</h5>
                                    <Link
                                        href={APP_ROUTE.concierge.root}
                                        className="header-catalog-menu-services__link"
                                        onClick={closeCatalogMenu}
                                    >
                                        Консьерж-сервис
                                    </Link>
                                    <Link
                                        href={APP_ROUTE.vipService}
                                        className="header-catalog-menu-services__link"
                                        onClick={closeCatalogMenu}
                                    >
                                        VIP-сервис
                                    </Link>
                                </div>

                                <div
                                    className="header-catalog-menu-banner"
                                    style={{
                                        backgroundImage: `url("${selectedCategory.image}")`,
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body,
    );
};
