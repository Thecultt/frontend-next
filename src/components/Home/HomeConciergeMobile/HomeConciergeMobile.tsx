import React from 'react';

import HomeConciergeMobileImage from '@/assets/images/home/home-concierge-mobile.jpg';

import './styles.sass';

const HomeConciergeMobile: React.FC = () => {
    return (
        <div className="home-concierge-mobile">
            <div
                className="home-concierge-mobile-image"
                style={{ backgroundImage: `url(${HomeConciergeMobileImage.src})` }}
            ></div>

            <div className="home-concierge-mobile-text">
                <h2 className="home-concierge-mobile-text__title">
                    Вы выберете,
                    <br />
                    мы доставим
                </h2>

                <p className="home-concierge-mobile-text__description">
                    Консьерж-сервис THE CULTT доставит для вас из&nbsp;Европы и&nbsp;США любые позиции
                    с&nbsp;официальных сайтов!
                </p>
            </div>
        </div>
    );
};

export default HomeConciergeMobile;
