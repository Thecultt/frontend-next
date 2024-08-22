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

export const COUNT_MINUTES_RESERVED_ORDER = 15;
