'use client';

import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
    images: string[];
}

const CinemaAuctionProductCarouselNavigation = () => {
    const swiper = useSwiper();

    return (
        <>
            <button
                type="button"
                className="cinema-auction-product-item-carousel__arrow cinema-auction-product-item-carousel__arrow--prev"
                onClick={() => swiper.slidePrev()}
            >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 13L1 7L7 1"
                        stroke="#070707"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <button
                type="button"
                className="cinema-auction-product-item-carousel__arrow cinema-auction-product-item-carousel__arrow--next"
                onClick={() => swiper.slideNext()}
            >
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1 13L7 7L1 1"
                        stroke="#070707"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </>
    );
};

export const CinemaAuctionProductCarousel: React.FC<Props> = ({ images }) => (
    <div className="cinema-auction-product-item-carousel">
        <div className="cinema-auction-product-item-carousel__wrapper">
            {images.length > 0 && (
                <Swiper
                    slidesPerView={1}
                    className="cinema-auction-product-item-carousel__slider"
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    loop
                >
                    {images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="cinema-auction-product-item-carousel__slide"
                                style={{
                                    backgroundImage: `url('${item}')`,
                                }}
                            />
                        </SwiperSlide>
                    ))}

                    {images.length > 1 && <CinemaAuctionProductCarouselNavigation />}
                </Swiper>
            )}
        </div>
    </div>
);
