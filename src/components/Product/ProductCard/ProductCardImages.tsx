'use client';

import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

import { getClassNames } from '@/functions/getClassNames';
import { APP_ROUTE } from '@/constants/routes';
import { BaseImage } from '@/components';

import 'slick-carousel/slick/slick.css';

interface Props {
    article: string;
    slides: string[];
}

export const ProductCardImages: React.FC<Props> = React.memo(({ slides, article }) => {
    const sliderRef = React.useRef<any>(null);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handlePrevClick = () => {
        sliderRef.current?.slickPrev();
    };

    const handleNextClick = () => {
        sliderRef.current?.slickNext();
    };

    const handleDotClick = (index: number) => () => {
        sliderRef.current?.slickGoTo(index);
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
                {Array(slides.length)
                    .fill(0)
                    .map((_, index) => (
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
        </>
    );
});
