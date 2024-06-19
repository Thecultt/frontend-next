import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

import { getClassNames } from '@/functions/getClassNames';
import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { CATEGORIES, SORT } from '@/constants/catalog';

import HomeMainBannerImageNew from '@/assets/images/home/home-main-banner-new.jpg';
import HomeMainBannerImageBoutique from '@/assets/images/home/home-main-banner-boutique.jpg';
import HomeMainBannerImageConcierge from '@/assets/images/home/home-main-banner-concierge.jpg';

const HomeMainBanner: React.FC = () => {
    const SliderRef = React.useRef<any>(null);

    const [currentSlide, setCurrentSlide] = React.useState<number>(0);

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,

        beforeChange: (index: number) => {
            setCurrentSlide(index);
        },
        afterChange: (index: number) => {
            setCurrentSlide(index);
        },
    };

    const onClickPrev = () => {
        SliderRef.current.slickPrev();
    };

    const onClickNext = () => {
        SliderRef.current.slickNext();
    };

    const slideCount = SliderRef?.current?.innerSlider?.state?.slideCount;

    const onClickGoToSlide = (index: number) => {
        SliderRef.current.slickGoTo(index);
        setCurrentSlide(index);
    };

    return (
        <div className="home-main-banner">
            <div className="container">
                <div className="home-main-banner-wrapper">
                    <button className="home-main-banner-arrow prev" onClick={onClickPrev}>
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.476562" width="40" height="40" rx="20" fill="white" />
                            <path
                                d="M24 12.4766L16 20.4766L24 28.4766"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <Slider {...settings} className="home-main-banner-slider" ref={SliderRef}>
                        <div className="home-main-banner-slider-item-wrapper">
                            <div
                                className="home-main-banner-slider-item"
                                style={{
                                    backgroundImage: `url("${HomeMainBannerImageNew.src}")`,
                                }}
                            >
                                <div className="home-main-banner-slider-item-text">
                                    <h2 className="home-main-banner-slider-item-text__title">Главные новинки недели</h2>

                                    <p className="home-main-banner-slider-item-text__description">
                                        Новые лоты Hermes, Chanel, Celine,
                                        <br />
                                        Louis Vuitton, Prada и Saint Laurent
                                    </p>

                                    <Link
                                        href={getCatalogFiltersUrl({
                                            boutique: false,
                                            categories: CATEGORIES,
                                            availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                                            price_drop: false,
                                            page: 1,
                                            sort: SORT.a,
                                        })}
                                        className="home-main-banner-slider-item-text__btn color"
                                    >
                                        Смотреть
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="home-main-banner-slider-item-wrapper">
                            <div
                                className="home-main-banner-slider-item"
                                style={{
                                    backgroundImage: `url("${HomeMainBannerImageBoutique.src}")`,
                                }}
                            >
                                <div className="home-main-banner-slider-item-text">
                                    <h2 className="home-main-banner-slider-item-text__title">
                                        Коллекция THE CULTT из бутика
                                    </h2>

                                    <p className="home-main-banner-slider-item-text__description">
                                        Лоты, доставленные напрямую из бутика-партнера или от частного байера — в таком
                                        состоянии, в каком вы бы купили их в магазине бренда.
                                    </p>

                                    <Link
                                        href={getCatalogFiltersUrl({
                                            boutique: true,
                                            categories: CATEGORIES,
                                            availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                                            price_drop: false,
                                            page: 1,
                                            sort: SORT.a,
                                        })}
                                        className="home-main-banner-slider-item-text__btn color"
                                    >
                                        Смотреть подборку
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="home-main-banner-slider-item-wrapper">
                            <div
                                className="home-main-banner-slider-item"
                                style={{
                                    backgroundImage: `url("${HomeMainBannerImageConcierge.src}")`,
                                }}
                            >
                                <div className="home-main-banner-slider-item-text">
                                    <h2 className="home-main-banner-slider-item-text__title">
                                        Разгрузите гардероб с VIP-сервисом ТНЕ CULTT
                                    </h2>

                                    <p className="home-main-banner-slider-item-text__description">
                                        Нужно продать 7 и более лотов? Закажите бесплатный VIP-сервис. Вам не нужно
                                        заполнять заявки, фотографировать вещи, искать покупателей - все это мы берем на
                                        себя.
                                    </p>

                                    <Link href="/vipservice" className="home-main-banner-slider-item-text__btn color">
                                        Узнать больше
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* <div className='home-main-banner-slider-item-wrapper'>
							<div className='home-main-banner-slider-item' style={{ backgroundImage: `url("${HomeMainBannerImage1}")` }}>
								<div className="home-main-banner-slider-item-text">
									<h2 className="home-main-banner-slider-item-text__title">
										Продавайте, покупайте, обменивайте <br /> сумки, обувь и аксессуары
									</h2>

									<p className="home-main-banner-slider-item-text__description">
										Станьте частью культуры нового потребления
									</p>

									<a href="/sell" className="home-main-banner-slider-item-text__btn">
										Продать
									</a>
								</div>
							</div>
						</div>

						<div className='home-main-banner-slider-item-wrapper'>
							<div className='home-main-banner-slider-item' style={{ backgroundImage: `url("${HomeMainBannerImage2}")` }}>
								<div className="home-main-banner-slider-item-text">
									<h2 className="home-main-banner-slider-item-text__title">
										Покупайте КУЛЬТовые лоты
									</h2>

									<p className="home-main-banner-slider-item-text__description">
										Дарите им вторую жизнь
									</p>

									<a href="/catalog" className="home-main-banner-slider-item-text__btn">
										Перейти в каталог
									</a>
								</div>
							</div>
						</div>

						<div className='home-main-banner-slider-item-wrapper'>
							<div className='home-main-banner-slider-item' style={{ backgroundImage: `url("${HomeMainBannerImage3}")` }}>
								<div className="home-main-banner-slider-item-text">
									<h2 className="home-main-banner-slider-item-text__title">
										Будьте разной — меняйте сумки с THE CULTT
									</h2>

									<p className="home-main-banner-slider-item-text__description">
										Запускайте круговорот сумок и меняйте свой гардероб
									</p>

									<a href="/exchange" className="home-main-banner-slider-item-text__btn">
										Подробнее
									</a>
								</div>
							</div>
						</div> */}
                    </Slider>

                    <button className="home-main-banner-arrow next" onClick={onClickNext}>
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.476562" width="40" height="40" rx="20" fill="white" />
                            <path d="M16 28.4766L24 20.4766L16 12.4766" fill="white" />
                            <path
                                d="M16 28.4766L24 20.4766L16 12.4766"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <div className="home-main-banner-nav">
                        {Array(slideCount)
                            .fill(0)
                            .map((_, index) => (
                                <button
                                    className={getClassNames('home-main-banner-nav-btn', {
                                        active: currentSlide === index,
                                    })}
                                    key={`home-main-banner-nav-btn-${index}`}
                                    onClick={() => onClickGoToSlide(index)}
                                ></button>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMainBanner;
