import React, { memo } from 'react';
import Link from 'next/link';

import { Footer, HeaderMediaLinkTab } from '@/components';
import { CATEGORIES, SORT } from '@/constants/catalog';
import { APP_ROUTE } from '@/constants/routes';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { getClassNames } from '@/functions/getClassNames';
import { useAuthUser } from '@/hooks/useAuthUser';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { ReglogStateTypesNotLogin } from '@/types/reglog';
import { Noop } from '@/types/functions';
import { pushDataLayer } from '@/functions/pushDataLayer';

import CatalogBannerImagePriceDrop2 from '@/assets/images/catalog/catalog-banner-price-drop2.jpg';

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

    const { items: selections } = useTypedSelector(({ selections }) => selections);
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
                    href={getCatalogFiltersUrl({
                        boutique: false,
                        price_drop: true,
                        categories: CATEGORIES,
                        availability: ['Доступно', 'На примерке'],
                        page: 1,
                        sort: SORT.popular,
                    })}
                    onClick={toggleVisible}
                    className="header-media-modal-menu-banner"
                >
                    <div
                        className="header-media-modal-menu-banner-image"
                        style={{
                            backgroundImage: `url("${CatalogBannerImagePriceDrop2.src}")`,
                        }}
                    />

                    <div className="header-media-modal-menu-banner-text">
                        <h4 className="header-media-modal-menu-banner-text__title">THE CULTT SALE</h4>

                        <p className="header-media-modal-menu-banner-text__subtitle">
                            Культовые лоты <br /> по сниженным ценам — успейте забрать их первыми
                        </p>
                    </div>
                </Link>

                <p className="header-media-modal-menu__title">Меню</p>

                <div className="header-media-modal-menu-links">
                    <Link
                        href={getCatalogFiltersUrl({
                            boutique: false,
                            categories: CATEGORIES,
                            availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                            price_drop: false,
                            page: 1,
                            sort: SORT.a,
                        })}
                        className="header-media-modal-menu-links-link"
                        onClick={toggleVisible}
                    >
                        Новинки
                    </Link>

                    <Link
                        href={getCatalogFiltersUrl({
                            boutique: false,
                            categories: CATEGORIES,
                            availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                            price_drop: false,
                            page: 1,
                            sort: SORT.popular,
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
                                        selection: item.id,
                                        sort: SORT.popular,
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
                                categories: [category.title],
                                availability: CATEGORIES,
                                page: 1,
                                sort: SORT.shuffle,
                            })}
                            key={`header-media-modal-menu-links-tab${index}`}
                        >
                            {filtersIsLoaded &&
                                Object.keys(category.subsubcategories).map((subsubcategory, subindex) => (
                                    <Link
                                        href={getCatalogFiltersUrl({
                                            categories: [category.title],
                                            types: [subsubcategory],
                                            availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                                            page: 1,
                                            sort: SORT.a,
                                        })}
                                        className="header-media-modal-menu-links__link"
                                        key={`header-media-modal-menu-links__link-${category}-${subsubcategory}-${subindex}`}
                                        onClick={toggleVisible}
                                    >
                                        {subsubcategory}
                                    </Link>
                                ))}

                            {['Обувь', 'Сумки', 'Аксессуары'].includes(category.title) ? (
                                <Link
                                    href={getCatalogFiltersUrl({
                                        categories: [category.title],
                                        availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                                        page: 1,
                                        sort: SORT.a,
                                    })}
                                    className="header-media-modal-menu-links__link"
                                    onClick={toggleVisible}
                                >
                                    {categoryAllTitles[category.title]}
                                </Link>
                            ) : null}

                            <Link
                                onClick={toggleVisible}
                                href={getCatalogFiltersUrl({
                                    boutique: true,
                                    categories: [category.title],
                                    page: 1,
                                    sort: SORT.a,
                                })}
                                className="header-media-modal-menu-links-boutique"
                            >
                                <span className="header-media-modal-menu-links-boutique__badge">Из бутика</span>

                                <p className="header-media-modal-menu-links-boutique__subtitle">
                                    Новые, не были в носке
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
                            boutique: false,
                            price_drop: true,
                            categories: CATEGORIES,
                            availability: ['Доступно', 'На примерке'],
                            page: 1,
                            sort: SORT.popular,
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
