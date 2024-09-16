'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { useOnClickOutside } from 'usehooks-ts';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setHeaderSearchValue } from '@/redux/actions/header';
import { checkDeclension } from '@/functions/checkDeclension';
import { getClassNames } from '@/functions/getClassNames';
import { ProductCard } from '@/components';
import { APP_ROUTE } from '@/constants/routes';

import { HeaderSearchInput } from '../HeaderSearchInput';

interface HeaderSearchBoxProps {
    state: boolean;
    onClose: () => void;
    goToCatalog: (withSearchValue?: boolean) => void;
    onInputKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
}

const HeaderSearchBox: React.FC<HeaderSearchBoxProps> = ({ state, onClose, goToCatalog, onInputKeyDown }) => {
    const dispatch = useDispatch();

    const newItems = useTypedSelector(({ products }) => products.items);
    const { search } = useTypedSelector(({ header }) => header);

    const PopupRef = React.useRef<HTMLDivElement>(null);

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setHeaderSearchValue(e.target.value) as any);
    };

    useOnClickOutside(PopupRef, onClose);

    return (
        <div
            className={getClassNames('header-search-box-wrapper', {
                active: state,
            })}
        >
            <div
                className={getClassNames('header-search-box', {
                    active: state,
                })}
                ref={PopupRef}
            >
                <div className="header-search-box-media-input-wrapper">
                    <HeaderSearchInput
                        className={getClassNames('header-search-box-media-input', {
                            active: !!search.value,
                        })}
                        value={search.value}
                        onChange={onChangeSearchInput}
                        onClear={() => dispatch(setHeaderSearchValue('') as any)}
                        onKeyDown={onInputKeyDown}
                    />

                    <button type="button" className="header-search-box-media-input__close" onClick={onClose}>
                        Закрыть
                    </button>
                </div>

                <div className="header-search-box-history">
                    <div className="header-search-box-history-often">
                        <p className="header-search-box-history-often__title">Часто ищут</p>

                        <div className="header-search-box-history-often-items">
                            {['Сумка Louis Vuitton', 'Hermes Birkin', 'Сумка Gucci', 'Prada'].map((search, index) => (
                                <div
                                    className="header-search-box-history-often-items-item"
                                    onClick={() => dispatch(setHeaderSearchValue(search))}
                                    key={`header-search-box-history-often-items-item-${index}`}
                                >
                                    <p className="header-search-box-history-often-items-item__text">{search}</p>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19 18.9766L14.65 14.6266M17 8.97656C17 13.3948 13.4183 16.9766 9 16.9766C4.58172 16.9766 1 13.3948 1 8.97656C1 4.55828 4.58172 0.976562 9 0.976562C13.4183 0.976562 17 4.55828 17 8.97656Z"
                                            stroke="#202020"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 
				<div className="header-search-box-history-search">
					<p className="header-search-box-history-search__title">
						История поиска
					</p>

					<div className="header-search-box-history-search-items-wrapper">
						<p className="header-search-box-history-search__item">
							Cartier

							<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 21.4805L16.65 17.1305M19 11.4805C19 15.8987 15.4183 19.4805 11 19.4805C6.58172 19.4805 3 15.8987 3 11.4805C3 7.06219 6.58172 3.48047 11 3.48047C15.4183 3.48047 19 7.06219 19 11.4805Z" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</p>

						<p className="header-search-box-history-search__item">
							Сумка

							<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 21.4805L16.65 17.1305M19 11.4805C19 15.8987 15.4183 19.4805 11 19.4805C6.58172 19.4805 3 15.8987 3 11.4805C3 7.06219 6.58172 3.48047 11 3.48047C15.4183 3.48047 19 7.06219 19 11.4805Z" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</p>

						<p className="header-search-box-history-search__item">
							Часы Cartier

							<svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 21.4805L16.65 17.1305M19 11.4805C19 15.8987 15.4183 19.4805 11 19.4805C6.58172 19.4805 3 15.8987 3 11.4805C3 7.06219 6.58172 3.48047 11 3.48047C15.4183 3.48047 19 7.06219 19 11.4805Z" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</p>
					</div>
				</div> */}
                </div>

                <div
                    className={getClassNames('header-search-box-products', {
                        fetch: search.isFetch,
                    })}
                >
                    <div className="header-search-box-products__head">
                        <h3 className="header-search-box-products__title">
                            {search.value
                                ? `${checkDeclension(search.totalCount, ['Найден', 'Найдено', 'Найдено']).text}: ${checkDeclension(search.totalCount, ['товар', 'товара', 'товаров']).title}`
                                : 'Новинки'}
                        </h3>

                        {search.value && !search.items.length ? (
                            <button className="header-search-box-products__nav" onClick={() => goToCatalog(false)}>
                                Перейти в каталог
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="header-search-box-products__nav"
                                onClick={() => goToCatalog()}
                            >
                                Смотреть все
                            </button>
                        )}
                    </div>

                    {!!search.value && <p className="header-search-box-products-media__subtitle">Результаты поиска</p>}

                    <div className="header-search-box-products-blocks-wrapper">
                        {search.value ? (
                            search.items.length ? (
                                search.items.map((item) => (
                                    <div className="header-search-box-products-block" key={item.id}>
                                        <ProductCard productData={item} />
                                    </div>
                                ))
                            ) : (
                                <div className="header-search-box-products-blocks-null">
                                    <p className="header-search-box-products-blocks-null__title">
                                        К сожалению, мы не смогли ничего найти, но это можно поискать в
                                        Консьерж-сервисе.
                                    </p>

                                    <Link
                                        href={`${APP_ROUTE.concierge.root}`}
                                        className="btn-light-green large header-search-box-products-blocks-null__btn"
                                    >
                                        Смотреть в Консьерж-сервисе
                                    </Link>
                                </div>
                            )
                        ) : (
                            newItems
                                .map((item) => (
                                    <div className="header-search-box-products-block" key={item.id}>
                                        <ProductCard productData={item} />
                                    </div>
                                ))
                                .splice(0, 4)
                        )}
                    </div>

                    {/* <a href="/catalog" className='btn-regular header-search-box-products__more' onClick={onClose}>Больше</a> */}
                </div>
            </div>
        </div>
    );
};

export default HeaderSearchBox;
