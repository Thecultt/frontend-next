import React from 'react';
import Image from 'next/image';

import { Button } from '@/shared/ui';
import { WaitingPopupType } from '@/types/waiting';

import HomeWaitingBg from '@/assets/images/home/home-waiting-media-bg.jpg';
import HomeWaitingImage from '@/assets/images/home/home-waiting-media-image.jpg';

import './styles.sass';

const HomeWaitingMedia: React.FC = () => {
    return (
        <div className="home-waiting-media" style={{ backgroundImage: `url(${HomeWaitingBg.src})` }}>
            <div className="home-waiting-media-text">
                <Image src={HomeWaitingImage} alt="" className="home-waiting-media-text__image" />

                <h2 className="home-waiting-media-text__title">Не нашли аксессуар мечты?</h2>

                <p className="home-waiting-media-text__subtitle">
                    Подпишитесь на&nbsp;товар, и&nbsp;мы&nbsp;уведомим вас, когда он&nbsp;будет в&nbsp;наличии.
                </p>
            </div>

            <Button href={`#${WaitingPopupType.Form}`} theme="white" label="Подписаться и быть в курсе" wide />
        </div>
    );
};

export default HomeWaitingMedia;
