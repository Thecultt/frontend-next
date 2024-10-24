import { CONTACTS } from './contacts';
import { EXTERNAL_LINKS } from './routes';

export const PAYMENTS_NAMES = {
    card: 'На сайте',
    yandexSplit: 'Яндекс Сплит',
    installmentTinkoff: 'Рассрочка от Тинькофф',
    creditTinkoff: 'Кредит',
};

export const PAYMENTS_METHODS: { [key: string]: { title: string; description: string } } = {
    card: {
        title: PAYMENTS_NAMES.card,
        description:
            'В случае возникновения проблем с оплатой международными картами обратитесь в нашу службу поддержки @thecultthelp',
    },
    yandexSplit: {
        title: PAYMENTS_NAMES.yandexSplit,
        description: `Для покупки свыше 150 000 рублей нужно оформить <a href="${EXTERNAL_LINKS.yandexSplit}" target="_blank" rel="noopener noreferrer">улучшенный Яндекс Сплит</a>`,
    },
    installmentTinkoff: {
        title: PAYMENTS_NAMES.installmentTinkoff,
        description: '',
    },
    creditTinkoff: {
        title: PAYMENTS_NAMES.creditTinkoff,
        description: '',
    },
};

type PaymentItemKeys = 'card' | 'yandexSplit' | 'installmentTinkoff' | 'creditTinkoff' | 'afterFitting';

export interface IPaymentItem {
    id: number;
    title: string;
    description?: string;
}

export const PAYMENT_ITEM: Record<PaymentItemKeys, IPaymentItem> = {
    afterFitting: {
        id: 1,
        title: 'Оплата при доставке',
        description: `В случае возникновения проблем с оплатой международными картами обратитесь в нашу службу поддержки <a href="${CONTACTS.tgHelp}" target="_blank" rel="noopener noreferrer">@thecultthelp</a>`,
    },
    card: {
        id: 6,
        title: 'На сайте',
        description: `В случае возникновения проблем с оплатой международными картами обратитесь в нашу службу поддержки <a href="${CONTACTS.tgHelp}" target="_blank" rel="noopener noreferrer">@thecultthelp</a>`,
    },
    yandexSplit: {
        id: 9,
        title: 'Яндекс Сплит',
        description: `Для покупки свыше 150 000 рублей нужно оформить <a href="${EXTERNAL_LINKS.yandexSplit}" target="_blank" rel="noopener noreferrer">улучшенный Яндекс Сплит</a>`,
    },
    installmentTinkoff: {
        id: 4,
        title: 'Рассрочка от Тинькофф',
        description: '',
    },
    creditTinkoff: {
        id: 7,
        title: 'Кредит',
        description: '',
    },
};

export const PAYMENT_ITEMS: IPaymentItem[] = [
    PAYMENT_ITEM.card,
    PAYMENT_ITEM.yandexSplit,
    PAYMENT_ITEM.installmentTinkoff,
    PAYMENT_ITEM.creditTinkoff,
];

export const PROMOCODE_NOT_AVAILABLE_PAYMENTS = [
    PAYMENT_ITEM.installmentTinkoff.id,
    PAYMENT_ITEM.creditTinkoff.id,
    PAYMENT_ITEM.yandexSplit.id,
];
