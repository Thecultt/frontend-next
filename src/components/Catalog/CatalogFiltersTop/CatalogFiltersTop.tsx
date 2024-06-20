import React from 'react';
import { useSearchParams } from 'next/navigation';

import { checkDeclension } from '@/functions/checkDeclension';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CatalogFiltersTopBoutique, CatalogFiltersTopSort, CatalogFiltersTopSortMedia } from '@/components';

const CatalogFiltersTop: React.FC<any> = React.memo(({ setIsOpenFiltersMedia, isOpenFiltersMedia }) => {
    const { filters, itemsCount } = useTypedSelector(({ products }) => products);
    const { categories, selections } = useTypedSelector(({ products_filters }) => products_filters);

    const query = useSearchParams();

    return (
        <div className="catalog-filters-top">
            <div className="catalog-filters-top-media-btn">
                <div className="catalog-filters-top-media-btn-filters-wrapper">
                    <button
                        className="catalog-filters-top-media-btn__btn"
                        onClick={() => setIsOpenFiltersMedia(!isOpenFiltersMedia)}
                    >
                        Фильтры
                        <svg viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 6.75L31.5 6.75" stroke="#202020" strokeWidth="2.25" strokeLinecap="round" />
                            <rect
                                x="19.125"
                                y="1.875"
                                width="9.75"
                                height="9.75"
                                rx="4.875"
                                fill="#F1EDE8"
                                stroke="#202020"
                                strokeWidth="2.25"
                            />
                            <path d="M1.5 20.25L31.5 20.25" stroke="#202020" strokeWidth="2.25" strokeLinecap="round" />
                            <rect
                                x="4.125"
                                y="15.375"
                                width="9.75"
                                height="9.75"
                                rx="4.875"
                                fill="#F1EDE8"
                                stroke="#202020"
                                strokeWidth="2.25"
                            />
                        </svg>
                    </button>
                </div>

                <CatalogFiltersTopSortMedia initSortKey={filters.sort} />
            </div>

            <div className="catalog-filters-top-title">
                <p className="catalog-filters-top-title__title">
                    {filters.boutique ? (
                        'Из бутика'
                    ) : (
                        <>
                            {filters.price_drop ? (
                                'THE CULTT SALE'
                            ) : (
                                <>
                                    {filters.selection ? (
                                        selections[filters.selection]
                                    ) : (
                                        <>
                                            {query.get('theme')
                                                ? query.get('theme')
                                                : filters.search !== ''
                                                  ? filters.search
                                                  : Object.keys(filters.brands).length
                                                    ? Object.keys(filters.brands).map(
                                                          (brand, index) =>
                                                              `${brand}${Object.keys(filters.brands).length === index + 1 ? '' : ', '}`,
                                                      )
                                                    : Object.keys(filters.categories).length &&
                                                        Object.keys(filters.categories).length !==
                                                            Object.keys(categories).length
                                                      ? Object.keys(filters.categories).map(
                                                            (category, index) =>
                                                                `${category}${Object.keys(filters.categories).length === index + 1 ? '' : ', '}`,
                                                        )
                                                      : filters.sort === 'popular'
                                                        ? 'Популярное'
                                                        : 'Новинки'}
                                        </>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </p>

                <p className="catalog-filters-top-title__count">
                    {checkDeclension(itemsCount, ['товар', 'товара', 'товаров']).title}
                </p>
            </div>

            <CatalogFiltersTopBoutique />

            <CatalogFiltersTopSort initSortKey={filters.sort} />
        </div>
    );
});

export default CatalogFiltersTop;
