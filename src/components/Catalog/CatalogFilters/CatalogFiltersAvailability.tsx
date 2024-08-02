import React from 'react';

import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';
import { AVAILABILITY } from '@/constants/catalog';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';
import { AvailabilityType } from '@/types/catalog';

const CatalogFiltersAvailability: React.FC = () => {
    const {
        filters: { availability: selectedAvailability },
        updateFilters,
    } = useCatalogFilters();

    const onChangeSetAvailability = (state: AvailabilityType) => {
        updateFilters({
            availability: selectedAvailability.includes(state)
                ? selectedAvailability.filter((selectedItem) => selectedItem !== state)
                : [...selectedAvailability, state],
        });
    };

    return (
        <CatalogFiltersBlockWrapper title="Наличие">
            {Object.values(AVAILABILITY).map((availability, index) => (
                <div className="catalog-filters-block-content-checkbox" key={index}>
                    <Checkbox
                        id={`catalog-filters-block-content-availability-${index}-checkbox`}
                        label={availability}
                        onChange={() => onChangeSetAvailability(availability)}
                        checked={selectedAvailability.includes(availability)}
                    />
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersAvailability;
