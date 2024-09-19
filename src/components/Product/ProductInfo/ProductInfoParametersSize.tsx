import React from 'react';

import { ProductPage } from '@/models/IProduct';

const ProductInfoParametersSize: React.FC<ProductPage> = ({
    model_height,
    length,
    width,
    height,
    handle_length,
    strap_length,
    brand_size,
    insole_length,
    heel_height,
    size,
    shoe_size,
    glasses_sizes,
    diameter,
    ring_size,
}) => {
    const parameters = [
        { title: 'Рост модели, см', value: model_height },
        { title: 'Длина, см', value: length },
        { title: 'Ширина, см', value: width },
        { title: 'Высота, см', value: height },
        { title: 'Длина ручек, см', value: handle_length },
        { title: 'Длина плечевого ремня, см', value: strap_length },
        { title: 'Размер в сетке бренда', value: brand_size },
        { title: 'Длина по стельке, см', value: insole_length },
        { title: 'Высота каблука, см', value: heel_height },
        { title: 'Размер', value: size },
        { title: 'Размер', value: shoe_size },
        { title: 'Размер', value: glasses_sizes },
        { title: 'Диаметр, см', value: diameter },
        { title: 'Размер', value: ring_size },
    ].filter((item) => !!item.value) as { title: string; value: string }[];

    return (
        <div className="product-content-info-parameters">
            <h4 className="product-content-info-parameters__title">Размер</h4>

            {parameters.map((parameter, index) => (
                <p
                    className="product-content-info-parameters__item"
                    key={`product-content-info-parameters-size__item-${index}`}
                >
                    <span>{parameter.title}:</span> {parameter.value}
                </p>
            ))}
        </div>
    );
};

export default ProductInfoParametersSize;
