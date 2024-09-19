import React from 'react';

import { ProductPage } from '@/models/IProduct';
import { capitalize } from '@/functions/capitalize';

import { ProductInfoProperty } from './ProductInfoProperty';

const ProductInfoParameters: React.FC<ProductPage> = ({
    gender,
    color,
    external_material,
    lining_material,
    kit,
    leather_type,
    bag_year,
    hardware,
    style,
    lens_type,
    frame_type,
    scarf_composition,
    jewelry_material,
    model_height,
    length,
    width,
    height,
    handle_length,
    strap_length,
    size,
    brand_size,
    insole_length,
    heel_height,
    shoe_size,
    glasses_sizes,
    glass_frame,
    diameter,
    ring_size,
    reference_number_clock,
    case_material_clock,
    bracelet_material_clock,
    dial_color_clock,
    movement_type_clock,
    country_of_origin_clock,
    waterproof_clock,
    branded_box_clock,
    documents_clock,
    collection_jewelry,
    weight_jewelry,
    metal_jewelry,
    color_metal_jewelry,
    sample_metal_jewelry,
    cover_metal_jewelry,
    size_jewelry,
    length_jewelry,
    width_jewelry,
    description_jewelry,
}) => {
    const parameters = [
        { title: 'Год выпуска', value: bag_year },
        { title: 'Внешний материал', value: external_material },
        { title: 'Материал подкладки', value: lining_material },
        { title: 'Материал', value: jewelry_material },
        { title: 'Состав', value: scarf_composition },
        { title: 'Материал', value: leather_type },
        { title: 'Фурнитура', value: hardware },
        { title: 'Тип линз', value: lens_type },
        { title: 'Тип оправы', value: frame_type },
        { title: 'Цвет', value: color },
        { title: 'Пол', value: gender },
        { title: 'Комплект', value: kit },
        { title: 'Размер', value: size },
        { title: 'Размер', value: shoe_size },
        { title: 'Размер', value: glasses_sizes },
        { title: 'Форма очков', value: glass_frame },
        { title: 'Размер', value: ring_size },
        { title: 'Размер в сетке бренда', value: brand_size },
        { title: 'Длина (см)', value: length },
        { title: 'Ширина (см)', value: width },
        { title: 'Высота (см)', value: height },
        { title: 'Длина ручек (см)', value: handle_length },
        { title: 'Длина плечевого ремня (см)', value: strap_length },
        { title: 'Длина по стельке (см)', value: insole_length },
        { title: 'Высота каблука (см)', value: heel_height },
        { title: 'Диаметр (см)', value: diameter },
        { title: 'Рост модели (см)', value: model_height },
        { title: 'Стиль', value: style },

        { title: 'Референс номер', value: reference_number_clock },
        { title: 'Материал корпуса', value: case_material_clock },
        { title: 'Материал браслета', value: bracelet_material_clock },
        { title: 'Цвет циферблата', value: dial_color_clock },
        { title: 'Тип механизма', value: movement_type_clock },
        { title: 'Страна пр-ва', value: country_of_origin_clock },
        { title: 'Водонепроницаемость', value: waterproof_clock },
        { title: 'Фирменная коробка', value: branded_box_clock },
        { title: 'Документы', value: documents_clock },

        { title: 'Коллекция', value: collection_jewelry },
        { title: 'Вес', value: weight_jewelry },
        { title: 'Тип металла', value: metal_jewelry ? capitalize(metal_jewelry) : '' },
        { title: 'Цвет металла', value: color_metal_jewelry },
        { title: 'Проба', value: sample_metal_jewelry },
        { title: 'Покрытие', value: cover_metal_jewelry },
        { title: 'Размер', value: size_jewelry },
        { title: 'Длина (см)', value: length_jewelry },
        { title: 'Ширина (см)', value: width_jewelry },
        { title: 'Характеристики', value: description_jewelry, column: true },
    ].filter((item) => !!item.value) as { title: string; value: string; column?: boolean }[];

    if (!parameters.length) {
        return null;
    }

    return (
        <div className="product-content-info-parameters">
            <h4 className="product-content-info-parameters__title product-content-title">Информация о товаре</h4>

            {parameters.map((parameter, index) => (
                <ProductInfoProperty
                    key={index}
                    title={parameter.title}
                    value={parameter.value}
                    column={parameter.column}
                    className="product-content-info-parameters__item"
                />
            ))}
        </div>
    );
};

export default ProductInfoParameters;
