import React from 'react';

import { getCatalogFiltersUrl } from '@/functions/getCatalogFiltersUrl';
import { SORT } from '@/constants/catalog';

// import homeMainBannerImageNew from '@/assets/images/home/home-main-banner-new.jpg';
import homeMainBannerImageConcierge from '@/assets/images/home/home-main-banner-concierge.jpg';
import homeMainBannerImageConciergeMobile from '@/assets/images/home/home-main-banner-concierge-mobile.jpg';
// import homeMainBannerImageBoutique from '@/assets/images/home/home-main-banner-boutique.jpg';
import homeMainBannerImageVip from '@/assets/images/home/home-main-banner-vip.jpg';
import homeMainBannerImagePopular from '@/assets/images/home/home-main-banner-popular.jpg';
import homeMainBannerImagePopularMedia from '@/assets/images/home/home-main-banner-popular-media.jpg';

interface IMainBannerSlide {
    title: string;
    description: React.ReactNode;
    descriptionMobile?: React.ReactNode;
    image: {
        desktop: string;
        mobile?: string;
    };
    link: {
        title: string;
        href: string;
    };
}

export const MAIN_BANNER_SLIDES: IMainBannerSlide[] = [
    // {
    //     title: 'Главные новинки недели',
    //     description: (
    //         <>
    //             Новые лоты Hermes, Chanel, Celine,
    //             <br />
    //             Louis Vuitton, Prada и Saint Laurent
    //         </>
    //     ),
    //     image: {
    //         desktop: homeMainBannerImageNew.src,
    //     },
    //     link: {
    //         title: 'Смотреть',
    //         href: getCatalogFiltersUrl({
    //             categories: ['Сумки', 'Аксессуары', 'Обувь', 'Украшения'],
    //             availability: ['Доступно', 'На примерке', 'Нет в наличии'],
    //             price_drop: false,
    //             boutique: false,
    //             page: 1,
    //             sort: SORT.a,
    //         }),
    //     },
    // },
    {
        title: 'Популярное',
        description: (
            <>
                Горячие лоты в&nbsp;единственном экземпляре <br /> и&nbsp;с&nbsp;максимумом сердечек
            </>
        ),
        image: {
            desktop: homeMainBannerImagePopular.src,
            mobile: homeMainBannerImagePopularMedia.src,
        },
        link: {
            title: 'Смотреть',
            href: getCatalogFiltersUrl({
                boutique: false,
                categories: ['Сумки', 'Аксессуары', 'Обувь', 'Украшения'],
                availability: ['Доступно', 'На примерке', 'Нет в наличии'],
                price_drop: false,
                page: 1,
                sort: SORT.popular,
            }),
        },
    },
    {
        title: 'Консьерж-сервис',
        description:
            'Доставим для вас из Европы украшения Cartier, Bvlgari, Messika, Van Cleef & Arpels и часы главных часовых брендов.',
        image: {
            desktop: homeMainBannerImageConcierge.src,
            mobile: homeMainBannerImageConciergeMobile.src,
        },
        link: {
            title: 'Узнать больше',
            href: '/concierge',
        },
    },
    // {
    // 	title: 'Коллекция THE CULTT из бутика',
    // 	description:
    // 		'Лоты, доставленные напрямую из бутика-партнера или от частного байера — в таком состоянии, в каком вы бы купили их в магазине бренда.',
    // 	image: {
    // 		desktop: homeMainBannerImageBoutique.src,
    // 	},
    // 	link: {
    // 		title: 'Смотреть подборку',
    // 		href: getCatalogFiltersUrl({
    // 			categories: ['Сумки', 'Аксессуары', 'Обувь', 'Украшения'],
    // 			availability: ['Доступно', 'На примерке', 'Нет в наличии'],
    // 			price_drop: false,
    // 			boutique: true,
    // 			page: 1,
    // 			sort: SORT.a,
    // 		}),
    // 	},
    // },
    {
        title: 'Разгрузите гардероб с VIP-сервисом ТНЕ CULTT',
        description: (
            <>
                Нужно продать 7&nbsp;и&nbsp;более лотов? Закажите бесплатный VIP-сервис. <br />
                Вам не&nbsp;нужно заполнять заявки, фотографировать вещи, <br />
                искать покупателей&nbsp;&mdash; все это мы&nbsp;берем на&nbsp;себя.
            </>
        ),
        descriptionMobile: (
            <>
                Нужно продать 7&nbsp;и&nbsp;более лотов? Закажите <br />
                бесплатный VIP-сервис. Вам не&nbsp;нужно <br />
                заполнять заявки, фотографировать вещи, <br />
                искать покупателей&nbsp;&mdash; все это мы&nbsp;берем на&nbsp;себя.
            </>
        ),
        image: {
            desktop: homeMainBannerImageVip.src,
        },
        link: {
            title: 'Узнать больше',
            href: '/vipservice',
        },
    },
];
