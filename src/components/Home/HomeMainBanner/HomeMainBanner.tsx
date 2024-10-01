'use client';

import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { useMediaQuery } from 'usehooks-ts';

import { getClassNames } from '@/functions/getClassNames';
import { MEDIA_SIZES } from '@/constants/styles';

import { MAIN_BANNER_SLIDES } from './constants';

const HomeMainBanner: React.FC = () => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.mobile})`, { initializeWithValue: false });
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

    const slideCount = MAIN_BANNER_SLIDES.length;

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
                        {MAIN_BANNER_SLIDES.map((slide, index) => (
                            <div key={index} className="home-main-banner-slider-item-wrapper">
                                <div
                                    className="home-main-banner-slider-item"
                                    style={{
                                        backgroundImage: `url("${isMobile ? slide.image.mobile || slide.image.desktop : slide.image.desktop}")`,
                                    }}
                                >
                                    <div className="home-main-banner-slider-item-text">
                                        <h2 className="home-main-banner-slider-item-text__title">{slide.title}</h2>

                                        <p className="home-main-banner-slider-item-text__description">
                                            {isMobile && slide.descriptionMobile
                                                ? slide.descriptionMobile
                                                : slide.description}
                                        </p>

                                        <Link
                                            href={slide.link.href}
                                            className={getClassNames('home-main-banner-slider-item-text__btn', {
                                                white: !!slide.link.isWhite && !isMobile,
                                                color: !slide.link.isWhite,
                                            })}
                                        >
                                            {slide.link.title}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
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
