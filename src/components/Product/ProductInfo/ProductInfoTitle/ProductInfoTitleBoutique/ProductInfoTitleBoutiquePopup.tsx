import React from 'react';
import Link from 'next/link';

import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';

const ProductInfoTitleBoutiquePopup: React.FC = () => {
    return (
        <div className="product-content-info-title-badges-badge-popup">
            <h2 className="product-content-info-title-badges-badge-popup__title">Лот из бутика</h2>

            <p className="product-content-info-title-badges-badge-popup__description">
                Этот лот новый и не был в использовании. Мы получили его напрямую из бутика-партнера или от частного
                байера — в таком состоянии, в каком вы бы купили его в бутике бренда.
            </p>

            <Link
                href={getCatalogFiltersUrl({ boutique: true })}
                className="btn product-content-info-title-badges-badge-popup__btn"
            >
                Смотреть все
            </Link>
        </div>
    );
};

export default ProductInfoTitleBoutiquePopup;
