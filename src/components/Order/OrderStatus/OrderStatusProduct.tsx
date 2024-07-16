import React from 'react';

import { OrderProduct } from '@/models/IOrder';

const OrderStatusProduct: React.FC<OrderProduct> = ({ images, manufacturer, model_name, condition, price }) => {
    return (
        <div className="order-status-content-good">
            <div
                className="order-status-content-good-image"
                style={{
                    backgroundImage: `url('${images[0]}')`,
                }}
            ></div>
            <div className="order-status-content-good-text">
                <p className="order-status-content-good-text__brand">{manufacturer}</p>
                <p className="order-status-content-good-text__model">{model_name}</p>
                <div className="order-status-content-good-text-state">
                    <span className="order-status-content-good-text-state__subtitle">Состояние</span>

                    <span className="order-status-content-good-text-state__title">
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
                <p className="order-status-content-good-text__price">{price.toLocaleString('ru-RU')}₽</p>
            </div>
        </div>
    );
};

export default OrderStatusProduct;
