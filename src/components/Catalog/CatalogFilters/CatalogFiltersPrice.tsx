'use client';

import React from 'react';

import { CatalogFiltersBlockWrapper } from '@/components';
import { useDebounce } from '@/hooks/useDebounce';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';

interface Props {
    defaultMin: number;
    defaultMax: number;
}

const CatalogFiltersPrice: React.FC<Props> = ({ defaultMin, defaultMax }) => {
    const { updateFilters } = useCatalogFilters();

    const [min, setMin] = React.useState('');
    const [max, setMax] = React.useState('');

    const debouncedMin = useDebounce(min);
    const debouncedMax = useDebounce(max);

    const onChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[a-zа-яё]/gi, '');

        if (parseInt(value) - 1 < defaultMax) {
            setMin(value);
        }
    };

    const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[a-zа-яё]/gi, '');

        if (parseInt(value) <= defaultMax) {
            setMax(value);
        } else {
            setMax(String(defaultMax));
        }
    };

    React.useEffect(() => {
        if (debouncedMin) {
            const newMin = debouncedMin ? parseInt(debouncedMin) || 0 : 0;
            updateFilters({ minPrice: newMin });
        }

        if (debouncedMax) {
            const newMax = debouncedMax ? parseInt(debouncedMax) || 0 : 0;
            updateFilters({ maxPrice: newMax });
        }
    }, [debouncedMin, debouncedMax]);

    return (
        <CatalogFiltersBlockWrapper title="Цена">
            <div className="catalog-filters-block-content-price-input-wrapper">
                <div className="catalog-filters-block-content-price-input min">
                    <div className="catalog-filters-block-content-price-input-field">
                        <span className="catalog-filters-block-content-price-input-field__subtitle">от</span>
                        <input
                            name="min"
                            type="text"
                            className="catalog-filters-block-content-price-input-field__input"
                            placeholder={String(defaultMin)}
                            onChange={(e) => onChangeMin(e)}
                            value={min}
                        />
                    </div>
                </div>

                <div className="catalog-filters-block-content-price-input">
                    <div className="catalog-filters-block-content-price-input-field">
                        <span className="catalog-filters-block-content-price-input-field__subtitle">до</span>
                        <input
                            name="max"
                            type="number"
                            className="catalog-filters-block-content-price-input-field__input"
                            placeholder={String(defaultMax)}
                            onChange={(e) => onChangeMax(e)}
                            value={max}
                        />
                    </div>
                </div>
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersPrice;
