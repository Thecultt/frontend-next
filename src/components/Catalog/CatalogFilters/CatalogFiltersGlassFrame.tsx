'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setFiltersGlassFrameProduct } from '@/redux/actions/products';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';

const CatalogFiltersGlassFrame: React.FC = () => {
    const dispatch = useDispatch();

    const { glass_frame } = useTypedSelector(({ products_filters }) => products_filters);
    const { filters } = useTypedSelector(({ products }) => products);

    const onClickSetGlassFrame = (glass_frame: string) => {
        dispatch(setFiltersGlassFrameProduct(glass_frame));
    };

    return (
        <CatalogFiltersBlockWrapper title="Форма оправы" disabled={!glass_frame.length}>
            <p className="catalog-filters-block-content-checkbox__subtitle">Очки</p>

            {glass_frame.map(({ frame }, index) => (
                <div
                    className="catalog-filters-block-content-checkbox"
                    key={`catalog-filters-block-content-glass-frame-checkbox-${index}`}
                >
                    <Checkbox
                        id={`catalog-filters-block-content-glass-frame-checkbox-${index}`}
                        label={frame}
                        onChange={() => onClickSetGlassFrame(frame)}
                        checked={
                            !!Object.keys(filters.glass_frame).find(
                                (filters_glass_frame) => frame === filters_glass_frame,
                            )
                        }
                    />
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersGlassFrame;
