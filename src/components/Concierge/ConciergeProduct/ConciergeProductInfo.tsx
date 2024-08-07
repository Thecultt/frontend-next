import React from 'react';

import { ConciergeProduct } from '@/models/IConcierge';

const ConciergeProductInfo: React.FC<ConciergeProduct> = ({ image, title, price, description }) => {
    return (
        <div className="concierge-product-item">
            <div className="concierge-product-item-info">
                <div className="concierge-product-item-info-image" style={{ backgroundImage: `url(${image})` }}></div>

                <div className="concierge-product-item-info-text">
                    <h2 className="concierge-product-item-info-text__title">{title}</h2>

                    <p className="concierge-product-item-info-text__price">{price}</p>

                    <p className="concierge-product-item-info-text__description">{description}</p>
                </div>

                <p className="concierge-product-item-info__subinfo">*предложение не является публичной офертой.</p>
            </div>

            <div className="concierge-product-item-buyer">
                <h3 className="concierge-product-item-buyer__title">Товар частного продавца.</h3>

                <p className="concierge-product-item-buyer__subtitle">
                    Цена примерная, актуальную стоимость уточняйте у менеджера.
                </p>
            </div>
        </div>
    );
};

export default ConciergeProductInfo;
