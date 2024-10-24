'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { HomeBrandsItem } from '@/components';
import { MEDIA_SIZES_NUMBERS } from '@/constants/styles';
import { APP_ROUTE } from '@/constants/routes';
import { ChevronRightIcon } from '@/assets/icons';

import { HOME_BRANDS } from './constants';

import 'swiper/css';

import './styles.sass';

const HomeBrands: React.FC = () => {
    const sliderRef = React.useRef<SwiperRef>(null);

    return (
        <div className="home-brands">
            <Link href={APP_ROUTE.brands} className="home-brands__title">
                Бренды
                <ChevronRightIcon width={18} height={18} />
            </Link>

            <div className="home-brands-slider-wrapper">
                <Swiper
                    className="home-brands-slider"
                    ref={sliderRef}
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
                    {HOME_BRANDS.map((brand, index) => (
                        <SwiperSlide key={index}>
                            <HomeBrandsItem {...brand} key={`home-brands-slider-item-${index}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HomeBrands;
