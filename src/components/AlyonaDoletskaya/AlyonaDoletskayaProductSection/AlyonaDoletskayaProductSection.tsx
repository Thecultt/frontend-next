import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

import $api from '@/http';
import { ProductCard } from '@/components';
import { Product } from '@/models/IProduct';
import { APP_ROUTE } from '@/constants/routes';

const AlyonaDoletskayaProductSection: React.FC = () => {
    const [items, setItems] = React.useState<Product[]>([]);

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
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    React.useEffect(() => {
        $api.get<{ items: Product[] }>(
            `/catalog/?category=Сумки&category=Аксессуары&category=Обувь&category=Одежда&availability=1&availability=-1&selections=1`,
        ).then(({ data }) => {
            setItems(data.items);
        });
    }, []);

    const onClickPrev = () => {
        SliderRef.current?.slickPrev();
    };

    const onClickNext = () => {
        SliderRef.current?.slickNext();
    };

    return (
        <div className="container">
            <div className="catalog-product-section">
                <Link href={APP_ROUTE.catalog} className="catalog-product-section__title">
                    Архив Алёны Долецкой
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

                    {items.length > 0 && (
                        <Slider {...settings} className="catalog-product-section-slider" ref={SliderRef}>
                            {items.map((item) =>
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
                    )}

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

                <div className="alyona-doletskaya-slider-btn">
                    <Link
                        href="/catalog?categories=Сумки&categories=Обувь&categories=Аксессуары&availability=Доступно&availability=На+примерке&selections=1&utm_source=website&utm_medium=landing&utm_campaign=selection_Doletskaya"
                        className="btn alyona-doletskaya-slider-btn__btn"
                    >
                        Смотреть весь архив
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AlyonaDoletskayaProductSection;
