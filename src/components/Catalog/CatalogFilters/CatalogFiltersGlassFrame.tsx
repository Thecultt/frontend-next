import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setFiltersGlassFrameProduct } from '@/redux/actions/products';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';

interface CatalogFiltersGlassFrameProps {
    glass_frame: string[];
}

const CatalogFiltersGlassFrame: React.FC<CatalogFiltersGlassFrameProps> = ({ glass_frame }) => {
    const dispatch = useDispatch();

    const { filters } = useTypedSelector(({ products }) => products);

    const onClickSetGlassFrame = (glass_frame: string) => {
        dispatch(setFiltersGlassFrameProduct(glass_frame));
    };

    return (
        <CatalogFiltersBlockWrapper title="Форма оправы">
            <p className="catalog-filters-block-content-checkbox__subtitle">Очки</p>

            {glass_frame.map((glass_frame_item, index) => (
                <div
                    className="catalog-filters-block-content-checkbox"
                    key={`catalog-filters-block-content-glass-frame-checkbox-${index}`}
                >
                    <Checkbox
                        id={`catalog-filters-block-content-glass-frame-checkbox-${index}`}
                        label={glass_frame_item}
                        onChange={() => onClickSetGlassFrame(glass_frame_item)}
                        checked={
                            Object.keys(filters.glass_frame).find(
                                (filters_glass_frame) => glass_frame_item === filters_glass_frame,
                            )
                                ? true
                                : false
                        }
                    />
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersGlassFrame;
