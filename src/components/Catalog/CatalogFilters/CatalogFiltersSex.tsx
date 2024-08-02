import React from 'react';

import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';
import { GENDERS } from '@/constants/catalog';
import { GenderType } from '@/types/catalog';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';

const CatalogFiltersSex: React.FC = () => {
    const {
        filters: { genders },
        updateFilters,
    } = useCatalogFilters();

    const onChangeSetSex = (gender: GenderType) => {
        updateFilters({
            genders: genders.includes(gender)
                ? genders.filter((selectedGender) => selectedGender !== gender)
                : [...genders, gender],
        });
    };

    return (
        <CatalogFiltersBlockWrapper title="Пол">
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-sex-female-checkbox"
                    label={GENDERS.female}
                    onChange={() => onChangeSetSex(GENDERS.female)}
                    checked={genders.includes(GENDERS.female)}
                />
            </div>
            <div className="catalog-filters-block-content-checkbox">
                <Checkbox
                    id="catalog-filters-block-content-sex-male-checkbox"
                    label={GENDERS.male}
                    onChange={() => onChangeSetSex(GENDERS.male)}
                    checked={genders.includes(GENDERS.male)}
                />
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersSex;
