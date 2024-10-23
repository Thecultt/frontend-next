import React from 'react';
import Link from 'next/link';

import { WaitingPopupType } from '@/types/waiting';

import HomeWaitingImage from '@/assets/images/home/home-waiting.jpg';

import './styles.sass';

const HomeWaiting: React.FC = () => (
    <div className="home-waiting hover-scale">
        <div className="home-waiting-text">
            <h2 className="home-waiting-text__title">Не нашли аксессуар мечты?</h2>

            <p className="home-waiting-text__description">
                Подпишитесь на товар, и мы уведомим вас, когда он будет в наличии.
            </p>

            <Link
                href={`#${WaitingPopupType.Form}`}
                className="btn home-waiting-text__btn"
                scroll={false}
                prefetch={false}
            >
                Оставить заявку
            </Link>
        </div>

        <div
            className="home-waiting-image"
            style={{
                backgroundImage: `url('${HomeWaitingImage.src}')`,
            }}
        />
    </div>
);

export default HomeWaiting;
