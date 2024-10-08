'use client';

import React from 'react';
import Slider from 'react-slick';

import { HomeCategoriesItem } from '@/components';
import { HOME_CATEGORIES } from './constants';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeCategories: React.FC = () => {
    const SliderRef = React.useRef<any>(null);

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    const onClickPrev = () => {
        SliderRef.current.slickPrev();
    };

    const onClickNext = () => {
        SliderRef.current.slickNext();
    };

    return (
        <div className="home-categories-wrapper">
            <h3 className="home-categories__title">Категории</h3>

            <button className="home-categories-arrow prev" onClick={onClickPrev}>
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

            <Slider {...settings} className="home-categories" ref={SliderRef}>
                {HOME_CATEGORIES.map((category, index) => (
                    <HomeCategoriesItem {...category} key={`home-categories-item-${index}`} />
                ))}
            </Slider>

            <button className="home-categories-arrow next" onClick={onClickNext}>
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
        </div>
    );
};

export default HomeCategories;
