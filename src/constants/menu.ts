import { EXTERNAL_LINKS } from './routes';

export const FOOTER_BOTTOM_LINKS = [
    {
        title: 'Пользовательское соглашение',
        href: EXTERNAL_LINKS.userAgreement,
    },
    {
        title: 'Публичная оферта продавца',
        href: EXTERNAL_LINKS.publicOfferSeller,
    },
    {
        title: 'Публичная оферта покупателя',
        href: EXTERNAL_LINKS.publicOfferBuyer,
    },
];

export const FAQ_THE_CULTT_LINKS = [
    {
        title: 'Условия продажи THE CULTT',
        items: [
            {
                title: 'Пользовательское соглашение',
                href: EXTERNAL_LINKS.userAgreement,
            },
            {
                title: 'Условия использования сервиса THE CULTT',
                href: EXTERNAL_LINKS.termsOfUse,
            },
            {
                title: 'Публичная оферта покупателя ООО "Культ"',
                href: EXTERNAL_LINKS.publicOfferBuyer,
            },
            {
                title: 'Публичная оферта продавца ООО "Культ"',
                href: EXTERNAL_LINKS.publicOfferSeller,
            },
            {
                title: 'Публичная оферта покупателя ООО "Культ Джюлери"',
                href: EXTERNAL_LINKS.publicOfferBuyerJewelry,
            },
            {
                title: 'Публичная оферта продавца ООО "Культ Джюлери"',
                href: EXTERNAL_LINKS.publicOfferSellerJewelry,
            },
        ],
    },
    {
        title: 'Условия обработки персональных данных',
        items: [
            {
                title: 'Положение об обработке данных THE CULTT',
                href: EXTERNAL_LINKS.personalData,
            },
        ],
    },
];
