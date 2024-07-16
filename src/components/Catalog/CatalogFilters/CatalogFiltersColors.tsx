import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setFiltersColorsProduct } from '@/redux/actions/products';
import { CatalogFiltersBlockWrapper } from '@/components';

interface CatalogFiltersColorsProps {
    colors: { [key: string]: string };
}

const CatalogFiltersColors: React.FC<CatalogFiltersColorsProps> = ({ colors }) => {
    const dispatch = useDispatch();

    const { filters } = useTypedSelector(({ products }) => products);

    const onChangeSetColor = (color: string) => {
        dispatch(setFiltersColorsProduct(color));
    };

    return (
        <CatalogFiltersBlockWrapper title="Цвет">
            {Object.keys(colors).map((color, index) => (
                <div
                    className="catalog-filters-block-content-checkbox catalog-filters-block-content-colors-checkbox-wrapper"
                    key={`catalog-filters-block-content-colors-checkbox-${index}`}
                >
                    <input
                        id={`catalog-filters-block-content-colors-checkbox-${index}`}
                        type="checkbox"
                        className="catalog-filters-block-content-colors-checkbox"
                        onChange={() => onChangeSetColor(color)}
                        checked={
                            Object.keys(filters.colors).find((filterscColor) => color === filterscColor) ? true : false
                        }
                    />

                    <label
                        htmlFor={`catalog-filters-block-content-colors-checkbox-${index}`}
                        className="catalog-filters-block-content-colors-checkbox__label"
                    >
                        <div
                            className="catalog-filters-block-content-colors-checkbox__label-circle"
                            style={{ backgroundColor: colors[color] }}
                        ></div>

                        <p className="catalog-filters-block-content-colors-checkbox__label__text">{color}</p>
                    </label>
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersColors;
