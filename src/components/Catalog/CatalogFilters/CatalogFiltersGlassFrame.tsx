'use client';

import React from 'react';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';

const CatalogFiltersGlassFrame: React.FC = () => {
    const {
        filters: { glass_frame: selectedFrames },
        updateFilters,
    } = useCatalogFilters();
    const { glass_frame: glassFrameFilters } = useTypedSelector(({ products_filters }) => products_filters);

    const onClickSetGlassFrame = (value: string) => {
        updateFilters({
            glass_frame: selectedFrames.includes(value)
                ? selectedFrames.filter((selectedFrame) => selectedFrame !== value)
                : [...selectedFrames, value],
        });
    };

    return (
        <CatalogFiltersBlockWrapper title="Форма оправы" disabled={!glassFrameFilters.length}>
            <p className="catalog-filters-block-content-checkbox__subtitle">Очки</p>

            {glassFrameFilters.map(({ frame }, index) => (
                <div
                    key={`catalog-filters-block-content-glass-frame-checkbox-${index}`}
                    className="catalog-filters-block-content-checkbox"
                >
                    <Checkbox
                        id={`catalog-filters-block-content-glass-frame-checkbox-${index}`}
                        label={frame}
                        onChange={() => onClickSetGlassFrame(frame)}
                        checked={selectedFrames.includes(frame)}
                    />
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersGlassFrame;
