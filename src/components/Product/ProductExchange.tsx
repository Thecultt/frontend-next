import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';
import ExchangeMainImage from '@/assets/images/exchange/exchange-main-image.png';
import { BaseImage } from '../UI/BaseImage/BaseImage';

const ProductExchange: React.FC = () => {
    return (
        <div className="container">
            <div className="product-exchange">
                <div className="product-exchange-text">
                    <h2 className="product-exchange-text__title">Запускай Круговорот сумок с THE CULTT</h2>

                    <p className="product-exchange-text__subtitle">
                        Мы оценим ваш лот и предложим депозит в размере его стоимости на покупку нового лота на нашем
                        сайте
                    </p>

                    <Link href={APP_ROUTE.exchange} className="btn product-exchange-text__btn">
                        Начать продавать
                    </Link>
                </div>

                <BaseImage alt="" src={ExchangeMainImage.src} className="product-exchange__image" />
            </div>
        </div>
    );
};

export default ProductExchange;
