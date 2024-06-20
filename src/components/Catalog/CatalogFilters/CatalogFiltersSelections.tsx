import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setFiltersSelectionProduct, setFiltersSortProduct } from '@/redux/actions/products';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';

const CatalogFiltersSelections: React.FC = () => {
    const dispatch = useDispatch();

    const { filters } = useTypedSelector(({ products }) => products);
    const { selections } = useTypedSelector(({ products_filters }) => products_filters);

    const onChangeSetSelection = (selectionId: string) => {
        dispatch(setFiltersSelectionProduct(selectionId));
        dispatch(setFiltersSortProduct('popular'));
    };

    return (
        <CatalogFiltersBlockWrapper title="Подборки" defaultVisible={!!filters.selection}>
            {Object.keys(selections).map((key, index) => (
                <div
                    className="catalog-filters-block-content-checkbox"
                    key={`catalog-filters-block-content-selections-checkbox-${index}`}
                >
                    <Checkbox
                        id={`catalog-filters-block-content-selections-checkbox-${index}`}
                        label={selections[key]}
                        onChange={() => onChangeSetSelection(key)}
                        checked={key === filters.selection}
                    />
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersSelections;
