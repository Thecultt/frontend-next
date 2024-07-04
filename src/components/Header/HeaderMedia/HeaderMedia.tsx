import React from 'react';
import Link from 'next/link';

import { getClassNames } from '@/functions/getClassNames';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { HeaderMediaLinkTab, Footer } from '@/components';
import { CATEGORIES, SORT } from '@/constants/catalog';
import { useAuthUser } from '@/hooks/useAuthUser';
import { APP_ROUTE } from '@/constants/routes';
import { ReglogStateTypesNotLogin } from '@/types/reglog';

import Logo from '@/assets/images/logo.svg';

import { HeaderMediaSelectionsBanner } from './HeaderMediaSelectionsBanner';

interface HeaderMediaProps {
    setIsOpenSearch: (bool: boolean) => void;
}

const HeaderMedia: React.FC<HeaderMediaProps> = ({ setIsOpenSearch }) => {
    const [state, setState] = React.useState<boolean>(false);

    const ModalRef = React.useRef<HTMLDivElement>(null);

    const { categories: filtersCategories, isLoaded: filtersIsLoaded } = useTypedSelector(
        ({ products_filters }) => products_filters,
    );
    const { items } = useTypedSelector(({ cart }) => cart);
    const { items: selections } = useTypedSelector(({ selections }) => selections);

    const mappedCategories = CATEGORIES.map((item) => ({ title: item, ...filtersCategories[item] }));

    const { isLoggedIn } = useAuthUser();

    const categoryAllTitles: Record<string, string> = {
        Обувь: 'Вся обувь',
        Сумки: 'Все сумки',
        Аксессуары: 'Все аксессуары',
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', hiddeModal);
        document.addEventListener('touchstart', hiddeModal);

        return () => {
            document.removeEventListener('mousedown', hiddeModal);
            document.removeEventListener('touchstart', hiddeModal);
        };
    }, [ModalRef]);

    React.useEffect(() => {
        if (state) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [state]);

    const hiddeModal = (e: any) => {
        if (ModalRef.current && !ModalRef.current.contains(e.target)) {
            setState(false);
        }
    };

    const toggleState = () => {
        setState(!state);
    };

    return (
        <header className="header-media" ref={ModalRef}>
            <div className="container">
                <div className="header-media-wrapper">
                    <div className="header-media-icon-group">
                        <div className="header-media-icon" onClick={toggleState}>
                            {state ? (
                                <svg
                                    width="24"
                                    height="18"
                                    viewBox="0 0 24 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20 1L12 9M12 9L4 17M12 9L4 1M12 9L20 17"
                                        stroke="#202020"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="24"
                                    height="18"
                                    viewBox="0 0 24 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M23 1H1" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M23 9H1" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M23 17H1" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </div>

                        <div className="header-media-icon" onClick={() => setIsOpenSearch(true)}>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                    stroke="#202020"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    <Link href={APP_ROUTE.home} className="header-media-logo">
                        <img src={Logo.src} alt="THECULTT" className="header-media-logo__image" />
                    </Link>

                    <div className="header-media-icon-group">
                        <Link
                            href={isLoggedIn ? APP_ROUTE.cabinet.setting : `#${ReglogStateTypesNotLogin.REGLOG}`}
                            scroll={false}
                            className="header-media-icon"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                                    stroke="#202020"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>

                        <Link href={APP_ROUTE.cart} className="header-media-icon">
                            {Object.keys(items).length ? (
                                <span className="header-media-icon__count">{Object.keys(items).length}</span>
                            ) : null}

                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 6L6 2H18L21 6M3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6M3 6H21M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                                    stroke="#202020"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <div
                className={getClassNames('header-media-modal-menu', {
                    active: state,
                })}
            >
                <div className="header-media-modal-menu-wrapper">
                    <HeaderMediaSelectionsBanner />

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
                            onClick={toggleState}
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
                            onClick={toggleState}
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
                                        onClick={toggleState}
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
                                    sort: SORT.a,
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
                                                sort: 'a',
                                            })}
                                            className="header-media-modal-menu-links__link"
                                            key={`header-media-modal-menu-links__link-${category}-${subsubcategory}-${subindex}`}
                                            onClick={toggleState}
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
                                            sort: 'a',
                                        })}
                                        className="header-media-modal-menu-links__link"
                                        onClick={toggleState}
                                    >
                                        {categoryAllTitles[category.title]}
                                    </Link>
                                ) : null}

                                <Link
                                    onClick={toggleState}
                                    href={getCatalogFiltersUrl({
                                        boutique: true,
                                        categories: [category.title],
                                        page: 1,
                                        sort: 'a',
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
                            onClick={toggleState}
                        >
                            Консьерж
                        </Link>

                        <Link
                            href={APP_ROUTE.brands}
                            className="header-media-modal-menu-links-link"
                            onClick={toggleState}
                        >
                            Бренды
                        </Link>

                        <Link
                            href={APP_ROUTE.auth}
                            className="header-media-modal-menu-links-link"
                            onClick={toggleState}
                        >
                            Подлинность
                        </Link>

                        {/* <a href="/catalog?categories=Сумки&categories=Обувь&categories=Аксессуары&availability=Доступно&availability=На+примерке&selections=1&utm_source=website&utm_medium=header&utm_campaign=selection_Doletskaya" className="header-media-modal-menu-links-link">
							Архив Алены Долецкой
						</a> */}

                        <Link
                            href={getCatalogFiltersUrl({
                                boutique: false,
                                price_drop: true,
                                categories: CATEGORIES,
                                availability: ['Доступно', 'На примерке'],
                                page: 1,
                                sort: 'popular',
                            })}
                            className="header-media-modal-menu-links-link"
                            onClick={toggleState}
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
                                onClick={toggleState}
                            >
                                Профиль
                            </Link>
                            <Link
                                href={APP_ROUTE.sell[isLoggedIn ? 'create' : 'info']}
                                className="header-media-modal-menu-links__link"
                                onClick={toggleState}
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
                                onClick={toggleState}
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
                                onClick={toggleState}
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
                                onClick={toggleState}
                            >
                                Лист ожидания
                            </Link>
                        </HeaderMediaLinkTab>

                        <HeaderMediaLinkTab title="Сервисы для продажи">
                            <Link
                                href={APP_ROUTE.sell.info}
                                className="header-media-modal-menu-links__link"
                                onClick={toggleState}
                            >
                                Продажа
                            </Link>
                            <Link
                                href={APP_ROUTE.exchange}
                                className="header-media-modal-menu-links__link"
                                onClick={toggleState}
                            >
                                Обмен
                            </Link>
                            <Link
                                href={APP_ROUTE.vipService}
                                className="header-media-modal-menu-links__link"
                                onClick={toggleState}
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
                                window?.dataLayer?.push({ ecommerce: null }); // Clear the previous ecommerce object.
                                window?.dataLayer?.push({
                                    event: 'sell_click',
                                    ecommerce: {
                                        timestamp: Math.floor(Date.now() / 1000),
                                    },
                                });

                                toggleState();
                            }}
                        >
                            Продать
                        </Link>
                    </div>
                </div>

                <Footer />
            </div>
        </header>
    );
};

export default HeaderMedia;
