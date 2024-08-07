'use client';

import React from 'react';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CatalogFiltersBlockWrapper } from '@/components';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';

const CatalogFiltersColors: React.FC = () => {
    const {
        filters: { colors: selectedColors },
        updateFilters,
    } = useCatalogFilters();

    const { colors } = useTypedSelector(({ products_filters }) => products_filters);
    const colorsArray = Object.keys(colors);

    const onChangeSetColor = (color: string) => {
        updateFilters({
            colors: selectedColors.includes(color)
                ? selectedColors.filter((selectedColor) => selectedColor !== color)
                : [...selectedColors, color],
        });
    };

    return (
        <CatalogFiltersBlockWrapper title="Цвет" disabled={!colorsArray.length}>
            <div className="catalog-filters-block-content-list">
                {colorsArray.map((color, index) => (
                    <div
                        className="catalog-filters-block-content-checkbox catalog-filters-block-content-colors-checkbox-wrapper"
                        key={`catalog-filters-block-content-colors-checkbox-${index}`}
                    >
                        <input
                            id={`catalog-filters-block-content-colors-checkbox-${index}`}
                            type="checkbox"
                            className="catalog-filters-block-content-colors-checkbox"
                            onChange={() => onChangeSetColor(color)}
                            checked={selectedColors.includes(color)}
                        />

                        <label
                            htmlFor={`catalog-filters-block-content-colors-checkbox-${index}`}
                            className="catalog-filters-block-content-colors-checkbox__label"
                        >
                            <div
                                className="catalog-filters-block-content-colors-checkbox__label-circle"
                                style={{ backgroundColor: colors[color].hex }}
                            />
                            <p className="catalog-filters-block-content-colors-checkbox__label__text">{color}</p>
                        </label>
                    </div>
                ))}
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersColors;
