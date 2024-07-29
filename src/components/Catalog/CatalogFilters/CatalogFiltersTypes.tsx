import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setFiltersTypesProduct } from '@/redux/actions/products';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';

const CatalogFiltersTypes: React.FC = () => {
    const dispatch = useDispatch();

    const [types, setTypes] = React.useState<{ [key: string]: string[] }>({});

    const { filters } = useTypedSelector(({ products }) => products);
    const { categories } = useTypedSelector(({ products_filters }) => products_filters);

    React.useEffect(() => {
        const newTypes: { [key: string]: string[] } = {};

        Object.keys(filters.categories).map((category) => {
            if (categories[category] && categories[category].subsubcategories) {
                newTypes[category] = Object.keys(categories[category].subsubcategories);
            }
        });

        setTypes(newTypes);
    }, [filters.categories]);

    const onChangeSetType = (type: string) => {
        dispatch(setFiltersTypesProduct(type));
    };

    return (
        <CatalogFiltersBlockWrapper title="Тип">
            {Object.keys(types).map((key, index) => (
                <div key={`catalog-filters-block-content-types-checkbox-${index}-wrapper`}>
                    <p className="catalog-filters-block-content-checkbox__subtitle">{key}</p>

                    {types[key].map((type, subindex) => (
                        <div
                            className="catalog-filters-block-content-checkbox"
                            key={`catalog-filters-block-content-types-checkbox-${index}-${subindex}`}
                        >
                            <Checkbox
                                id={`catalog-filters-block-content-types-checkbox-${index}-${subindex}`}
                                label={type}
                                onChange={() => onChangeSetType(type)}
                                checked={!!Object.keys(filters.types).find((filtersType) => type === filtersType)}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersTypes;
