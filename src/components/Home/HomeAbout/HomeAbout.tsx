import React from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';

import { MEDIA_SIZES } from '@/constants/styles';

import HomeAboutImage from '@/assets/images/home/home-about.jpg';
import HomeAboutImageMedia from '@/assets/images/home/home-about-media.jpg';

const HomeAbout: React.FC = () => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    return (
        <>
            {!isMobile ? (
                <div className="home-about hover-scale">
                    <div
                        className="home-about-image"
                        style={{
                            backgroundImage: `url('${HomeAboutImage.src}')`,
                        }}
                    ></div>

                    <div className="home-about-text">
                        <h2 className="home-about-text__title">Мы THE CULTT — ресейл-платформа культовых вещей.</h2>

                        <p className="home-about-text__description">
                            Это обувь, сумки и другие аксессуары, отобранные нашими кураторами с большим вниманием к
                            селекции. Все лоты THE CULTT — это предметы с историей, которые достойны стать частью вашей
                            истории. Вместе мы формируем КУЛЬТуру нового потребления.
                        </p>

                        <Link href="/about" className="home-about-text__btn">
                            Перейти
                        </Link>
                    </div>
                </div>
            ) : (
                <div
                    className="home-about hover-scale"
                    style={{ backgroundImage: `url("${HomeAboutImageMedia.src}")` }}
                >
                    <div className="home-about-text">
                        <h2 className="home-about-text__title">Мы THE CULTT — ресейл-платформа культовых вещей.</h2>

                        <p className="home-about-text__description">
                            Это обувь, сумки и другие аксессуары, отобранные нашими кураторами с большим вниманием к
                            селекции. Все лоты THE CULTT — это предметы с историей, которые достойны стать частью вашей
                            истории. Вместе мы формируем КУЛЬТуру нового потребления.
                        </p>

                        <Link href="/about" className="home-about-text__btn">
                            Перейти
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default HomeAbout;
