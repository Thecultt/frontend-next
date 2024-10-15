'use client';

import React, { memo } from 'react';
import Link from 'next/link';

import { Footer, HeaderMediaLinkTab } from '@/components';
import { CATEGORIES, CATEGORY_NAMES, CATEGORY_SLUGS } from '@/constants/catalog';
import { APP_ROUTE } from '@/constants/routes';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { ReglogStateTypesNotLogin } from '@/types/reglog';
import { Noop } from '@/types/functions';
import { pushDataLayer } from '@/functions/pushDataLayer';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { selectSelectionsItems } from '@/redux/slices/selections/selectors';

import conciergeBannerMediaImage from '@/assets/images/header/header-concierge-media-banner.jpg';

const categoryAllTitles: Record<string, string> = {
    Обувь: 'Вся обувь',
    Сумки: 'Все сумки',
    Аксессуары: 'Все аксессуары',
};

interface Props {
    isVisible: boolean;
    toggleVisible: Noop;
}

export const HeaderMediaModalMenu: React.FC<Props> = memo(({ isVisible, toggleVisible }) => {
    const { isLoggedIn } = useAuthUser();

    const selections = useAppSelector(selectSelectionsItems);
    const { categories: filtersCategories, isLoaded: filtersIsLoaded } = useTypedSelector(
        ({ products_filters }) => products_filters,
    );

    const mappedCategories = CATEGORIES.map((item) => ({ title: item, ...filtersCategories[item] }));

    return (
        <div
            className={getClassNames('header-media-modal-menu', {
                active: isVisible,
            })}
        >
            <div className="header-media-modal-menu-wrapper">
                {/* <HeaderMediaSelectionsBanner /> */}
                <Link
                    href={APP_ROUTE.concierge.root}
                    onClick={toggleVisible}
                    className="header-media-modal-menu-banner"
                >
                    <div
                        className="header-media-modal-menu-banner-image"
                        style={{
                            backgroundImage: `url("${conciergeBannerMediaImage.src}")`,
                            backgroundPosition: 'center 30%',
                        }}
                    />
                    <div className="header-media-modal-menu-banner-text">
                        <h4 className="header-media-modal-menu-banner-text__title">Консьерж-сервис</h4>
                        <p className="header-media-modal-menu-banner-text__subtitle">
                            Найдем и доставим вам сумки и украшения главных luxury-брендов
                        </p>
                    </div>
                </Link>

                <div className="header-media-modal-menu-links">
                    <Link
                        href={getCatalogFiltersUrl({
                            category_slug: CATEGORY_SLUGS.new,
                        })}
                        className="header-media-modal-menu-links-link"
                        onClick={toggleVisible}
                    >
                        Новинки
                    </Link>

                    <Link
                        href={getCatalogFiltersUrl({
                            category_slug: CATEGORY_SLUGS.popular,
                        })}
                        className="header-media-modal-menu-links-link"
                        onClick={toggleVisible}
                    >
                        Популярное
                    </Link>

                    {selections.length > 0 && (
                        <HeaderMediaLinkTab title="Подборки">
                            {selections.map((item) => (
                                <Link
                                    href={getCatalogFiltersUrl({
                                        selection: item.id.toString(),
                                    })}
                                    className="header-media-modal-menu-links__link"
                                    key={item.id}
                                    onClick={toggleVisible}
                                >
                                    {item.title || '-'}
                                </Link>
                            ))}
                        </HeaderMediaLinkTab>
                    )}

                    {mappedCategories.map((category, index) => (
                        <HeaderMediaLinkTab
                            title={category.title}
                            linkTitle={getCatalogFiltersUrl({
                                category_slug: category.slug,
                            })}
                            linkClick={toggleVisible}
                            key={`header-media-modal-menu-links-tab-${index}`}
                        >
                            {filtersIsLoaded &&
                                category.subsubcategories &&
                                Object.keys(category.subsubcategories).map((subsubcategory, subindex) => (
                                    <Link
                                        href={getCatalogFiltersUrl({
                                            category_slug: category.slug,
                                            types: [subsubcategory],
                                        })}
                                        className="header-media-modal-menu-links__link"
                                        key={`header-media-modal-menu-links__link-${category}-${subsubcategory}-${subindex}`}
                                        onClick={toggleVisible}
                                    >
                                        {subsubcategory}
                                    </Link>
                                ))}

                            {[CATEGORY_NAMES.shoes, CATEGORY_NAMES.bags, CATEGORY_NAMES.accessories].includes(
                                category.title,
                            ) && (
                                <Link
                                    href={getCatalogFiltersUrl({
                                        category_slug: category.slug,
                                    })}
                                    className="header-media-modal-menu-links__link"
                                    onClick={toggleVisible}
                                >
                                    {categoryAllTitles[category.title]}
                                </Link>
                            )}

                            <Link
                                href={getCatalogFiltersUrl({
                                    category_slug: category.slug,
                                    boutique: true,
                                })}
                                className="header-media-modal-menu-links-boutique"
                                onClick={toggleVisible}
                            >
                                <span className="header-media-modal-menu-links-boutique__badge">Новое от брендов</span>
                                <p className="header-media-modal-menu-links-boutique__subtitle">
                                    Лоты от брендов и из бутиков-партнеров
                                </p>
                            </Link>
                        </HeaderMediaLinkTab>
                    ))}

                    <Link
                        href={APP_ROUTE.concierge.root}
                        className="header-media-modal-menu-links-link"
                        onClick={toggleVisible}
                    >
                        Консьерж
                    </Link>

                    <Link
                        href={APP_ROUTE.brands}
                        className="header-media-modal-menu-links-link"
                        onClick={toggleVisible}
                    >
                        Бренды
                    </Link>

                    <Link href={APP_ROUTE.auth} className="header-media-modal-menu-links-link" onClick={toggleVisible}>
                        Подлинность
                    </Link>

                    <Link
                        href={getCatalogFiltersUrl({
                            category_slug: CATEGORY_SLUGS.sale,
                        })}
                        className="header-media-modal-menu-links-link"
                        onClick={toggleVisible}
                    >
                        <b>THE CULTT SALE</b>
                    </Link>

                    <HeaderMediaLinkTab title="Личный кабинет">
                        <Link
                            href={
                                isLoggedIn
                                    ? APP_ROUTE.cabinet.setting
                                    : `/?redirect=${APP_ROUTE.cabinet.setting}#${ReglogStateTypesNotLogin.REGLOG}`
                            }
                            className="header-media-modal-menu-links__link"
                            onClick={toggleVisible}
                        >
                            Профиль
                        </Link>
                        <Link
                            href={APP_ROUTE.sell[isLoggedIn ? 'create' : 'info']}
                            className="header-media-modal-menu-links__link"
                            onClick={toggleVisible}
                        >
                            Мои продажи
                        </Link>
                        <Link
                            href={
                                isLoggedIn
                                    ? APP_ROUTE.cabinet.history
                                    : `/?redirect=${APP_ROUTE.cabinet.setting}#${ReglogStateTypesNotLogin.REGLOG}`
                            }
                            className="header-media-modal-menu-links__link"
                            onClick={toggleVisible}
                        >
                            История заказов
                        </Link>
                        <Link
                            href={
                                isLoggedIn
                                    ? APP_ROUTE.cabinet.favorites
                                    : `/?redirect=${APP_ROUTE.cabinet.setting}#${ReglogStateTypesNotLogin.REGLOG}`
                            }
                            className="header-media-modal-menu-links__link"
                            onClick={toggleVisible}
                        >
                            Избранное
                        </Link>
                        <Link
                            href={
                                isLoggedIn
                                    ? APP_ROUTE.cabinet.waiting
                                    : `/?redirect=${APP_ROUTE.cabinet.setting}#${ReglogStateTypesNotLogin.REGLOG}`
                            }
                            className="header-media-modal-menu-links__link"
                            onClick={toggleVisible}
                        >
                            Лист ожидания
                        </Link>
                    </HeaderMediaLinkTab>

                    <HeaderMediaLinkTab title="Сервисы для продажи">
                        <Link
                            href={APP_ROUTE.sell.info}
                            className="header-media-modal-menu-links__link"
                            onClick={toggleVisible}
                        >
                            Продажа
                        </Link>
                        <Link
                            href={APP_ROUTE.exchange}
                            className="header-media-modal-menu-links__link"
                            onClick={toggleVisible}
                        >
                            Обмен
                        </Link>
                        <Link
                            href={APP_ROUTE.vipService}
                            className="header-media-modal-menu-links__link"
                            onClick={toggleVisible}
                        >
                            VIP-сервис
                        </Link>
                    </HeaderMediaLinkTab>
                </div>

                <div className="header-media-modal-menu-btn">
                    <Link
                        href={APP_ROUTE.sell[isLoggedIn ? 'create' : 'info']}
                        className="btn header-media-modal-menu-btn__btn"
                        onClick={() => {
                            pushDataLayer('sell_click');
                            toggleVisible();
                        }}
                    >
                        Продать
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
});
