import React from 'react';

import { ProductPage } from '@/models/IProduct';

const ProductInfoDescription: React.FC<ProductPage> = ({ description }) => {
    return (
        <div className="product-content-info-description">
            <h3 className="product-content-info-description__title">Описание</h3>

            <p
                className="product-content-info-description__description"
                dangerouslySetInnerHTML={{ __html: description }}
            ></p>
        </div>
    );
};

export default ProductInfoDescription;
