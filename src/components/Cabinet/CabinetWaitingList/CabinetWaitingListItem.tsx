import React, { useCallback } from 'react';
import Link from 'next/link';

import { getClassNames } from '@/functions/getClassNames';
import { WaitingListItem } from '@/models/IWaitingListItem';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { ICatalogFilters } from '@/types/catalog';
import { AVAILABILITY } from '@/constants/catalog';

const CabinetWaitingListItem: React.FC<WaitingListItem> = ({
    num,
    id,
    category,
    subcategory,
    brand,
    model_name,
    size,
    num_products,
}) => {
    const getCatalogLink = useCallback(() => {
        const params: ICatalogFilters = {
            categories: [category],
            availability: [AVAILABILITY.available],
        };

        if (subcategory) {
            params['types'] = [subcategory];
        }

        if (brand) {
            params['brands'] = [brand];
        }

        if (model_name) {
            params['models'] = [model_name];
        }

        return getCatalogFiltersUrl(params);
    }, [brand, category, model_name, subcategory]);

    return (
        <div className="cabinet-waiting-list-item-wrapper">
            <div className="cabinet-waiting-list-item">
                <Link
                    href={`?id=${id}#delete_waiting`}
                    className="cabinet-waiting-list-item__remove"
                    scroll={false}
                    prefetch={false}
                >
                    Отписаться
                </Link>

                <div className="cabinet-waiting-list-item-title">
                    <h3 className="cabinet-waiting-list-item-title__title">Подписка №{num}</h3>

                    <Link
                        href={getCatalogLink()}
                        className={getClassNames('cabinet-waiting-list-item-title__subtitle', {
                            disabled: !num_products,
                        })}
                    >
                        Доступно товаров на сайте {num_products} шт.
                    </Link>
                </div>
                <div className="cabinet-waiting-list-item-info">
                    <div className="cabinet-waiting-list-item-info-item">
                        <p className="cabinet-waiting-list-item-info-item__title">Категория:</p>
                        <p className="cabinet-waiting-list-item-info-item__value">{category}</p>
                    </div>

                    {subcategory !== '' && subcategory ? (
                        <div className="cabinet-waiting-list-item-info-item">
                            <p className="cabinet-waiting-list-item-info-item__title">Тип:</p>
                            <p className="cabinet-waiting-list-item-info-item__value">{subcategory}</p>
                        </div>
                    ) : null}

                    {brand !== '' && brand ? (
                        <div className="cabinet-waiting-list-item-info-item">
                            <p className="cabinet-waiting-list-item-info-item__title">Бренд:</p>
                            <p className="cabinet-waiting-list-item-info-item__value">{brand}</p>
                        </div>
                    ) : null}

                    {model_name !== '' && model_name ? (
                        <div className="cabinet-waiting-list-item-info-item">
                            <p className="cabinet-waiting-list-item-info-item__title">Название модели:</p>
                            <p className="cabinet-waiting-list-item-info-item__value">{model_name}</p>
                        </div>
                    ) : null}

                    {size !== '' && size ? (
                        <div className="cabinet-waiting-list-item-info-item">
                            <p className="cabinet-waiting-list-item-info-item__title">Размер:</p>
                            <p className="cabinet-waiting-list-item-info-item__value">{size}</p>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default CabinetWaitingListItem;
