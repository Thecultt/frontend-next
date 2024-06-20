import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setFiltersAvailabilityProduct } from '@/redux/actions/products';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';

const CatalogFiltersAvailability: React.FC = () => {
    const dispatch = useDispatch();

    const { filters } = useTypedSelector(({ products }) => products);

    const onChangeSetAvailability = (availability: string) => {
        dispatch(setFiltersAvailabilityProduct(availability));
    };

    return (
        <CatalogFiltersBlockWrapper title="Наличие">
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-availability-1-checkbox"
                    label="Доступно"
                    onChange={() => onChangeSetAvailability('Доступно')}
                    checked={
                        Object.keys(filters.availability).find(
                            (filtersAvailability) => filtersAvailability === 'Доступно',
                        )
                            ? true
                            : false
                    }
                />
            </div>
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-availability-2-checkbox"
                    label="Нет в наличии"
                    onChange={() => onChangeSetAvailability('Нет в наличии')}
                    checked={
                        Object.keys(filters.availability).find(
                            (filtersAvailability) => filtersAvailability === 'Нет в наличии',
                        )
                            ? true
                            : false
                    }
                />
            </div>
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-availability-3-checkbox"
                    label="На примерке"
                    onChange={() => onChangeSetAvailability('На примерке')}
                    checked={
                        Object.keys(filters.availability).find(
                            (filtersAvailability) => filtersAvailability === 'На примерке',
                        )
                            ? true
                            : false
                    }
                />
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersAvailability;
