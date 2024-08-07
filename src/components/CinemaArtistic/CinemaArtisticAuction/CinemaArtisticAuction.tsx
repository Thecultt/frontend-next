import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchCinemaArtisticAuctionItems } from '@/redux/actions/cinema_artistic';
import { useTypedSelector } from '@/hooks/useTypedSelector';

import { CinemaArtisticAuctionItem } from '@/components/';

const CinemaArtisticAuction: React.FC = () => {
    const dispatch = useDispatch();

    const { items } = useTypedSelector(({ cinema_artistic }) => cinema_artistic);

    React.useEffect(() => {
        dispatch(fetchCinemaArtisticAuctionItems() as any);
    }, []);

    return (
        <section className="cinema-artistic-auction">
            <div className="container">
                <div className="cinema-artistic-auction-wrapper">
                    <div className="cinema-artistic-auction-text">
                        <h2 className="cinema-artistic-auction-text__title">АУКЦИОН</h2>

                        <p className="cinema-artistic-auction-text__subtitle">
                            15% средств, вырученных на онлайн-аукционе, будут перечислены в культурно-благотворительный
                            фонд Action!
                        </p>

                        <p className="cinema-artistic-auction-text__description">
                            Фонд Action! Светланы Бондарчук и&nbsp;Евгении Поповой объединяет известных российских
                            кинематографистов и&nbsp;меценатов для помощи детям и&nbsp;взрослым, попавшим в&nbsp;сложную
                            ситуацию. При участии фонда уже более 10&nbsp;лет проводятся благотворительные киновечера:
                            для них режиссеры бесплатно снимают короткометражки с&nbsp;участием признанных звезд кино.
                            Все вырученные средства поступают в&nbsp;благотворительные организации.
                        </p>
                    </div>

                    <div className="cinema-artistic-auction-products">
                        {items.map((item, index) => (
                            <CinemaArtisticAuctionItem {...item} key={`cinema-artistic-auction-products-${index}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CinemaArtisticAuction;
