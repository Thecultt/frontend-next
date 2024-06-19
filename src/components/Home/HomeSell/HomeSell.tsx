import React from 'react';
import Link from 'next/link';

import HomeSellImage from '@/assets/images/home/home-sell.jpg';

const HomeSell: React.FC = () => {
    return (
        <div className="home-sell hover-scale">
            <div
                className="home-sell-image"
                style={{
                    backgroundImage: `url('${HomeSellImage.src}')`,
                }}
            ></div>

            <div className="home-sell-text">
                <h2 className="home-sell-text__title">Мы найдем нового владельца для ваших аксессуаров</h2>
                <p className="home-sell-text__description">
                    Воспользуйтесь услугой выкупа, продажи с комиссией или обмена вашего аксессуара на новый.
                </p>

                <Link
                    href="/sell"
                    className="btn home-sell-text__btn"
                    onClick={() => {
                        window?.dataLayer?.push({ ecommerce: null }); // Clear the previous ecommerce object.
                        window?.dataLayer?.push({
                            event: 'sell_click',
                            ecommerce: {
                                timestamp: Math.floor(Date.now() / 1000),
                            },
                        });
                    }}
                >
                    Продать сейчас
                </Link>
            </div>
        </div>
    );
};

export default HomeSell;
