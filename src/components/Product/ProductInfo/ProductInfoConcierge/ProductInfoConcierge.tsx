import React from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'usehooks-ts';

import { sendReachGoal } from '@/functions/yandex';

import { sendConciergeProductApplication } from '@/redux/actions/concierge';

import { MEDIA_SIZES } from '@/constants/styles';

import { Popup, ProductInfoConciergeForm } from '@/components/';

interface Props {
    article: string;
}

const ProductInfoConcierge: React.FC<Props> = ({ article }) => {
    const dispatch = useDispatch();

    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    const [statePopup, setStatePopup] = React.useState(false);

    const onSubmit = (data: any) => {
        dispatch(sendConciergeProductApplication(data, article) as any);
    };

    const onClickOpen = () => {
        setStatePopup(true);
        sendReachGoal('click_banner_concierge');
    };

    return (
        <>
            <Popup state={statePopup} setState={() => setStatePopup(!statePopup)} center>
                <ProductInfoConciergeForm onSubmit={onSubmit} />
            </Popup>

            {isMobile ? (
                <button
                    className="btn-light-green large product-content-info-concierge-media__btn"
                    onClick={onClickOpen}
                >
                    Заказать через Консьерж-сервис
                </button>
            ) : (
                <div className="product-content-info-concierge">
                    <h3 className="product-content-info-concierge__title">Консьерж-сервис</h3>

                    <p className="product-content-info-concierge__description">
                        Консьерж-сервис THE CULTT доставит для вас из&nbsp;Европы и&nbsp;США любые позиции
                        с&nbsp;официальных сайтов Herm&egrave;s, Chanel, Cartier, Panerai и&nbsp;других культовых
                        брендов
                    </p>

                    <button className="product-content-info-concierge__btn" onClick={onClickOpen}>
                        Заказать через Консьерж-сервис
                    </button>
                </div>
            )}
        </>
    );
};

export default ProductInfoConcierge;
