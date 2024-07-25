import React from 'react';

interface Props {
    description?: string | null;
}

const ProductInfoDescription: React.FC<Props> = ({ description }) => {
    if (!description) {
        return null;
    }

    return (
        <div className="product-content-info-description">
            <h3 className="product-content-info-description__title product-content-title">Описание</h3>

            <p
                className="product-content-info-description__description"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div>
    );
};

export default ProductInfoDescription;
