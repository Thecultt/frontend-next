'use client';

import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';

import { getClassNames } from '@/functions/getClassNames';
import { APP_ROUTE } from '@/constants/routes';
import { MEDIA_SIZES } from '@/constants/styles';

import 'slick-carousel/slick/slick.css';

interface Props {
    article: string;
    slides: string[];
}

export const ProductCardImages: React.FC<Props> = React.memo(({ slides, article }) => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    const sliderRef = React.useRef<any>(null);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handlePrevClick = () => {
        if (isMobile) {
            sliderRef.current?.slickPrev();
            return;
        }

        setCurrentIndex((current) => {
            if (current - 1 < 0) {
                return slides.length - 1;
            }

            return current - 1;
        });
    };

    const handleNextClick = () => {
        if (isMobile) {
            sliderRef.current?.slickNext();
            return;
        }

        setCurrentIndex((current) => {
            if (current + 1 > slides.length - 1) {
                return 0;
            }

            return current + 1;
        });
    };

    const handleDotClick = (index: number) => () => {
        if (isMobile) {
            sliderRef.current?.slickGoTo(index);
            return;
        }

        setCurrentIndex(index);
    };

    return (
        <>
            <button
                type="button"
                className="product-card-cover__arrow product-card-cover__arrow--prev"
                onClick={handlePrevClick}
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
                className="product-card-cover__arrow product-card-cover__arrow--next"
                onClick={handleNextClick}
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

            <div className="product-card-cover__carousel-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={getClassNames('product-card-cover__carousel-dot', {
                            'product-card-cover__carousel-dot--active': index === currentIndex,
                        })}
                        onClick={handleDotClick(index)}
                    />
                ))}
            </div>

            {isMobile ? (
                <Slider
                    beforeChange={(_cur, nextSlide) => setCurrentIndex(nextSlide)}
                    slidesToShow={1}
                    slidesToScroll={1}
                    arrows={false}
                    className="product-card-cover__carousel"
                    lazyLoad="progressive"
                    ref={sliderRef}
                    infinite
                >
                    {slides.map((image, index) => (
                        <Link key={index} href={`${APP_ROUTE.product}/${article}`} className="product-card-cover__link">
                            <div
                                style={{
                                    backgroundImage: `url("${image}")`,
                                }}
                                className="product-card-cover__image"
                            />
                        </Link>
                    ))}
                </Slider>
            ) : (
                slides.map((slide, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `url("${slide}")`,
                        }}
                        className={getClassNames('product-card-cover__image product-card-cover__image--desktop', {
                            'product-card-cover__image--active': index === currentIndex,
                        })}
                    />
                ))
            )}
        </>
    );
});
