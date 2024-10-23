import React from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';

import { VISIT_AVAILABLE } from '@/constants/app';
import { APP_ROUTE } from '@/constants/routes';
import { MEDIA_SIZES } from '@/constants/styles';

import VisitImage from '@/assets/images/home/home-visit.jpg';
import VisitImageMedia from '@/assets/images/home/home-visit-media.jpg';

import './styles.sass';

const title = VISIT_AVAILABLE ? 'Забронируйте свой визит в THE CULTT!' : 'Визит в THE CULTT';
const description = VISIT_AVAILABLE ? (
    'Примерьте сумки и аксессуары лучших дизайнеров из коллекции THE CULTT или встретьтесь с нашим экспертом, чтобы узнать, сколько вы сможете заработать на своих украшениях.'
) : (
    <>
        Внимание! Клиентская зона закрыта с 10.07. Это временно — мы обновляем пространство. Как только запись в
        клиентскую зону откроется снова, мы пришлем зарегистрированным пользователям уведомление.
        <br />
        <br />
        Пока мы обновляемся, остальные опции работают как обычно. Закажите доставку и примерку понравившихся лотов на
        дом или оформите заявку на продажу своих аксессуаров.
    </>
);

const HomeVisit: React.FC = () => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.mobile})`, { initializeWithValue: false });

    return (
        <>
            {isMobile ? (
                <div className="home-visit-media" style={{ backgroundImage: `url('${VisitImageMedia.src}')` }}>
                    <div className="home-visit-media-text">
                        <h2 className="home-visit-media-text__title">{title}</h2>
                        <p className="home-visit-media-text__description">{description}</p>

                        {VISIT_AVAILABLE && (
                            <Link href={APP_ROUTE.visit} className="btn-regular white home-visit-media-text__btn">
                                Перейти
                            </Link>
                        )}
                    </div>
                </div>
            ) : (
                <div className="home-visit hover-scale">
                    <div className="home-visit-text">
                        <h2 className="home-visit-text__title">{title}</h2>
                        <p className="home-visit-text__description">{description}</p>

                        {VISIT_AVAILABLE && (
                            <Link href={APP_ROUTE.visit} className="btn home-visit-text__btn">
                                Перейти
                            </Link>
                        )}
                    </div>

                    <div
                        className="home-visit-image"
                        style={{
                            backgroundImage: `url('${VisitImage.src}')`,
                        }}
                    ></div>
                </div>
            )}
        </>
    );
};

export default HomeVisit;
