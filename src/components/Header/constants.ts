import { CATEGORY_NAMES, CATEGORY_SLUGS } from '@/constants/catalog';

import HeaderHoverImageBag from '@/assets/images/header/header-image-hover-menu-bag.jpg';
import HeaderHoverImageAccessories from '@/assets/images/header/header-image-hover-menu-accessories.jpg';
import HeaderHoverImageShoes from '@/assets/images/header/header-image-hover-menu-shoes.jpg';
import HeaderHoverImageDecoration from '@/assets/images/header/header-image-hover-menu-decoration.jpg';

export interface IHeaderHoverMenuCategory {
    title: string;
    slug: string;
    types: string[];
    brands: string[];
    fullTextView: string;
    image: string;
    imageClass: string;
}

export const HEADER_MENU_CATEGORIES: IHeaderHoverMenuCategory[] = [
    {
        title: CATEGORY_NAMES.bags,
        slug: CATEGORY_SLUGS.bags,
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
        fullTextView: 'Все сумки',
        image: HeaderHoverImageBag.src,
        imageClass: 'header-hover-menu-bags-image',
    },
    {
        title: CATEGORY_NAMES.accessories,
        slug: CATEGORY_SLUGS.accessories,
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
        fullTextView: 'Все аксессуары',
        image: HeaderHoverImageAccessories.src,
        imageClass: 'header-hover-menu-accessories-image',
    },
    {
        title: CATEGORY_NAMES.shoes,
        slug: CATEGORY_SLUGS.shoes,
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
        fullTextView: 'Вся обувь',
        image: HeaderHoverImageShoes.src,
        imageClass: 'header-hover-menu-shoes-image',
    },
    {
        title: CATEGORY_NAMES.decorations,
        slug: CATEGORY_SLUGS.decorations,
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
        fullTextView: 'Все украшения',
        image: HeaderHoverImageDecoration.src,
        imageClass: 'header-hover-menu-decoration-image',
    },
];
