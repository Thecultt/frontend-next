import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { ProductCard } from '@/components';
import { APP_ROUTE } from '@/constants/routes';
import { MEDIA_SIZES } from '@/constants/styles';

interface CatalogProductsSectionProps {
    title: string;
    titleLink?: string;
}

const CatalogProductsSection: React.FC<CatalogProductsSectionProps> = ({ title, titleLink }) => {
    const SliderRef = React.useRef<any>(null);
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    const { items, itemByArticleSimilar } = useTypedSelector(({ products }) => products);

    const slides = (itemByArticleSimilar.length ? itemByArticleSimilar : items).filter(
        (item) => !!item.availability && !item.is_trial && !!item.images.length && !!item.price,
    );

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
        <div className="catalog-product-section">
            <Link href={titleLink || APP_ROUTE.catalog} className="catalog-product-section__title">
                {title}
            </Link>

            {!!slides.length && (
                <div className="catalog-product-section-slider-wrapper">
                    {isMobile ? (
                        <Swiper
                            slidesPerView="auto"
                            spaceBetween={8}
                            slidesOffsetAfter={16}
                            slidesOffsetBefore={16}
                            className="catalog-product-section-mobile-slider"
                        >
                            {slides.map((item) => (
                                <SwiperSlide key={item.id} className="catalog-product-section-mobile-slider__slide">
                                    <ProductCard
                                        key={item.id}
                                        productData={item}
                                        className="catalog-slider-product-block"
                                        singleImage
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <>
                            <button className="catalog-product-section-slider-arrow prev" onClick={onClickPrev}>
                                <svg
                                    width="40"
                                    height="41"
                                    viewBox="0 0 40 41"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect y="0.476562" width="40" height="40" rx="20" fill="white" />
                                    <path
                                        d="M24 12.4766L16 20.4766L24 28.4766"
                                        stroke="#202020"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            <Slider {...settings} className="catalog-product-section-slider" ref={SliderRef}>
                                {slides.map((item) => (
                                    <ProductCard
                                        key={item.id}
                                        productData={item}
                                        className="catalog-slider-product-block"
                                        singleImage
                                    />
                                ))}
                            </Slider>

                            <button className="catalog-product-section-slider-arrow next" onClick={onClickNext}>
                                <svg
                                    width="40"
                                    height="41"
                                    viewBox="0 0 40 41"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
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
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default CatalogProductsSection;
