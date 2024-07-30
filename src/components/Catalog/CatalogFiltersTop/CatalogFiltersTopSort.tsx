import React from 'react';
import { useDispatch } from 'react-redux';
import { useOnClickOutside } from 'usehooks-ts';

import { getClassNames } from '@/functions/getClassNames';
import { setFiltersSortProduct } from '@/redux/actions/products';
import { SORT, SORT_TITLES } from '@/constants/catalog';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { SortType } from '@/redux/types/IProducts';

const CatalogFiltersTopSort: React.FC = () => {
    const dispatch = useDispatch();

    const { sort } = useTypedSelector(({ products }) => products.filters);
    const currentSort = SORT_TITLES.find((item) => item.type === sort) || { type: SORT.shuffle, title: 'умолчанию' };

    const modalRef = React.useRef<HTMLDivElement>(null);
    const [state, setState] = React.useState(false);

    const toggleState = () => {
        setState(!state);
    };

    const onClickSetItem = (key: SortType) => {
        dispatch(setFiltersSortProduct(key));

        setTimeout(() => {
            setState(false);
        }, 200);
    };

    useOnClickOutside(modalRef, () => setState(false));

    return (
        <div className="catalog-filters-top-sort">
            <div className="catalog-filters-top-sort-title" onClick={toggleState}>
                <p className="catalog-filters-top-sort-title__title">
                    Сортировать по: {currentSort.title}
                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.5L7 6.5L13 0.5" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </p>
            </div>

            <div
                ref={modalRef}
                className={getClassNames('catalog-filters-top-sort-modal', {
                    active: state,
                })}
            >
                {SORT_TITLES.map(({ type, title }, index) => (
                    <div
                        className="checkbox-wrapper catalog-filters-top-sort-modal-item"
                        key={`catalog-filters-top-sort-modal-item-${index}`}
                        onClick={() => onClickSetItem(type)}
                    >
                        <input
                            id={`catalog-filters-top-sort-modal-item-${index}`}
                            type="radio"
                            className="checkbox"
                            name="sort"
                            checked={type === sort}
                        />

                        <label htmlFor={`catalog-filters-top-sort-modal-item-${index}`} className="checkbox__label">
                            <p className="checkbox__label__text">{title}</p>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogFiltersTopSort;
