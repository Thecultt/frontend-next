import { CONTACTS } from './contacts';

export interface IDeliveryItem {
    id: number;
    title: string;
    description: string;
    price: number;
}

export const DELIVERY_VALUES = {
    withFittingMoscow: 'Доставка с примеркой (по Москве)',
    withoutFittingFree: 'Бесплатная доставка (без примерки)',
    pickup: 'Самовывоз',
    russiaFree: 'Бесплатная доставка по России',
    sng: 'Доставка по странам СНГ',
    global: 'Международная доставка',
};

export const DELIVERY_ITEM: Record<keyof typeof DELIVERY_VALUES, IDeliveryItem> = {
    withFittingMoscow: {
        id: 4,
        title: DELIVERY_VALUES.withFittingMoscow,
        description: `
				<span style="color: #838383;">Стоимость доставки — бесплатно до&nbsp;13&nbsp;ноября</span>
				Вы можете заказать доставку лотов(не более 2 сумок или не более 2 пар обуви или 4 аксессуаров) по Москве в пределах МКАД и принять решение о покупке после примерки.Курьер заранее согласует с вами время доставки в промежутке с 11 до 20 с понедельника по воскресенье.Время ожидания курьера во время примерки - 15 минут.
			`,
        price: 0,
    },
    withoutFittingFree: {
        id: 2,
        title: DELIVERY_VALUES.withoutFittingFree,
        description: `
				<span style="color: #838383;">Стоимость доставки — бесплатно</span>
				Мы бесплатно доставим оплаченный вами заказ по Москве в пределах МКАД. Курьер заранее согласует с вами время доставки в промежутке 11 до 20 с пн по пт. Доставка будет осуществлена в течение 24 часов.
			`,
        price: 0,
    },
    pickup: {
        id: 1,
        title: DELIVERY_VALUES.pickup,
        description: `Самовывоз из офиса осуществляется по адресу: ${CONTACTS.address}, ${CONTACTS.addressTime}. Оплаченный заказ может храниться до 7 дней.`,
        price: 0,
    },
    russiaFree: {
        id: 3,
        title: DELIVERY_VALUES.russiaFree,
        description:
            'Мы бесплатно доставим оплаченный вами заказ с помощью курьерской службы СДЭК или Boxberry, срок доставки от 2 дней в зависимости от региона. Примерка для регионов недоступна.',
        price: 0,
    },
    sng: {
        id: 5,
        title: DELIVERY_VALUES.sng,
        description: `
			<span style="color: #838383;">Стоимость доставки — 2000₽</span>

			Доставка осуществляется службой СДЭК/EMS.

			Важно: размер таможенных пошлин определяется законодательством той страны, в которую осуществляется доставка.

			Заказы, оформленные международной доставкой, возврату и обмену не подлежат.
		`,
        price: 2000,
    },
    global: {
        id: 6,
        title: DELIVERY_VALUES.global,
        description: `
			<span style="color: #838383;">Стоимость доставки — 6000₽</span>

			Международная доставка осуществляется службой EMS.

			Важно: условия оплаты и размер таможенных пошлин определяются таможенным законодательством страны, в которую осуществляется доставка.
		`,
        price: 6000,
    },
};

export const RUSSIA_MOSCOW_DELIVERY_ITEMS: IDeliveryItem[] = [
    DELIVERY_ITEM.withFittingMoscow,
    DELIVERY_ITEM.withoutFittingFree,
    DELIVERY_ITEM.pickup,
];

export const RUSSIA_DELIVERY_ITEMS: IDeliveryItem[] = [DELIVERY_ITEM.russiaFree];

export const SNG_DELIVERY_ITEMS: IDeliveryItem[] = [DELIVERY_ITEM.sng];

export const SNG_COUNTRIES = [
    'азербайджан',
    'армения',
    'беларусь',
    'казахстан',
    'кырзызстан',
    'молдова',
    'таджикистан',
    'туркмения',
    'туркменистан',
    'узбекистан',
    'грузия',
];

export const GLOBAL_DELIVERY_ITEMS: IDeliveryItem[] = [DELIVERY_ITEM.global];
