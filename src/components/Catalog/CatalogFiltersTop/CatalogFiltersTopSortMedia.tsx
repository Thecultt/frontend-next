import React from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { getClassNames } from '@/functions/getClassNames';
import { SORT_TITLES } from '@/constants/catalog';
import { SortType } from '@/redux/types/IProducts';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';

const CatalogFiltersTopSortMedia: React.FC = () => {
    const {
        filters: { sort },
        updateFilters,
    } = useCatalogFilters();

    const modalRef = React.useRef<HTMLDivElement>(null);
    const [state, setState] = React.useState(false);

    const toggleState = () => {
        setState(!state);
    };

    const onClickSetItem = (sortBy: SortType) => {
        updateFilters({ sort: sortBy });
        setTimeout(() => {
            setState(false);
        }, 200);
    };

    useOnClickOutside(modalRef, () => setState(false));

    return (
        <div className="catalog-filters-top-media-btn-sort-wrapper" ref={modalRef}>
            <button className="catalog-filters-top-media-btn__btn" onClick={toggleState}>
                Сортировать
                <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 18V16H9.5V18H3.5ZM3.5 13V11H15.5V13H3.5ZM3.5 8V6H21.5V8H3.5Z" fill="#202020" />
                </svg>
            </button>

            <div
                className={getClassNames('catalog-filters-top-media-btn-sort', {
                    active: state,
                })}
            >
                {SORT_TITLES.map(({ type, title }, index) => (
                    <div
                        className="checkbox-wrapper catalog-filters-top-media-btn-sort-item"
                        key={`catalog-filters-top-media-btn-sort-item-${index}`}
                        onClick={() => onClickSetItem(type)}
                    >
                        <input
                            id={`catalog-filters-top-media-btn-sort-item-${index}`}
                            type="radio"
                            className="checkbox"
                            name="sort-media"
                            checked={type === sort}
                        />

                        <label htmlFor={`catalog-filters-top-media-btn-sort-item-${index}`} className="checkbox__label">
                            <p className="checkbox__label__text">По {title}</p>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogFiltersTopSortMedia;
