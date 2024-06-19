import React from 'react';
import Slider from 'react-slick';

import { HomeCategoriesItem } from '@/components';

import HomeCategoriesBagImage from '@/assets/images/home/home-categories-bag.jpg';
import HomeCategoriesShoesImage from '@/assets/images/home/home-categories-shoes.jpg';
import HomeCategoriesDecorationImage from '@/assets/images/home/home-categories-decoration.jpg';
import HomeCategoriesClockImage from '@/assets/images/home/home-categories-clock.jpg';
import HomeCategoriesBeltImage from '@/assets/images/home/home-categories-belt.jpg';
import HomeCategoriesHandImage from '@/assets/images/home/home-categories-hand.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface CategoriesItem {
    image: string;
    title: string;
}

const HomeCategories: React.FC = () => {
    const SliderRef = React.useRef<any>(null);

    const categories: CategoriesItem[] = [
        {
            image: HomeCategoriesBagImage.src,
            title: 'Сумки',
        },
        {
            image: HomeCategoriesShoesImage.src,
            title: 'Обувь',
        },
        {
            image: HomeCategoriesDecorationImage.src,
            title: 'Украшения',
        },
        {
            image: HomeCategoriesClockImage.src,
            title: 'Часы',
        },
        {
            image: HomeCategoriesBeltImage.src,
            title: 'Ремни',
        },
        {
            image: HomeCategoriesHandImage.src,
            title: 'Платки и шарфы',
        },
    ];

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,

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

    const onClickPrev = () => {
        SliderRef.current.slickPrev();
    };

    const onClickNext = () => {
        SliderRef.current.slickNext();
    };

    return (
        <div className="home-categories-wrapper">
            <h3 className="home-categories__title">Категории</h3>

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

            <Slider {...settings} className="home-categories" ref={SliderRef}>
                {categories.map((category, index) => (
                    <HomeCategoriesItem {...category} key={`home-categories-item-${index}`} />
                ))}
            </Slider>

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
