export const APP_ROUTE = {
    home: '/',
    catalog: '/catalog',
    product: '/product',
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
    concierge: {
        root: '/concierge',
        product: '/concierge/product',
    },
    help: {
        all: '/help/all',
        delivery: '/help-delivery',
        return: '/help-return',
        publicOffer: '/help/public-offer',
        userAgreement: '/help/user-agreement',
        sellers: '/help/sellers',
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

export const EXTERNAL_LINKS = {
    calendly: 'https://calendly.com/thecultt_2023/visitsellers',
    advertisingConsent: 'https://drive.google.com/file/d/1boXYWorAMhCifykbhO3UPu4iybSrEZNB/view',
};
