import React from 'react';
import { useDispatch } from 'react-redux';

import { getClassNames } from '@/functions/getClassNames';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { setBrandsLetter, setBrandsSearch } from '@/redux/actions/brands';

const BrandsSearch: React.FC = () => {
    const dispatch = useDispatch();

    const { allBrands, letter } = useTypedSelector(({ brands }) => brands);

    const onClickLetter = (letter: string) => {
        dispatch(setBrandsLetter(letter));
    };

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setBrandsSearch(e.target.value.toLocaleLowerCase()));
    };

    return (
        <div className="brands-search">
            <div className="brands-search-alphabet">
                {Object.keys(allBrands).map((item, index) => (
                    <button
                        className={getClassNames('brands-search-alphabet__btn', { active: item === letter })}
                        key={`brands-search-alphabet__btn-${index}`}
                        onClick={() => onClickLetter(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className="brands-search-input input-light border">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.16667 16.3177C12.8486 16.3177 15.8333 13.3329 15.8333 9.65104C15.8333 5.96914 12.8486 2.98438 9.16667 2.98438C5.48477 2.98438 2.5 5.96914 2.5 9.65104C2.5 13.3329 5.48477 16.3177 9.16667 16.3177Z"
                        stroke="#838383"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17.5 17.9844L13.875 14.3594"
                        stroke="#838383"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <input
                    type="text"
                    className="input-light__field"
                    id="name"
                    placeholder="Поиск брендов"
                    onChange={onChangeSearch}
                />
            </div>
        </div>
    );
};

export default BrandsSearch;
