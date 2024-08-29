export const APP_ROUTE = {
    home: '/',
    catalog: '/catalog',
    product: '/product',
    selections: '/selections',
    exchange: '/exchange',
    auth: '/auth',
    brands: '/brands',
    about: '/about',
    contact: '/contact',
    visit: '/visit',
    order: '/order',
    vipService: '/vipservice',
    cart: '/cart',
    subscribe: '/subscribe',
    favorites: '/favorites',
    alionaDoletskaya: '/AlionaDoletskaya',
    cinema: {
        root: '/cinema1909',
        product: '/cinema1909/product',
    },
    concierge: {
        root: '/concierge',
        product: '/concierge/product',
    },
    help: {
        root: '/help',
        all: '/help/all',
        delivery: '/help-delivery',
        return: '/help-return',
        publicOffer: '/public-offer',
        userAgreement: '/user-agreement',
        sellers: '/help/sellers',
        theCultt: '/help/thecultt',
    },
    sell: {
        create: '/sell-create',
        info: '/sell',
        infoBrands: '/sell/brands',
    },
    cabinet: {
        history: '/cabinet/history',
        sells: '/cabinet/sells',
        favorites: '/cabinet/favorites',
        waiting: '/cabinet/waiting',
        setting: '/cabinet/setting',
    },
} as const;

export const CATALOG_PAGES = [APP_ROUTE.catalog, APP_ROUTE.selections, `${APP_ROUTE.brands}/`];

export const EXTERNAL_LINKS = {
    sellerVisit: 'https://calendly.com/thecultt_2023/visitsellers',
    clientVisit: 'https://calendly.com/thecultt/visit',
    advertisingConsent: 'https://drive.google.com/file/d/1boXYWorAMhCifykbhO3UPu4iybSrEZNB/view',
    resaleReport: 'https://resalereport2023.ru',
    career: 'https://www.notion.so/9a26fcf2ac2049feb782bcd967eed574',
    personalData:
        'https://storage.yandexcloud.net/the-cultt-docs/03.05.2024/Положение_об_обработке_персональных_данных_с_Ботом.pdf',
    yandexSplit: 'https://bank.yandex.ru/pay/split/account',
};
