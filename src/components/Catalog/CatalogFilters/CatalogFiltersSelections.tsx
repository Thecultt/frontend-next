'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { APP_ROUTE } from '@/constants/routes';

const CatalogFiltersSelections: React.FC = () => {
    const router = useRouter();

    const {
        filters: { selection },
    } = useCatalogFilters();

    const { selections } = useTypedSelector(({ products_filters }) => products_filters);
    const selectionsIds = Object.keys(selections);

    const onChangeSetSelection = (selectionId: string) => {
        router.push(
            selectionId === selection
                ? APP_ROUTE.catalog
                : getCatalogFiltersUrl({
                      selection: selectionId,
                  }),
        );
    };

    return (
        <CatalogFiltersBlockWrapper title="Подборки" defaultVisible={!!selection} disabled={!selectionsIds.length}>
            <div className="catalog-filters-block-content-list">
                {selectionsIds.map((id, index) => (
                    <div
                        className="catalog-filters-block-content-checkbox"
                        key={`catalog-filters-block-content-selections-checkbox-${index}`}
                    >
                        <Checkbox
                            id={`catalog-filters-block-content-selections-checkbox-${index}`}
                            label={selections[id].category}
                            onChange={() => onChangeSetSelection(id)}
                            checked={!!selection && selection === id}
                        />
                    </div>
                ))}
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersSelections;
