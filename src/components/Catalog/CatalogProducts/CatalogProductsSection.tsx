import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

import { useTypedSelector } from '@/hooks/useTypedSelector';
import { ProductCard } from '@/components';
import { APP_ROUTE } from '@/constants/routes';

interface CatalogProductsSectionProps {
    title: string;
}

const CatalogProductsSection: React.FC<CatalogProductsSectionProps> = ({ title }) => {
    const { items, itemByArticleSimilar } = useTypedSelector(({ products }) => products);

    const SliderRef = React.useRef<any>(null);

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
            <Link href={APP_ROUTE.catalog} className="catalog-product-section__title">
                {title}
            </Link>

            <div className="catalog-product-section-slider-wrapper">
                <button className="catalog-product-section-slider-arrow prev" onClick={onClickPrev}>
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

                <Slider {...settings} className="catalog-product-section-slider" ref={SliderRef}>
                    {itemByArticleSimilar.length
                        ? itemByArticleSimilar.map((item) =>
                              item.availability && !item.is_trial && item.images.length && item.price ? (
                                  <ProductCard
                                      key={item.id}
                                      productData={item}
                                      className="catalog-slider-product-block"
                                      singleImage
                                  />
                              ) : null,
                          )
                        : items.map((item) =>
                              item.availability && !item.is_trial && item.images.length && item.price ? (
                                  <ProductCard
                                      key={item.id}
                                      productData={item}
                                      className="catalog-slider-product-block"
                                      singleImage
                                  />
                              ) : null,
                          )}
                </Slider>

                <button className="catalog-product-section-slider-arrow next" onClick={onClickNext}>
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

export default CatalogProductsSection;
