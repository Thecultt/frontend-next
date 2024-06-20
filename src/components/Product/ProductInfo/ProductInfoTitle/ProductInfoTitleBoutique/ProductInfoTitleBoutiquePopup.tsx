import React from 'react';

const ProductInfoTitleBoutiquePopup: React.FC = () => {
    return (
        <div className="product-content-info-title-boutique-popup">
            <h2 className="product-content-info-title-boutique-popup__title">Лот из бутика</h2>

            <p className="product-content-info-title-boutique-popup__description">
                Этот лот новый и не был в использовании. Мы получили его напрямую из бутика-партнера или от частного
                байера — в таком состоянии, в каком вы бы купили его в бутике бренда.
            </p>

            <a href="/catalog?boutique=true" className="btn product-content-info-title-boutique-popup__btn">
                Смотреть все
            </a>
        </div>
    );
};

export default ProductInfoTitleBoutiquePopup;
