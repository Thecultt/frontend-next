'use client';

import React from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { getClassNames } from '@/functions/getClassNames';
import { SORT_TITLES } from '@/constants/catalog';
import { SortType } from '@/redux/types/IProducts';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';
import { Checkbox } from '@/components';

const CatalogFiltersTopSort: React.FC = () => {
    const {
        filters: { sort },
        updateFilters,
    } = useCatalogFilters();

    const modalRef = React.useRef<HTMLDivElement>(null);
    const [state, setState] = React.useState(false);

    const currentSort = SORT_TITLES.find((item) => item.type === sort) || SORT_TITLES[0];

    const toggleState = () => {
        setState(!state);
    };

    const handleChangeSort = (sortBy: SortType) => {
        updateFilters({ sort: sortBy });
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
                    >
                        <Checkbox
                            id={`catalog-filters-top-sort-modal-item-${index}`}
                            label={title}
                            onChange={() => handleChangeSort(type)}
                            checked={type === sort}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogFiltersTopSort;
