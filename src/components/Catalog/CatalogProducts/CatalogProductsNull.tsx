import React from 'react';
import { useDispatch } from 'react-redux';

import { clearProductsFilters } from '@/redux/actions/products';

const CatalogProductsNull: React.FC = () => {
    const dispatch = useDispatch();

    const onClickClearFilters = () => {
        window.scrollTo(0, 0);
        dispatch(clearProductsFilters());
    };

    return (
        <div className="catalog-product-null">
            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M52.5 53.0195L41.625 42.1445M47.5 28.0195C47.5 39.0652 38.5457 48.0195 27.5 48.0195C16.4543 48.0195 7.5 39.0652 7.5 28.0195C7.5 16.9738 16.4543 8.01953 27.5 8.01953C38.5457 8.01953 47.5 16.9738 47.5 28.0195Z"
                    stroke="#838383"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <h3 className="catalog-product-null__title">Подходящих результатов не найдено.</h3>

            <p className="catalog-product-null__subtitle">
                Проверьте, правильно ли введен запрос или воспользуйтесь фильтрами
            </p>

            <button className="btn-regular catalog-product-null__btn" onClick={onClickClearFilters}>
                Сбросить фильтры
            </button>
        </div>
    );
};

export default CatalogProductsNull;
