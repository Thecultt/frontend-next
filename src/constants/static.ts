import { APP_PROD_DOMAIN } from './app';
import { CATEGORY_SLUG_NAMES, CATEGORY_SLUGS } from './catalog';
import { APP_ROUTE, EXTERNAL_LINKS } from './routes';

export const STATIC_HEADER_MENU = [
    {
        title: 'Главная',
        href: `${APP_PROD_DOMAIN}${APP_ROUTE.home}`,
    },
    {
        title: 'Каталог',
        href: `${APP_PROD_DOMAIN}${APP_ROUTE.catalog}`,
    },
    ...Object.values(CATEGORY_SLUGS).map((slug) => ({
        title: CATEGORY_SLUG_NAMES[slug],
        href: `${APP_PROD_DOMAIN}${APP_ROUTE.catalog}/${slug}`,
    })),
    {
        title: 'Консьерж-сервис',
        href: `${APP_PROD_DOMAIN}${APP_ROUTE.concierge.root}`,
    },
    {
        title: 'VIP-сервис',
        href: `${APP_PROD_DOMAIN}${APP_ROUTE.vipService}`,
    },
    {
        title: 'Бренды',
        href: `${APP_PROD_DOMAIN}${APP_ROUTE.brands}`,
    },
    {
        title: 'Подлинность',
        href: `${APP_PROD_DOMAIN}${APP_ROUTE.auth}`,
    },
    {
        title: 'Продать',
        href: `${APP_PROD_DOMAIN}${APP_ROUTE.sell.info}`,
    },
    {
        title: 'Обменять',
        href: `${APP_PROD_DOMAIN}${APP_ROUTE.exchange}`,
    },
];

export const STATIC_FOOTER_MENU = [
    {
        title: 'Покупателям',
        items: [
            { title: 'Гарантия подлинности', href: `${APP_PROD_DOMAIN}${APP_ROUTE.auth}` },
            {
                title: 'Возврат',
                href: `${APP_PROD_DOMAIN}${APP_ROUTE.help.return}`,
            },
            { title: 'Доставка и оплата', href: `${APP_PROD_DOMAIN}${APP_ROUTE.help.delivery}` },
            {
                title: 'Бренды',
                href: `${APP_PROD_DOMAIN}${APP_ROUTE.brands}`,
            },
        ],
    },
    {
        title: 'Продавцам',
        items: [
            { title: 'Продать товар', href: `${APP_PROD_DOMAIN}${APP_ROUTE.sell.info}` },
            { title: 'Обменять товар', href: `${APP_PROD_DOMAIN}${APP_ROUTE.exchange}` },
            { title: 'VIP-сервис', href: `${APP_PROD_DOMAIN}${APP_ROUTE.vipService}` },
            { title: 'Бренд-лист', href: `${APP_PROD_DOMAIN}${APP_ROUTE.sell.infoBrands}` },
        ],
    },
    {
        title: 'О компании',
        items: [
            { title: 'О компании', href: `${APP_PROD_DOMAIN}${APP_ROUTE.about}` },
            { title: 'Карьера', href: EXTERNAL_LINKS.career },
            { title: 'Resale report 2023', href: EXTERNAL_LINKS.resaleReport },
        ],
    },
    {
        title: 'Связь с нами',
        items: [
            { title: 'Вопросы и ответы', href: `${APP_PROD_DOMAIN}${APP_ROUTE.help.all}` },
            { title: 'Контакты', href: `${APP_PROD_DOMAIN}${APP_ROUTE.contact}` },
            { title: 'Попасть в офис', href: `${APP_PROD_DOMAIN}${APP_ROUTE.visit}` },
        ],
    },
    {
        title: 'Подписывайтесь на THE CULTT в Telegram',
        items: [{ title: 'Telegram', href: EXTERNAL_LINKS.tg }],
    },
];
