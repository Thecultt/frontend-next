import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { MEDIA_SIZES } from '@/constants/styles';
import { getClassNames } from '@/functions/getClassNames';

import BuyerTheculttMainImage from '@/assets/images/buyer-thecultt/buyer-thecultt-main.jpg';
import BuyerTheculttMainImageMedia from '@/assets/images/buyer-thecultt/buyer-thecultt-main-media.jpg';

interface BuyerTheCulttMainBannerProps {
    onClickOpenCustomForm: () => void;
}

const BuyerTheCulttMainBanner: React.FC<BuyerTheCulttMainBannerProps> = ({ onClickOpenCustomForm }) => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    return (
        <div
            className="buyer-thecultt-main"
            style={{
                backgroundImage: `url("${isMobile ? BuyerTheculttMainImageMedia.src : ''}")`,
            }}
        >
            <div className="buyer-thecultt-main-text">
                <h2 className="title mb buyer-thecultt-main-text__title">Консьерж-сервис</h2>
                <p className="description buyer-thecultt-main-text__description">
                    Доставит для вас из Европы украшения Cartier, Bvlgari, Messika, Van Cleef & Arpels или часы главных
                    часовых брендов. К заказу доступны все позиции с официальных сайтов.
                </p>
                <button
                    className={getClassNames('buyer-thecultt-main-text__btn', {
                        btn: !isMobile,
                        'btn-light': isMobile,
                    })}
                    onClick={onClickOpenCustomForm}
                >
                    Отправить заявку
                </button>
            </div>

            <div
                className="buyer-thecultt-main-image"
                style={{
                    backgroundImage: `url("${!isMobile ? BuyerTheculttMainImage.src : ''}")`,
                }}
            ></div>
        </div>
    );
};

export default BuyerTheCulttMainBanner;
