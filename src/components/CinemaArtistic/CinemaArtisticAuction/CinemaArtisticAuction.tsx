import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchCinemaArtisticAuctionItems } from '@/redux/actions/cinema_artistic';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CinemaArtisticAuctionItem } from '@/components';

const PropertyItem: React.FC<React.PropsWithChildren> = ({ children }) => (
    <div className="cinema-artistic-auction-description-properties-item">
        <i className="cinema-artistic-auction-description-properties-item__icon">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 13.35C8.58579 13.35 8.25 13.0142 8.25 12.6V9C8.25 8.58579 8.58579 8.25 9 8.25C9.41421 8.25 9.75 8.58579 9.75 9V12.6C9.75 13.0142 9.41421 13.35 9 13.35ZM8.25 5.4C8.25 4.98579 8.58579 4.65 9 4.65H9.009C9.42321 4.65 9.759 4.98579 9.759 5.4C9.759 5.81421 9.42321 6.15 9.009 6.15H9C8.58579 6.15 8.25 5.81421 8.25 5.4ZM9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5ZM18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9Z"
                    fill="#070707"
                />
            </svg>
        </i>
        <p className="cinema-artistic-auction-description-properties-item__text">{children}</p>
    </div>
);

const CinemaArtisticAuction: React.FC = () => {
    const dispatch = useDispatch();

    const { items } = useTypedSelector(({ cinema_artistic }) => cinema_artistic);

    const topItems = items.slice(0, 8);
    const bottomItems = items.slice(8, items.length);

    React.useEffect(() => {
        dispatch(fetchCinemaArtisticAuctionItems() as any);
    }, []);

    return (
        <section className="cinema-artistic-auction" id="auction">
            <div className="container">
                <div className="cinema-artistic-auction-text">
                    <h2 className="cinema-artistic-auction-text__title">АУКЦИОН</h2>

                    <p className="cinema-artistic-auction-text__subtitle">
                        15% средств, вырученных на онлайн-аукционе, будут перечислены в культурно-благотворительный фонд
                        Action!
                    </p>

                    <p className="cinema-artistic-auction-text__description">
                        Фонд Action! Светланы Бондарчук и&nbsp;Евгении Поповой объединяет известных российских
                        кинематографистов и&nbsp;меценатов для помощи детям и&nbsp;взрослым, попавшим в&nbsp;сложную
                        ситуацию. При участии фонда уже более 10&nbsp;лет проводятся благотворительные киновечера: для
                        них режиссеры бесплатно снимают короткометражки с&nbsp;участием признанных звезд кино. Все
                        вырученные средства поступают в&nbsp;благотворительные организации.
                    </p>
                </div>

                {topItems.length > 0 && (
                    <div className="cinema-artistic-auction-products">
                        {topItems.map((item, index) => (
                            <CinemaArtisticAuctionItem {...item} key={`cinema-artistic-auction-products-${index}`} />
                        ))}
                    </div>
                )}

                <div className="cinema-artistic-auction-description">
                    <div className="cinema-artistic-auction-description-text">
                        <h3 className="cinema-artistic-auction-description-text__title">Как это работает?</h3>
                        <p className="cinema-artistic-auction-description-text__description">
                            В аукционе участвуют лоты из инсталляции «Как в культовом кино». Также кураторы The Cultt
                            отобрали для аукциона несколько знаковых сумок, которые почти полностью повторяют сумки из
                            кино.
                            <br />
                            <br />
                            <strong>
                                Аукцион начнется в 10:00 13 августа. <br />
                                Ставки принимаются до 19:00 27 августа.
                            </strong>
                        </p>
                    </div>
                    <div className="cinema-artistic-auction-description-properties">
                        <div className="cinema-artistic-auction-description-properties__column">
                            <PropertyItem>
                                Чтобы участвовать, сделайте ставку на понравившийся лот —{' '}
                                <strong>не менее 5&nbsp;000&nbsp;₽</strong>
                            </PropertyItem>
                            <PropertyItem>Цена лота на сайте меняется в зависимости от последней ставки.</PropertyItem>
                            <PropertyItem>
                                Вы можете сделать сколько угодно ставок с шагом{' '}
                                <strong>не менее 5&nbsp;000&nbsp;₽</strong>
                            </PropertyItem>
                            <PropertyItem>
                                По завершении аукциона лот будет продан тому участнику, кто сделал последнюю ставку.
                            </PropertyItem>
                        </div>
                        <div className="cinema-artistic-auction-description-properties__column">
                            <PropertyItem>
                                Купленный на аукционе лот <strong>нельзя вернуть</strong>.
                            </PropertyItem>
                            <PropertyItem>
                                <strong>15%</strong> средств, вырученных на онлайн-аукционе, будут перечислены в
                                культурно-благотворительный фонд Action!
                            </PropertyItem>
                            <PropertyItem>
                                <strong>В течение 10 дней</strong> после аукциона THE CULTT делает выплаты продавцу лота
                                и фонду Action!
                            </PropertyItem>
                        </div>
                    </div>
                </div>

                {bottomItems.length > 0 && (
                    <div className="cinema-artistic-auction-products">
                        {bottomItems.map((item, index) => (
                            <CinemaArtisticAuctionItem {...item} key={`cinema-artistic-auction-products-${index}`} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default CinemaArtisticAuction;
