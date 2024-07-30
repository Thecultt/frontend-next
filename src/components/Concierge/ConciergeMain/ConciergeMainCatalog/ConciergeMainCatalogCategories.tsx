import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setConciergeCurrentCategory } from '@/redux/actions/concierge';
import { getClassNames } from '@/functions/getClassNames';

const ConciergeMainCatalogCategories: React.FC = () => {
    const dispatch = useDispatch();

    const { categories, currentCategory } = useTypedSelector(({ concierge }) => concierge);

    const onClickSetCurrentCategory = (category: string) => {
        dispatch(setConciergeCurrentCategory(category));
    };

    return (
        <div className="concierge-catalog-filters-categories">
            {Object.keys(categories).map((category, index) => (
                <button
                    className={getClassNames(`concierge-catalog-filters-categories__btn`, {
                        active: currentCategory === category,
                    })}
                    key={`concierge-catalog-filters-categories__btn-${index}`}
                    onClick={() => onClickSetCurrentCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default ConciergeMainCatalogCategories;
