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
    sellerVisit: 'https://calendly.com/thecultt_sellers/visitsellers',
    clientVisit: 'https://calendly.com/thecultt/visit',
    advertisingConsent: 'https://drive.google.com/file/d/1boXYWorAMhCifykbhO3UPu4iybSrEZNB/view',
    resaleReport: 'https://resalereport2023.ru',
    career: 'https://www.notion.so/9a26fcf2ac2049feb782bcd967eed574',
    personalData:
        'https://storage.yandexcloud.net/the-cultt-docs/03.05.2024/Положение_об_обработке_персональных_данных_с_Ботом.pdf',
    userAgreement:
        'https://storage.yandexcloud.net/the-cultt-docs/03.05.2024/Пользовательское_соглашение_для_интернет_магазина_с_Ботом 23.04.24.docx.pdf',
    publicOfferSeller: 'https://storage.yandexcloud.net/the-cultt-docs/17.07.2024/Оферта для продавца 120724.docx.pdf',
    publicOfferBuyer: 'https://storage.yandexcloud.net/the-cultt-docs/17.07.2024/Оферта для покупателя 120724.docx.pdf',
    publicOfferSellerJewelry:
        'https://storage.yandexcloud.net/the-cultt-docs/01.10.2024/Оферта продавца ООО КУЛЬТ ДЖЮЛЕРИ.pdf',
    publicOfferBuyerJewelry:
        'https://storage.yandexcloud.net/the-cultt-docs/01.10.2024/Оферта_для_покупателя_Культ_Джюлери_220824.pdf',
    termsOfUse:
        'https://storage.yandexcloud.net/the-cultt-docs/03.05.2024/%D0%A3%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F%20%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%B0%20The%20Cultt.docx.pdf',
    yandexSplit: 'https://bank.yandex.ru/pay/split/account',
    tg: 'https://t.me/thecultt',
};
