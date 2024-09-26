import React from 'react';

import { CATEGORY_NAMES, CATEGORY_SLUGS } from '@/constants/catalog';
import { BagIcon, DiamondIcon, RingIcon, ShoesIcon, WalletIcon } from '@/assets/icons';

import headerHoverImageBag from '@/assets/images/header/header-image-hover-menu-bag.jpg';
import headerHoverImageAccessories from '@/assets/images/header/header-image-hover-menu-accessories.jpg';
import headerHoverImageShoes from '@/assets/images/header/header-image-hover-menu-shoes.jpg';
import headerHoverImageDecoration from '@/assets/images/header/header-image-hover-menu-decoration.jpg';

interface IHeaderMenuCategory {
    title: string;
    slug: string;
    image: string;
    types: string[];
    brands: string[];
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
            'Acne Studios',
            'Balenciaga',
            'Bottega Veneta',
            'Burberry',
            'Celine',
            'Chanel',
            'Chloe',
            'Christian Dior',
            'Fendi',
            'Gucci',
            'Hermes',
            'Jil Sander',
            'Loewe',
            'Louis Vuitton',
            'Prada',
            'Saint Laurent',
            'Wandler',
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
            'Acne Studios',
            'Alaia',
            'Alexander Wang',
            'Bottega Veneta',
            'Celine',
            'Chanel',
            'Chloe',
            'Ganni',
            'Gia Borghini',
            'Hereu',
            'Hermes',
            'Isabel Marant',
            'JW Anderson',
            'Mach & Mach',
            'Maison Margiela',
            'Manolo Blahnik',
            'Proenza Schouler',
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
            'Balenciaga',
            'Bottega Veneta',
            'Brunello Cucinelli',
            'Loro Piana',
            'Celine',
            'Chanel',
            'Christian Dior',
            'Fendi',
            'Gucci',
            'Hermes',
            'Jil Sander',
            'Louis Vuitton',
            'Marni',
            'Miu Miu',
            'Prada',
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
            'Balenciaga',
            'Bottega Veneta',
            'Bulgari',
            'Cartier',
            'Celine',
            'Chanel',
            'Christian Dior',
            'Gucci',
            'Hermes',
            'Jil Sander',
            'Louis Vuitton',
            'Miu Miu',
            'Prada',
            'Tiffany & Co.',
            'Van Cleef & Arpels',
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
