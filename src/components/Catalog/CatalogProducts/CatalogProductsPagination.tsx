import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setProductsTypeFetch } from '@/redux/actions/products';
import { Loader } from '@/components';
import { getClassNames } from '@/functions/getClassNames';
import { CatalogFetchType } from '@/redux/types/IProducts';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';

const CatalogProductsPagination: React.FC = () => {
    const dispatch = useDispatch();

    const { pageCount, isFetchMore, isFetchPage } = useTypedSelector(({ products }) => products);
    const isFetch = isFetchMore || isFetchPage;

    const {
        filters: { page: currentPage },
        updateFilters,
    } = useCatalogFilters();

    const totalPagesArray: number[] = Array(pageCount)
        .fill(0)
        .map((_, index) => index + 1);

    const onClickFetchProductsMore = (page: number) => {
        if (!isFetchMore && page >= 1 && page <= pageCount) {
            dispatch(setProductsTypeFetch(CatalogFetchType.More));
            updateFilters({ page });
        }
    };

    const onClickFetchProductsPage = (page: number) => {
        if (page >= 1 && page <= pageCount) {
            window?.scrollTo(0, 350);
            updateFilters({ page });
        }
    };

    return (
        <div className="catalog-product-pagination">
            {currentPage !== pageCount && (
                <button
                    type="button"
                    className={getClassNames('btn catalog-product-pagination__btn', {
                        loader: isFetchMore,
                    })}
                    disabled={isFetchMore}
                    onClick={() => onClickFetchProductsMore(currentPage + 1)}
                >
                    {isFetchMore ? <Loader /> : 'Показать ещё'}
                </button>
            )}

            <div className="catalog-product-pagination-pages">
                <button
                    className={getClassNames('catalog-product-pagination-pages__btn', {
                        disabled: currentPage === 1,
                    })}
                    onClick={() => onClickFetchProductsPage(1)}
                    disabled={isFetch}
                >
                    Первая
                </button>

                {currentPage > 2 ? (
                    <>
                        <div
                            className="catalog-product-pagination-pages-item"
                            onClick={() => onClickFetchProductsPage(currentPage - 2)}
                        >
                            {currentPage - 2}
                        </div>

                        <div
                            className="catalog-product-pagination-pages-item"
                            onClick={() => onClickFetchProductsPage(currentPage - 1)}
                        >
                            {currentPage - 1}
                        </div>
                    </>
                ) : (
                    <>
                        {currentPage > 1 && (
                            <div
                                className="catalog-product-pagination-pages-item"
                                onClick={() => onClickFetchProductsPage(1)}
                            >
                                {1}
                            </div>
                        )}

                        {currentPage > 2 && (
                            <div
                                className="catalog-product-pagination-pages-item"
                                onClick={() => onClickFetchProductsPage(2)}
                            >
                                {2}
                            </div>
                        )}
                    </>
                )}

                {totalPagesArray
                    .slice(currentPage - 1, currentPage > 2 ? currentPage + 2 : currentPage + 4)
                    .map((page, index) => (
                        <div
                            className={getClassNames('catalog-product-pagination-pages-item', {
                                active: page === currentPage,
                            })}
                            key={`catalog-product-pagination-pages-item-${index}`}
                            onClick={() => onClickFetchProductsPage(page)}
                        >
                            {page}
                        </div>
                    ))}

                <button
                    className={getClassNames('catalog-product-pagination-pages__btn', {
                        disabled: currentPage === pageCount,
                    })}
                    onClick={() => onClickFetchProductsPage(pageCount)}
                    disabled={isFetch}
                >
                    Последняя
                </button>
            </div>
        </div>
    );
};

export default CatalogProductsPagination;
