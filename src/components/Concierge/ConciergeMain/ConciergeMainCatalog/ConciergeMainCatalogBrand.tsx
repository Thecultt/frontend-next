import React from 'react';
import { useDispatch } from 'react-redux';

import { getClassNames } from '@/functions/getClassNames';

import { useTypedSelector } from '@/hooks/useTypedSelector';

import { setConciergeCurrentBrand } from '@/redux/actions/concierge';

const ConciergeMainCatalogBrand: React.FC = () => {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = React.useState(false);

    const PopupRef = React.useRef<HTMLDivElement>(null);

    const { categories, currentCategory, currentBrand } = useTypedSelector(({ concierge }) => concierge);

    React.useEffect(() => {
        document.addEventListener('mousedown', togglePopup);
        document.addEventListener('touchstart', togglePopup);

        return () => {
            document.removeEventListener('mousedown', togglePopup);
            document.removeEventListener('touchstart', togglePopup);
        };
    }, [PopupRef]);

    const togglePopup = (e: any) => {
        if (PopupRef.current && !PopupRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    const onClickSetCurrentBrand = (brand: string) => {
        dispatch(setConciergeCurrentBrand(brand));
        setIsOpen(false);
    };

    return (
        <div className="concierge-catalog-filters-brand" ref={PopupRef}>
            <div className="concierge-catalog-filters-brand-current" onClick={() => setIsOpen(!isOpen)}>
                <span className="concierge-catalog-filters-brand-current__title">
                    {currentBrand !== '' ? currentBrand : 'Бренды'}
                </span>

                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1 1.71973L7 7.71973L13 1.71973"
                        stroke="#285141"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <div
                className={getClassNames(`concierge-catalog-filters-brand-list`, {
                    active: isOpen,
                })}
            >
                <p
                    className={getClassNames(`concierge-catalog-filters-brand-list__item`, {
                        current: currentBrand === '',
                    })}
                    onClick={() => onClickSetCurrentBrand('')}
                >
                    Все бренды
                </p>

                {categories[currentCategory] &&
                    categories[currentCategory].brands.map((brand, index) => (
                        <p
                            className={getClassNames(`concierge-catalog-filters-brand-list__item`, {
                                current: currentBrand === brand,
                            })}
                            key={`concierge-catalog-filters-brand-list__item-${index}`}
                            onClick={() => onClickSetCurrentBrand(brand)}
                        >
                            {brand}
                        </p>
                    ))}
            </div>
        </div>
    );
};

export default ConciergeMainCatalogBrand;
