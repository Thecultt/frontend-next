import React from 'react';

import { CATEGORY_NAMES, CATEGORY_SLUGS } from '@/constants/catalog';
import { BRAND_DICTIONARY } from '@/constants/brands';
import { BagIcon, DiamondIcon, RingIcon, ShoesIcon, WalletIcon } from '@/assets/icons';

import headerHoverImageBag from '@/assets/images/header/header-image-hover-menu-bag.jpg';
import headerHoverImageAccessories from '@/assets/images/header/header-image-hover-menu-accessories.jpg';
import headerHoverImageShoes from '@/assets/images/header/header-image-hover-menu-shoes.jpg';
import headerHoverImageDecoration from '@/assets/images/header/header-image-hover-menu-decoration.jpg';

interface IHeaderMenuCategoryBrand {
    title: string;
    slug: string;
}

interface IHeaderMenuCategory {
    title: string;
    slug: string;
    image: string;
    types: string[];
    brands: IHeaderMenuCategoryBrand[];
    fullText: string;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
}

export const HEADER_MENU_CATEGORIES: IHeaderMenuCategory[] = [
    {
        title: CATEGORY_NAMES.bags,
        slug: CATEGORY_SLUGS.bags,
        image: headerHoverImageBag.src,
        types: [
            'Дорожная сумка',
            'Клатч',
            'Поясная сумка',
            'Рюкзак',
            'Сумка кроссбоди',
            'Сумка на плечо',
            'Сумка с ручками',
        ],
        brands: [
            {
                title: BRAND_DICTIONARY.acneStudios.title,
                slug: BRAND_DICTIONARY.acneStudios.slug,
            },
            {
                title: BRAND_DICTIONARY.balenciaga.title,
                slug: BRAND_DICTIONARY.balenciaga.slug,
            },
            {
                title: BRAND_DICTIONARY.bottegaVeneta.title,
                slug: BRAND_DICTIONARY.bottegaVeneta.slug,
            },
            {
                title: BRAND_DICTIONARY.burberry.title,
                slug: BRAND_DICTIONARY.burberry.slug,
            },
            {
                title: BRAND_DICTIONARY.celine.title,
                slug: BRAND_DICTIONARY.celine.slug,
            },
            {
                title: BRAND_DICTIONARY.chanel.title,
                slug: BRAND_DICTIONARY.chanel.slug,
            },
            {
                title: BRAND_DICTIONARY.chloe.title,
                slug: BRAND_DICTIONARY.chloe.slug,
            },
            {
                title: BRAND_DICTIONARY.christianDior.title,
                slug: BRAND_DICTIONARY.christianDior.slug,
            },
            {
                title: BRAND_DICTIONARY.fendi.title,
                slug: BRAND_DICTIONARY.fendi.slug,
            },
            {
                title: BRAND_DICTIONARY.gucci.title,
                slug: BRAND_DICTIONARY.gucci.slug,
            },
            {
                title: BRAND_DICTIONARY.hermes.title,
                slug: BRAND_DICTIONARY.hermes.slug,
            },
            {
                title: BRAND_DICTIONARY.jilSander.title,
                slug: BRAND_DICTIONARY.jilSander.slug,
            },
            {
                title: BRAND_DICTIONARY.loewe.title,
                slug: BRAND_DICTIONARY.loewe.slug,
            },
            {
                title: BRAND_DICTIONARY.louisVuitton.title,
                slug: BRAND_DICTIONARY.louisVuitton.slug,
            },
            {
                title: BRAND_DICTIONARY.prada.title,
                slug: BRAND_DICTIONARY.prada.slug,
            },
            {
                title: BRAND_DICTIONARY.saintLaurent.title,
                slug: BRAND_DICTIONARY.saintLaurent.slug,
            },
            {
                title: BRAND_DICTIONARY.wandler.title,
                slug: BRAND_DICTIONARY.wandler.slug,
            },
        ],
        fullText: 'Все сумки',
        icon: BagIcon,
    },
    {
        title: CATEGORY_NAMES.shoes,
        slug: CATEGORY_SLUGS.shoes,
        image: headerHoverImageShoes.src,
        types: [
            'Балетки',
            'Ботильоны',
            'Ботинки',
            'Босоножки',
            'Кеды и кроссовки',
            'Лоферы',
            'Мюли',
            'Сандали',
            'Сапоги',
            'Туфли',
        ],
        brands: [
            {
                title: BRAND_DICTIONARY.acneStudios.title,
                slug: BRAND_DICTIONARY.acneStudios.slug,
            },
            {
                title: BRAND_DICTIONARY.alaia.title,
                slug: BRAND_DICTIONARY.alaia.slug,
            },
            {
                title: BRAND_DICTIONARY.alexanderWang.title,
                slug: BRAND_DICTIONARY.alexanderWang.slug,
            },
            {
                title: BRAND_DICTIONARY.bottegaVeneta.title,
                slug: BRAND_DICTIONARY.bottegaVeneta.slug,
            },
            {
                title: BRAND_DICTIONARY.celine.title,
                slug: BRAND_DICTIONARY.celine.slug,
            },
            {
                title: BRAND_DICTIONARY.chanel.title,
                slug: BRAND_DICTIONARY.chanel.slug,
            },
            {
                title: BRAND_DICTIONARY.chloe.title,
                slug: BRAND_DICTIONARY.chloe.slug,
            },
            {
                title: BRAND_DICTIONARY.ganni.title,
                slug: BRAND_DICTIONARY.ganni.slug,
            },
            {
                title: BRAND_DICTIONARY.giaBorghini.title,
                slug: BRAND_DICTIONARY.giaBorghini.slug,
            },
            {
                title: BRAND_DICTIONARY.hereu.title,
                slug: BRAND_DICTIONARY.hereu.slug,
            },
            {
                title: BRAND_DICTIONARY.hermes.title,
                slug: BRAND_DICTIONARY.hermes.slug,
            },
            {
                title: BRAND_DICTIONARY.isabelMarant.title,
                slug: BRAND_DICTIONARY.isabelMarant.slug,
            },
            {
                title: BRAND_DICTIONARY.jwAnderson.title,
                slug: BRAND_DICTIONARY.jwAnderson.slug,
            },
            {
                title: BRAND_DICTIONARY.machMach.title,
                slug: BRAND_DICTIONARY.machMach.slug,
            },
            {
                title: BRAND_DICTIONARY.maisonMargiela.title,
                slug: BRAND_DICTIONARY.maisonMargiela.slug,
            },
            {
                title: BRAND_DICTIONARY.manoloBlahnik.title,
                slug: BRAND_DICTIONARY.manoloBlahnik.slug,
            },
            {
                title: BRAND_DICTIONARY.proenzaSchouler.title,
                slug: BRAND_DICTIONARY.proenzaSchouler.slug,
            },
        ],
        fullText: 'Вся обувь',
        icon: ShoesIcon,
    },
    {
        title: CATEGORY_NAMES.accessories,
        slug: CATEGORY_SLUGS.accessories,
        image: headerHoverImageAccessories.src,
        types: [
            'Аксессуары для сумок',
            'Головные уборы',
            'Аксессуары для волос',
            'Кошельки',
            'Косметички',
            'Очки',
            'Платки и шарфы',
            'Ремни',
            'Обложки и футляры',
        ],
        brands: [
            {
                title: BRAND_DICTIONARY.balenciaga.title,
                slug: BRAND_DICTIONARY.balenciaga.slug,
            },
            {
                title: BRAND_DICTIONARY.bottegaVeneta.title,
                slug: BRAND_DICTIONARY.bottegaVeneta.slug,
            },
            {
                title: BRAND_DICTIONARY.brunelloCucinelli.title,
                slug: BRAND_DICTIONARY.brunelloCucinelli.slug,
            },
            {
                title: BRAND_DICTIONARY.loroPiana.title,
                slug: BRAND_DICTIONARY.loroPiana.slug,
            },
            {
                title: BRAND_DICTIONARY.celine.title,
                slug: BRAND_DICTIONARY.celine.slug,
            },
            {
                title: BRAND_DICTIONARY.chanel.title,
                slug: BRAND_DICTIONARY.chanel.slug,
            },
            {
                title: BRAND_DICTIONARY.christianDior.title,
                slug: BRAND_DICTIONARY.christianDior.slug,
            },
            {
                title: BRAND_DICTIONARY.fendi.title,
                slug: BRAND_DICTIONARY.fendi.slug,
            },
            {
                title: BRAND_DICTIONARY.gucci.title,
                slug: BRAND_DICTIONARY.gucci.slug,
            },
            {
                title: BRAND_DICTIONARY.hermes.title,
                slug: BRAND_DICTIONARY.hermes.slug,
            },
            {
                title: BRAND_DICTIONARY.jilSander.title,
                slug: BRAND_DICTIONARY.jilSander.slug,
            },
            {
                title: BRAND_DICTIONARY.louisVuitton.title,
                slug: BRAND_DICTIONARY.louisVuitton.slug,
            },
            {
                title: BRAND_DICTIONARY.marni.title,
                slug: BRAND_DICTIONARY.marni.slug,
            },
            {
                title: BRAND_DICTIONARY.miuMiu.title,
                slug: BRAND_DICTIONARY.miuMiu.slug,
            },
            {
                title: BRAND_DICTIONARY.prada.title,
                slug: BRAND_DICTIONARY.prada.slug,
            },
        ],
        fullText: 'Все аксессуары',
        icon: WalletIcon,
    },
    {
        title: CATEGORY_NAMES.decorations,
        slug: CATEGORY_SLUGS.decorations,
        image: headerHoverImageDecoration.src,
        types: ['Браслеты', 'Колье и подвески', 'Кольца', 'Часы', 'Броши'],
        brands: [
            {
                title: BRAND_DICTIONARY.balenciaga.title,
                slug: BRAND_DICTIONARY.balenciaga.slug,
            },
            {
                title: BRAND_DICTIONARY.bottegaVeneta.title,
                slug: BRAND_DICTIONARY.bottegaVeneta.slug,
            },
            {
                title: BRAND_DICTIONARY.bulgari.title,
                slug: BRAND_DICTIONARY.bulgari.slug,
            },
            {
                title: BRAND_DICTIONARY.cartier.title,
                slug: BRAND_DICTIONARY.cartier.slug,
            },
            {
                title: BRAND_DICTIONARY.celine.title,
                slug: BRAND_DICTIONARY.celine.slug,
            },
            {
                title: BRAND_DICTIONARY.chanel.title,
                slug: BRAND_DICTIONARY.chanel.slug,
            },
            {
                title: BRAND_DICTIONARY.christianDior.title,
                slug: BRAND_DICTIONARY.christianDior.slug,
            },
            {
                title: BRAND_DICTIONARY.gucci.title,
                slug: BRAND_DICTIONARY.gucci.slug,
            },
            {
                title: BRAND_DICTIONARY.hermes.title,
                slug: BRAND_DICTIONARY.hermes.slug,
            },
            {
                title: BRAND_DICTIONARY.jilSander.title,
                slug: BRAND_DICTIONARY.jilSander.slug,
            },
            {
                title: BRAND_DICTIONARY.louisVuitton.title,
                slug: BRAND_DICTIONARY.louisVuitton.slug,
            },
            {
                title: BRAND_DICTIONARY.miuMiu.title,
                slug: BRAND_DICTIONARY.miuMiu.slug,
            },
            {
                title: BRAND_DICTIONARY.prada.title,
                slug: BRAND_DICTIONARY.prada.slug,
            },
            {
                title: BRAND_DICTIONARY.tiffanyCo.title,
                slug: BRAND_DICTIONARY.tiffanyCo.slug,
            },
            {
                title: BRAND_DICTIONARY.vanCleefArpels.title,
                slug: BRAND_DICTIONARY.vanCleefArpels.slug,
            },
        ],
        fullText: 'Все украшения',
        icon: RingIcon,
    },
    // TODO jewelry on hold
    // {
    //     title: CATEGORY_NAMES.jewelry,
    //     slug: CATEGORY_SLUGS.jewelry,
    //     image: headerHoverImageDecoration.src,
    //     types: ['Браслеты', 'Колье и подвески', 'Кольца', 'Часы', 'Броши'],
    //     brands: [
    //         'Balenciaga',
    //         'Bottega Veneta',
    //         'Bulgari',
    //         'Cartier',
    //         'Celine',
    //         'Chanel',
    //         'Christian Dior',
    //         'Gucci',
    //         'Hermes',
    //         'Jil Sander',
    //         'Louis Vuitton',
    //         'Miu Miu',
    //         'Prada',
    //         'Tiffany & Co.',
    //         'Van Cleef & Arpels',
    //     ],
    //     fullText: 'Все ювелирные изделия',
    //     icon: DiamondIcon,
    // },
];

export const MAX_TYPES_COUNT = 11;

export const SEARCH_BRANDS = ['Сумка Louis Vuitton', 'Hermes Birkin', 'Сумка Gucci', 'Prada'];
