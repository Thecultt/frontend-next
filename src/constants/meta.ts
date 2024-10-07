import { Metadata } from 'next/types';

import { CATEGORY_SLUGS } from './catalog';

export const MAIN_META = {
    title: 'THE CULTT - ресейл платформа культовых сумок и вещей',
    description:
        'THE CULTT - ресейл платформа брендовой одежды, сумок и аксессуаров, покупайте и продавайте 100% подлинные вещи от культовых брендов, доставка по всей России.',
} satisfies Metadata;

export const CATALOG_NEW_META = {
    title: 'Новинки брендовых вещей на ресейл платформе THE CULTT',
    description:
        'Новинки брендовых вещей на ресейл платформе THE CULTT, эксклюзивные предложения на люксовую одежду, обувь и аксессуары от ведущих мировых брендов, присоединяйтесь к сообществу ценителей моды!',
} satisfies Metadata;

export const CATALOG_POPULAR_META = {
    title: 'Популярные товары от ресейл платформы THE CULTT',
    description:
        'Популярные товары от ресейл платформы THE CULTT: самые востребованные бренды, проверенное качество и выгодные цены. найдите свою идеальную вещь среди бестселлеров люксовой моды!',
} satisfies Metadata;

export const CATALOG_SALE_META = {
    title: 'Скидки на брендовые оригинальные вещи на ресейл платформе THE CULTT',
    description:
        'Скидки на брендовые оригинальные вещи на ресейл платформе THE CULTT: люксовая мода по лучшим ценам, успейте купить эксклюзивные товары по выгодным предложениям!',
} satisfies Metadata;

export const SELL_META = {
    title: 'Продать брендовые вещи на ресейл платформе THE CULTT',
    description:
        'Поможем продать одежду, сумки и аксессуары культовых брендов, быстрая продажа, выгодные условия от ресейлера THE CULTT',
} satisfies Metadata;

export const AUTH_META = {
    title: 'Гарантия подлинности товаров у ресейлера THE CULTT',
    description:
        'Весь каталог платформы THE CULTT включает в себя только 100% оригинальные вещи, платформа гарантирует подлинность и тщательную проверку.',
} satisfies Metadata;

export const CATEGORIES_META_DICTIONARY = {
    [CATEGORY_SLUGS.bags]: 'брендовых сумок',
    [CATEGORY_SLUGS.shoes]: 'брендовой обуви',
    [CATEGORY_SLUGS.accessories]: 'брендовых аксессуаров',
    [CATEGORY_SLUGS.decorations]: 'брендовых украшений',
    [CATEGORY_SLUGS.jewelry]: 'ювелирных изделий',
};
