'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setFiltersColorsProduct } from '@/redux/actions/products';
import { CatalogFiltersBlockWrapper } from '@/components';

const CatalogFiltersColors: React.FC = () => {
    const dispatch = useDispatch();

    const { colors } = useTypedSelector(({ products_filters }) => products_filters);
    const { filters } = useTypedSelector(({ products }) => products);

    const colorsArray = Object.keys(colors);

    const onChangeSetColor = (color: string) => {
        dispatch(setFiltersColorsProduct(color));
    };

    return (
        <CatalogFiltersBlockWrapper title="Цвет" disabled={!colorsArray.length}>
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
                        checked={!!Object.keys(filters.colors).find((filtersColor) => color === filtersColor)}
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
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersColors;
