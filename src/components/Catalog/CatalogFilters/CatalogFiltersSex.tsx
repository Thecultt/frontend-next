import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setFiltersSexProduct } from '@/redux/actions/products';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';
import { GENDERS } from '@/constants/catalog';
import { GenderType } from '@/types/catalog';

const CatalogFiltersSex: React.FC = () => {
    const dispatch = useDispatch();

    const { filters } = useTypedSelector(({ products }) => products);

    const onChangeSetSex = (sex: GenderType) => {
        dispatch(setFiltersSexProduct(sex));
    };

    return (
        <CatalogFiltersBlockWrapper title="Пол">
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-sex-female-checkbox"
                    label={GENDERS.female}
                    onChange={() => onChangeSetSex(GENDERS.female)}
                    checked={!!Object.keys(filters.sex).find((filtersSex) => filtersSex === GENDERS.female)}
                />
            </div>
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-sex-male-checkbox"
                    label={GENDERS.male}
                    onChange={() => onChangeSetSex(GENDERS.male)}
                    checked={!!Object.keys(filters.sex).find((filtersSex) => filtersSex === GENDERS.male)}
                />
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersSex;
