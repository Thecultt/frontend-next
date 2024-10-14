'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { ProductCard } from '@/components';
import { APP_ROUTE } from '@/constants/routes';
import { MEDIA_SIZES_NUMBERS } from '@/constants/styles';
import { Product } from '@/models/IProduct';

import './styles.sass';

interface Props {
    title: string;
    titleLink?: string;
    products: Product[];
}

export const CatalogProductsSection: React.FC<Props> = ({ title, titleLink, products }) => {
    const SliderRef = React.useRef<SwiperRef>(null);

    const handleClickPrev = () => {
        SliderRef.current?.swiper.slidePrev();
    };

    const handleClickNext = () => {
        SliderRef.current?.swiper.slideNext();
    };

    if (!products.length) {
        return null;
    }

    return (
        <div className="catalog-products-section">
            <Link href={titleLink || APP_ROUTE.catalog} className="catalog-products-section__title">
                {title}
            </Link>

            <div className="catalog-products-section__wrapper">
                <Swiper
                    ref={SliderRef}
                    className="catalog-products-section__slider"
                    slidesPerView="auto"
                    slidesPerGroup={1}
                    spaceBetween={8}
                    slidesOffsetAfter={16}
                    slidesOffsetBefore={16}
                    breakpoints={{
                        [MEDIA_SIZES_NUMBERS.tablet + 1]: {
                            slidesPerView: 5,
                            slidesPerGroup: 5,
                            slidesOffsetBefore: 0,
                            slidesOffsetAfter: 0,
                        },
                    }}
                    loopAddBlankSlides={false}
                    loop
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id} className="catalog-products-section__slider-slide">
                            <ProductCard
                                key={item.id}
                                productData={item}
                                className="catalog-products-section__slider-card"
                                singleImage
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    type="button"
                    className="catalog-products-section__slider-arrow catalog-products-section__slider-arrow--prev"
                    onClick={handleClickPrev}
                >
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

                <button
                    type="button"
                    className="catalog-products-section__slider-arrow catalog-products-section__slider-arrow--next"
                    onClick={handleClickNext}
                >
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
        </div>
    );
};
