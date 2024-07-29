import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setFiltersConditionsProduct } from '@/redux/actions/products';
import { CatalogFiltersBlockWrapper, Checkbox } from '@/components';

interface CatalogFiltersConditionsProps {
    conditions: string[];
}

const CatalogFiltersConditions: React.FC<CatalogFiltersConditionsProps> = ({ conditions }) => {
    const dispatch = useDispatch();

    const { filters } = useTypedSelector(({ products }) => products);

    const onClickSetCondition = (condition: string) => {
        dispatch(setFiltersConditionsProduct(condition));
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
            disabled={filters.boutique}
        >
            {conditions.map((condition, index) => (
                <div
                    className="catalog-filters-block-content-checkbox"
                    key={`catalog-filters-block-content-conditions-checkbox-${index}`}
                >
                    <Checkbox
                        id={`catalog-filters-block-content-conditions-checkbox-${index}`}
                        label={condition}
                        onChange={() => onClickSetCondition(condition)}
                        checked={
                            Object.keys(filters.conditions).find((filtersCondition) => condition === filtersCondition)
                                ? true
                                : false
                        }
                    />
                </div>
            ))}
        </CatalogFiltersBlockWrapper>
    );
};

export default CatalogFiltersConditions;
