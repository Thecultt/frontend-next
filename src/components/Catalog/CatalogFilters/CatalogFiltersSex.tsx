import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setFiltersSexProduct } from '@/redux/actions/products';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';

const CatalogFiltersSex: React.FC = () => {
    const dispatch = useDispatch();

    const { filters } = useTypedSelector(({ products }) => products);

    const onChangeSetSex = (sex: string) => {
        dispatch(setFiltersSexProduct(sex));
    };

    return (
        <CatalogFiltersBlockWrapper title="Пол">
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-sex-female-checkbox"
                    label="Женский"
                    onChange={() => onChangeSetSex('Женский')}
                    checked={Object.keys(filters.sex).find((filtersSex) => filtersSex === 'Женский') ? true : false}
                />
            </div>
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-sex-male-checkbox"
                    label="Мужской"
                    onChange={() => onChangeSetSex('Мужской')}
                    checked={Object.keys(filters.sex).find((filtersSex) => filtersSex === 'Мужской') ? true : false}
                />
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersSex;
