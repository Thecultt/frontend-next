'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import {
    HeaderTopMessage,
    HeaderCart,
    HeaderUser,
    HeaderHoverMenu,
    HeaderSearchBox,
    HeaderMedia,
    BaseImage,
} from '@/components';
import { setHeaderSearchValue, fetchHeaderSearchItems } from '@/redux/actions/header';
import { useDebounce } from '@/hooks/useDebounce';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { useAuthUser } from '@/hooks/useAuthUser';
import { KEYBOARD } from '@/constants/keys';
import { CATEGORIES, SELECTIONS_IDS, SORT } from '@/constants/catalog';
import { APP_ROUTE } from '@/constants/routes';

import Logo from '@/assets/images/logo.svg';
import HeaderHoverImageBag from '@/assets/images/header/header-image-hover-menu-bag.jpg';
import HeaderHoverImageAccessories from '@/assets/images/header/header-image-hover-menu-accessories.jpg';
import HeaderHoverImageShoes from '@/assets/images/header/header-image-hover-menu-shoes.jpg';
import HeaderHoverImageDecoration from '@/assets/images/header/header-image-hover-menu-decoration.jpg';

import { HeaderSelectionsHoverMenu } from './HeaderSelectionsHoverMenu';
import { HeaderSearchInput } from './HeaderSearchInput';

export interface HeaderHoverMenuCategory {
    title: string;
    types: string[];
    brands: string[];
    fullTextView: string;
    image: string;
    imageClass: string;
}

const categories: HeaderHoverMenuCategory[] = [
    {
        title: 'Сумки',
        types: [
            'Дорожная сумка',
            'Клатч',
            'Поясная сумка',
            'Рюкзак',
            'Сумка кроссбоди',
            'Сумка на плечо',
            'Сумка с ручками',
        ],
        brands: [
            'Acne Studios',
            'Balenciaga',
            'Bottega Veneta',
            'Burberry',
            'Celine',
            'Chanel',
            'Chloe',
            'Christian Dior',
            'Fendi',
            'Gucci',
            'Hermes',
            'Jil Sander',
            'Loewe',
            'Louis Vuitton',
            'Prada',
            'Saint Laurent',
            'Wandler',
        ],
        fullTextView: 'Все сумки',
        image: HeaderHoverImageBag.src,
        imageClass: 'header-hover-menu-bags-image',
    },
    {
        title: 'Аксессуары',
        types: [
            'Аксессуары для сумок',
            'Головные уборы',
            'Аксессуары для волос',
            'Кошельки',
            'Косметички',
            'Очки',
            'Платки и шарфы',
            'Ремни',
            'Обложки и футляры',
        ],
        brands: [
            'Balenciaga',
            'Bottega Veneta',
            'Brunello Cucinelli',
            'Loro Piana',
            'Celine',
            'Chanel',
            'Christian Dior',
            'Fendi',
            'Gucci',
            'Hermes',
            'Jil Sander',
            'Louis Vuitton',
            'Marni',
            'Miu Miu',
            'Prada',
        ],
        fullTextView: 'Все аксессуары',
        image: HeaderHoverImageAccessories.src,
        imageClass: 'header-hover-menu-accessories-image',
    },
    {
        title: 'Обувь',
        types: [
            'Балетки',
            'Ботильоны',
            'Ботинки',
            'Босоножки',
            'Кеды и кроссовки',
            'Лоферы',
            'Мюли',
            'Сандали',
            'Сапоги',
            'Туфли',
        ],
        brands: [
            'Acne Studios',
            'Alaia',
            'Alexander Wang',
            'Bottega Veneta',
            'Celine',
            'Chanel',
            'Chloe',
            'Ganni',
            'Gia Borghini',
            'Hereu',
            'Hermes',
            'Isabel Marant',
            'JW Anderson',
            'Mach & Mach',
            'Maison Margiela',
            'Manolo Blahnik',
            'Proenza Schouler',
        ],
        fullTextView: 'Вся обувь',
        image: HeaderHoverImageShoes.src,
        imageClass: 'header-hover-menu-shoes-image',
    },
    {
        title: 'Украшения',
        types: ['Браслеты', 'Колье и подвески', 'Кольца', 'Часы', 'Броши'],
        brands: [
            'Balenciaga',
            'Bottega Veneta',
            'Bulgari',
            'Cartier',
            'Celine',
            'Chanel',
            'Christian Dior',
            'Gucci',
            'Hermes',
            'Jil Sander',
            'Louis Vuitton',
            'Miu Miu',
            'Prada',
            'Tiffani',
            'Van Cleef & Arpels',
        ],
        fullTextView: 'Все украшения',
        image: HeaderHoverImageDecoration.src,
        imageClass: 'header-hover-menu-decoration-image',
    },
];

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const pathname = usePathname();
    const router = useRouter();

    const inputRef = React.useRef<HTMLInputElement>(null);

    const [currentCategoryHoverMenuIndex, setCurrentCategoryHoverMenuIndex] = React.useState(0);
    const [isOpenHoverMenu, setIsOpenHoverMenu] = React.useState(false);
    const [isOpenSearch, setIsOpenSearch] = React.useState(false);
    const [isSelectionsMenuVisible, setIsSelectionsMenuVisible] = React.useState(false);

    const { search } = useTypedSelector(({ header }) => header);
    const debouncedValue = useDebounce(search.value);

    const { isLoggedIn } = useAuthUser();

    const openHoverMenu = (index: number) => {
        if (!isOpenSearch) {
            setCurrentCategoryHoverMenuIndex(index);

            setIsOpenHoverMenu(true);
        }
    };

    const closeHoverMenu = () => {
        setIsOpenHoverMenu(false);
    };

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setHeaderSearchValue(e.target.value) as any);
        setIsOpenSearch(true);
    };

    const handleSearchClose = () => {
        setIsOpenSearch(false);
    };

    const goToCatalog = (withSearchValue = true) => {
        handleSearchClose();
        inputRef.current?.blur();
        router.push(
            withSearchValue
                ? getCatalogFiltersUrl({
                      search: search.value,
                      sort: SORT.a,
                  })
                : APP_ROUTE.catalog,
        );
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === KEYBOARD.enter) {
            e.preventDefault();
            goToCatalog();
        }
    };

    React.useEffect(() => {
        if (debouncedValue !== '') {
            dispatch(fetchHeaderSearchItems(search.value) as any);
        }
    }, [debouncedValue]);

    React.useEffect(() => {
        setIsOpenHoverMenu(false);
        setIsOpenSearch(false);
    }, [pathname]);

    return (
        <div className="header-global-wrapper">
            <HeaderTopMessage />

            <div className="header-container">
                <header className="header">
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="header-wrapper-block">
                                <div className="header-block">
                                    <Link href={APP_ROUTE.home} className="header-block-logo">
                                        <BaseImage
                                            src={Logo.src}
                                            alt="THECULTT LOGO"
                                            className="header-block-logo__image"
                                        />
                                    </Link>

                                    <HeaderSearchInput
                                        ref={inputRef}
                                        value={search.value}
                                        onFocus={() => setIsOpenSearch(true)}
                                        onChange={onChangeSearchInput}
                                        onKeyDown={handleInputKeyDown}
                                    />
                                </div>

                                <div className="header-block">
                                    <div className="header-block-btn">
                                        <Link
                                            href={APP_ROUTE.sell[isLoggedIn ? 'create' : 'info']}
                                            className="header-block-btn__btn"
                                            onClick={() => {
                                                window?.dataLayer?.push({
                                                    ecommerce: null,
                                                }); // Clear the previous ecommerce object.
                                                window?.dataLayer?.push({
                                                    event: 'sell_click',
                                                    ecommerce: {
                                                        timestamp: Math.floor(Date.now() / 1000),
                                                    },
                                                });
                                            }}
                                        >
                                            Продать
                                        </Link>
                                        <Link
                                            href={APP_ROUTE.exchange}
                                            className="header-block-btn__btn regular"
                                            onClick={() => {
                                                window?.dataLayer?.push({
                                                    ecommerce: null,
                                                }); // Clear the previous ecommerce object.
                                                window?.dataLayer?.push({
                                                    event: 'swap_click',
                                                    ecommerce: {
                                                        timestamp: Math.floor(Date.now() / 1000),
                                                    },
                                                });
                                            }}
                                        >
                                            Обменять
                                        </Link>
                                    </div>

                                    {/* <button className="header-block__language">
									<svg
										width="22"
										height="22"
										viewBox="0 0 22 22"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11 20.9844C16.5228 20.9844 21 16.5072 21 10.9844C21 5.46153 16.5228 0.984375 11 0.984375C5.47715 0.984375 1 5.46153 1 10.9844C1 16.5072 5.47715 20.9844 11 20.9844Z"
											stroke="black"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M1 10.9844H21M14.8462 10.9844C14.6572 14.6413 13.3103 18.1434 11 20.9844C8.68972 18.1434 7.34277 14.6413 7.15385 10.9844C7.34277 7.32747 8.68972 3.82538 11 0.984375C13.3103 3.82538 14.6572 7.32747 14.8462 10.9844Z"
											stroke="black"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button> */}

                                    <HeaderUser />

                                    <HeaderCart />
                                </div>
                            </div>

                            <nav className="header-menu">
                                <Link
                                    href={getCatalogFiltersUrl({
                                        boutique: false,
                                        categories: CATEGORIES,
                                        availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                                        price_drop: false,
                                        page: 1,
                                        sort: SORT.a,
                                    })}
                                    className="header-menu__link"
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
                                    className="header-menu__link"
                                >
                                    Популярное
                                </Link>

                                <Link
                                    href={getCatalogFiltersUrl({
                                        selection: SELECTIONS_IDS.summerBags,
                                        sort: 'popular',
                                    })}
                                    className="header-menu__link"
                                    onMouseOver={() => setIsSelectionsMenuVisible(true)}
                                    onMouseOut={() => setIsSelectionsMenuVisible(false)}
                                    onClick={() => setIsSelectionsMenuVisible(false)}
                                >
                                    Подборки
                                </Link>

                                {categories.map((category, index) => (
                                    <Link
                                        href={getCatalogFiltersUrl({
                                            categories: [category.title],
                                            availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                                            page: 1,
                                            sort: SORT.shuffle,
                                        })}
                                        className="header-menu__link"
                                        key={`header-menu__link-${index}`}
                                        onMouseOver={() => openHoverMenu(index)}
                                        onMouseOut={closeHoverMenu}
                                        onClick={closeHoverMenu}
                                    >
                                        {category.title}
                                    </Link>
                                ))}

                                <Link href={APP_ROUTE.concierge.root} className="header-menu__link">
                                    Консьерж
                                </Link>

                                <Link href={APP_ROUTE.brands} className="header-menu__link">
                                    Бренды
                                </Link>

                                <Link href={APP_ROUTE.auth} className="header-menu__link">
                                    Подлинность
                                </Link>
                                {/*
								<a href="/catalog?categories=Сумки&categories=Обувь&categories=Аксессуары&availability=Доступно&availability=На+примерке&selections=1&utm_source=website&utm_medium=header&utm_campaign=selection_Doletskaya" className="header-menu__link">
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
                                    className="header-menu__link"
                                >
                                    <b>THE CULTT SALE</b>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </header>

                <HeaderHoverMenu
                    {...categories[currentCategoryHoverMenuIndex]}
                    isOpenHoverMenu={isOpenHoverMenu}
                    onOpen={() => setIsOpenHoverMenu(true)}
                    onClose={() => setIsOpenHoverMenu(false)}
                />

                <HeaderSelectionsHoverMenu
                    isVisible={isSelectionsMenuVisible}
                    onOpen={() => setIsSelectionsMenuVisible(true)}
                    onClose={() => setIsSelectionsMenuVisible(false)}
                />

                <HeaderSearchBox
                    state={isOpenSearch}
                    onClose={handleSearchClose}
                    goToCatalog={goToCatalog}
                    onInputKeyDown={handleInputKeyDown}
                />

                <HeaderMedia setIsOpenSearch={setIsOpenSearch} />
            </div>
        </div>
    );
};

export default Header;
