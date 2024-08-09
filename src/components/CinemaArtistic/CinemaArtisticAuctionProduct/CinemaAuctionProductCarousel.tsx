'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
    images: string[];
}

export const CinemaAuctionProductCarousel: React.FC<Props> = ({ images }) => (
    <div className="cinema-auction-product-item-carousel">
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
            </Swiper>
        )}
    </div>
);
