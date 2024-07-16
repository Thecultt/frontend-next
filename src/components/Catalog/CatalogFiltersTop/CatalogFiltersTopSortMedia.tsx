import React from 'react';
import { useDispatch } from 'react-redux';

import { setFiltersSortProduct } from '@/redux/actions/products';
import { getClassNames } from '@/functions/getClassNames';

import { sortItems } from './CatalogFiltersTopSort';

interface Props {
    initSortKey: string;
}

const CatalogFiltersTopSortMedia: React.FC<Props> = ({ initSortKey }) => {
    const dispatch = useDispatch();

    const [state, setState] = React.useState<boolean>(false);
    const [currentSortKey, setCurrentSortKey] = React.useState<string>(initSortKey);

    const ModalRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (initSortKey) setCurrentSortKey(initSortKey);
    }, [initSortKey]);

    React.useEffect(() => {
        document.addEventListener('mousedown', hiddeModal);
        document.addEventListener('touchstart', hiddeModal);

        return () => {
            document.removeEventListener('mousedown', hiddeModal);
            document.removeEventListener('touchstart', hiddeModal);
        };
    }, [ModalRef]);

    const hiddeModal = (e: any) => {
        if (ModalRef.current && !ModalRef.current.contains(e.target)) {
            setState(false);
        }
    };

    const toggleState = () => {
        setState(!state);
    };

    const onClickSetItem = (key: string) => {
        setCurrentSortKey(key);

        dispatch(setFiltersSortProduct(key));

        setTimeout(() => {
            setState(false);
        }, 200);
    };

    return (
        <>
            <div className="catalog-filters-top-media-btn-sort-wrapper" ref={ModalRef}>
                <button className="catalog-filters-top-media-btn__btn" onClick={toggleState}>
                    Сортировать
                    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 18V16H9.5V18H3.5ZM3.5 13V11H15.5V13H3.5ZM3.5 8V6H21.5V8H3.5Z" fill="#202020" />
                    </svg>
                </button>

                <div
                    className={getClassNames('catalog-filters-top-media-btn-sort', {
                        active: state,
                    })}
                >
                    {Object.keys(sortItems).map((key, index) => (
                        <div
                            className="checkbox-wrapper catalog-filters-top-media-btn-sort-item"
                            key={`catalog-filters-top-media-btn-sort-item-${index}`}
                            onClick={() => onClickSetItem(key)}
                        >
                            <input
                                id={`catalog-filters-top-media-btn-sort-item-${index}`}
                                type="radio"
                                className="checkbox"
                                name="sort-media"
                                checked={key === currentSortKey}
                            />

                            <label
                                htmlFor={`catalog-filters-top-media-btn-sort-item-${index}`}
                                className="checkbox__label"
                            >
                                <p className="checkbox__label__text">{sortItems[key]}</p>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CatalogFiltersTopSortMedia;
