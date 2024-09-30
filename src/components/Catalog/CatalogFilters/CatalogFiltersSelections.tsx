'use client';

import React from 'react';
// @ts-ignore
import { useRouter } from 'nextjs-toploader/app';

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
    const selectionsIds = Object.keys(selections).sort((a, b) => +b - +a);

    const [selectedId, setSelectedId] = React.useState('');

    const onChangeSetSelection = (selectionId: string) => {
        if (selection === selectionId) {
            setSelectedId('');
            router.push(APP_ROUTE.catalog);
            return;
        }

        setSelectedId(selectionId);
        router.push(
            getCatalogFiltersUrl({
                selection: selectionId,
            }),
        );
    };

    React.useEffect(() => {
        setSelectedId(selection ?? '');
    }, [selection]);

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
                            checked={selectedId === id}
                        />
                    </div>
                ))}
            </div>
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersSelections;
