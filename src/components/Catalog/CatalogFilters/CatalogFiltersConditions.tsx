'use client';

import React from 'react';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';
import { useCatalogFilters } from '@/hooks/catalog/useCatalogFilters';
import { ConditionType } from '@/types/catalog';

const CatalogFiltersConditions: React.FC = () => {
    const {
        filters: { conditions: selectedConditions, brandnew },
        updateFilters,
    } = useCatalogFilters();

    const { conditions } = useTypedSelector(({ products_filters }) => products_filters);

    const onClickSetCondition = (condition: ConditionType) => {
        updateFilters({
            conditions: selectedConditions.includes(condition)
                ? selectedConditions.filter((selectedCondition) => selectedCondition !== condition)
                : [...selectedConditions, condition],
        });
    };

    return (
        <CatalogFiltersBlockWrapper
            title="Состояние"
            infoMessage={`
				<ul>
					<li><span>Новое</span>: лот не был в носке и не имеет повреждений или нюансов. Форма аксессуара сохранена.</li>
					<li><span>Отличное</span>: лот внешне выглядит отлично, аксессуар носился мало и бережно. Могут присутствовать следующие нюансы: минимальное изменение формы у сумки, потертость без конкретных видимых дефектов, локальные небольшие восстановления.</li>
					<li><span>Хорошее</span>: присутствуют значительные следы носки. Могут присутствовать следующие нюансы: отсутствие элементов полного комплекта,  загар, потертости или царапины на коже, пятна на материале, следы носки на подкладке, потертости на фурнитуре, сумка была в спа</li>
				</ul>
			`}
            disabled={brandnew || !conditions.length}
        >
            {conditions.map(({ condition, slug }) => (
                <div className="catalog-filters-block-content-checkbox" key={slug}>
                    <Checkbox
                        id={`catalog-filters-block-content-conditions-checkbox-${slug}`}
                        label={condition}
                        onChange={() => onClickSetCondition(condition)}
                        checked={selectedConditions.includes(condition)}
                    />
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersConditions;
