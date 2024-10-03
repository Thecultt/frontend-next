'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useMediaQuery } from 'usehooks-ts';

import { MEDIA_SIZES } from '@/constants/styles';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { HeaderTopMessage, HeaderCart, HeaderUser, HeaderSearchBox, HeaderMedia } from '@/components';
import { BaseImage } from '@/shared/ui';
import { setHeaderSearchValue, fetchHeaderSearchItems, setHeaderCatalogMenuIsVisible } from '@/redux/actions/header';
import { useDebounce } from '@/hooks/useDebounce';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { useAuthUser } from '@/hooks/useAuthUser';
import { KEYBOARD } from '@/constants/keys';
import { CATEGORY_SLUGS, SORT } from '@/constants/catalog';
import { APP_ROUTE } from '@/constants/routes';
import { pushDataLayer } from '@/functions/pushDataLayer';
import { logoPath } from '@/assets/icons';

import { HeaderSearchInput } from './HeaderSearchInput';
import { HeaderSelectionsHoverMenu } from './HeaderSelectionsHoverMenu';
import { HeaderCatalogButton } from './HeaderCatalogButton/HeaderCatalogButton';
import { HeaderCatalogMenu } from './HeaderCatalogMenu/HeaderCatalogMenu';

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    const pathname = usePathname();
    const router = useRouter();

    const inputRef = React.useRef<HTMLInputElement>(null);

    const [isOpenSearch, setIsOpenSearch] = React.useState(false);
    const [isSelectionsMenuVisible, setIsSelectionsMenuVisible] = React.useState(false);

    const selections = useTypedSelector(({ selections }) => selections.items);

    const { search } = useTypedSelector(({ header }) => header);
    const debouncedValue = useDebounce(search.value);

    const { isLoggedIn } = useAuthUser();

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setHeaderSearchValue(e.target.value) as any);
        setIsOpenSearch(true);
    };

    const handleSearchClose = () => {
        setIsOpenSearch(false);
    };

    const handleSearchFocus = () => {
        setIsOpenSearch(true);
        dispatch(setHeaderCatalogMenuIsVisible(false));
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
        setIsSelectionsMenuVisible(false);
        setIsOpenSearch(false);
    }, [pathname]);

    return (
        <div className="header-global-wrapper">
            <HeaderTopMessage />

            <div className="header-container">
                {!isMobile ? (
                    <>
                        <header className="header">
                            <div className="container">
                                <div className="header-wrapper">
                                    <div className="header-wrapper-block">
                                        <div className="header-block" style={{ flex: 1 }}>
                                            <Link href={APP_ROUTE.home} className="header-block-logo">
                                                <BaseImage
                                                    src={logoPath}
                                                    alt="THECULTT LOGO"
                                                    className="header-block-logo__image"
                                                />
                                            </Link>

                                            <HeaderCatalogButton />

                                            <HeaderSearchInput
                                                ref={inputRef}
                                                value={search.value}
                                                onFocus={handleSearchFocus}
                                                onChange={onChangeSearchInput}
                                                onKeyDown={handleInputKeyDown}
                                            />
                                        </div>

                                        <div className="header-block">
                                            <div className="header-block-btn">
                                                <Link
                                                    href={APP_ROUTE.sell[isLoggedIn ? 'create' : 'info']}
                                                    className="header-block-btn__btn"
                                                    onClick={() => pushDataLayer('sell_click')}
                                                >
                                                    Продать
                                                </Link>
                                                <Link
                                                    href={APP_ROUTE.exchange}
                                                    className="header-block-btn__btn regular"
                                                    onClick={() => pushDataLayer('swap_click')}
                                                >
                                                    Обменять
                                                </Link>
                                            </div>
                                            <HeaderUser />
                                            <HeaderCart />
                                        </div>
                                    </div>

                                    <nav className="header-menu">
                                        <Link
                                            href={getCatalogFiltersUrl({
                                                category_slug: CATEGORY_SLUGS.new,
                                            })}
                                            className="header-menu__link"
                                        >
                                            Новинки
                                        </Link>

                                        <Link
                                            href={getCatalogFiltersUrl({
                                                category_slug: CATEGORY_SLUGS.popular,
                                            })}
                                            className="header-menu__link"
                                        >
                                            Популярное
                                        </Link>

                                        <Link
                                            href={getCatalogFiltersUrl({
                                                selection: selections[0]?.id?.toString() || '',
                                            })}
                                            className="header-menu__link"
                                            onMouseOver={() => setIsSelectionsMenuVisible(true)}
                                            onMouseOut={() => setIsSelectionsMenuVisible(false)}
                                            onClick={() => setIsSelectionsMenuVisible(false)}
                                        >
                                            Подборки
                                        </Link>

                                        <Link href={APP_ROUTE.concierge.root} className="header-menu__link">
                                            Консьерж
                                        </Link>

                                        <Link href={APP_ROUTE.brands} className="header-menu__link">
                                            Бренды
                                        </Link>

                                        <Link href={APP_ROUTE.auth} className="header-menu__link">
                                            Подлинность
                                        </Link>

                                        <Link
                                            href={getCatalogFiltersUrl({
                                                category_slug: CATEGORY_SLUGS.sale,
                                            })}
                                            className="header-menu__link"
                                        >
                                            <b>THE CULTT SALE</b>
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </header>

                        <HeaderSelectionsHoverMenu
                            isVisible={isSelectionsMenuVisible}
                            onOpen={() => setIsSelectionsMenuVisible(true)}
                            onClose={() => setIsSelectionsMenuVisible(false)}
                        />

                        <HeaderCatalogMenu />
                    </>
                ) : (
                    <HeaderMedia
                        transparent={pathname.startsWith(APP_ROUTE.product)}
                        isOpenSearch={isOpenSearch}
                        setIsOpenSearch={setIsOpenSearch}
                    />
                )}

                <HeaderSearchBox
                    state={isOpenSearch}
                    onClose={handleSearchClose}
                    goToCatalog={goToCatalog}
                    onInputKeyDown={handleInputKeyDown}
                />
            </div>
        </div>
    );
};

export default Header;
