'use client';

import React from 'react';
import Link from 'next/link';

import { APP_ROUTE } from '@/constants/routes';
import HomeSellImage from '@/assets/images/home/home-sell.jpg';
import { pushDataLayer } from '@/functions/pushDataLayer';

const HomeSell: React.FC = () => (
    <div className="home-sell hover-scale">
        <div
            className="home-sell-image"
            style={{
                backgroundImage: `url('${HomeSellImage.src}')`,
            }}
        />

        <div className="home-sell-text">
            <h2 className="home-sell-text__title">Мы найдем нового владельца для ваших аксессуаров</h2>
            <p className="home-sell-text__description">
                Воспользуйтесь услугой выкупа, продажи с комиссией или обмена вашего аксессуара на новый.
            </p>

            <Link
                href={APP_ROUTE.sell.info}
                className="btn home-sell-text__btn"
                onClick={() => {
                    pushDataLayer('sell_click');
                }}
            >
                Продать сейчас
            </Link>
        </div>
    </div>
);

export default HomeSell;
