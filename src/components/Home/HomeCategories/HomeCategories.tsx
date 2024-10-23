'use client';

import React from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { HomeCategoriesItem } from '@/components';
import { MEDIA_SIZES_NUMBERS } from '@/constants/styles';

import { HOME_CATEGORIES } from './constants';

import 'swiper/css';

import './styles.sass';

const HomeCategories: React.FC = () => {
    const sliderRef = React.useRef<SwiperRef>(null);

    const onClickPrev = () => {
        sliderRef.current?.swiper.slidePrev();
    };

    const onClickNext = () => {
        sliderRef.current?.swiper.slideNext();
    };

    return (
        <div className="home-categories">
            <h3 className="home-categories__title">Категории</h3>

            <Swiper
                ref={sliderRef}
                className="home-categories-slider"
                slidesPerView={4}
                spaceBetween={8}
                breakpoints={{
                    [MEDIA_SIZES_NUMBERS.tablet]: {
                        slidesPerView: 5,
                        spaceBetween: 16,
                    },
                }}
                loop
            >
                {HOME_CATEGORIES.map((category, index) => (
                    <SwiperSlide key={index}>
                        <HomeCategoriesItem {...category} key={`home-categories-slider-item-${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>

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
