import React from 'react';
import Link from 'next/link';

import { OrderProduct } from '@/models/IOrder';
import { APP_ROUTE } from '@/constants/routes';

const CabinetHistoryOrdersItemProduct: React.FC<OrderProduct> = ({
    article,
    images,
    manufacturer,
    model_name,
    color,
    kit,
    condition,
    price,
}) => {
    return (
        <Link href={`${APP_ROUTE.product}/${article}`} className="cabinet-history-orders-item-info-product">
            <div
                className="cabinet-history-orders-item-info-product-image"
                style={{
                    backgroundImage: `url('${images[0]}')`,
                }}
            ></div>
            <div className="cabinet-history-orders-item-info-product-text">
                <p className="cabinet-history-orders-item-info-product-text__brand">{manufacturer}</p>
                <p className="cabinet-history-orders-item-info-product-text__model">{model_name}</p>
                <p className="cabinet-history-orders-item-info-product-text__option">
                    <span>Цвет:</span> {color}
                </p>
                <p className="cabinet-history-orders-item-info-product-text__option">
                    <span>Комплект:</span>
                    {kit}
                </p>

                <div className="cabinet-history-orders-item-info-product-text-state">
                    <span className="cabinet-history-orders-item-info-product-text-state__subtitle">Состояние</span>

                    <span className="cabinet-history-orders-item-info-product-text-state__title">
                        <svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.50781 11C8.26924 11 10.5078 8.76142 10.5078 6C10.5078 3.23858 8.26924 1 5.50781 1C2.74639 1 0.507812 3.23858 0.507812 6C0.507812 8.76142 2.74639 11 5.50781 11Z"
                                stroke="#285141"
                                strokeWidth="0.716034"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.28516 6.00369L4.95182 7.67036L7.7296 4.89258"
                                stroke="#285141"
                                strokeWidth="0.716034"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {condition}
                    </span>
                </div>

                <p className="cabinet-history-orders-item-info-product-text-state__price">
                    {price && price.toLocaleString('ru-RU')}₽
                </p>
            </div>
        </Link>
    );
};

export default CabinetHistoryOrdersItemProduct;
