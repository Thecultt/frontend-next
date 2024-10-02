import { CabinetSellStepKeys, CabinetSellTypes } from '@/redux/types/ICabinetSell';

export const CATEGORY_NAMES = {
    watch: 'Часы',
    belts: 'Ремни',
    glasses: 'Очки',
    anotherAccessory: 'Другой аксессуар',
    shoes: 'Обувь',
    womensBags: 'Женские сумки',
    mensBags: 'Мужские сумки',
    shawlsScarves: 'Платки и шарфы',
    decorating: 'Украшения',
    jewelry: 'Ювелирные изделия',
    hats: 'Головные уборы',
};

export const SELL_TYPES = [
    {
        title: 'Продажа',
        description: `Вы получаете выплату за аксессуар сразу после
        согласования условий и проверки на подлинность или
        после продажи товара за комиссию.`,
        type: CabinetSellTypes.SELL,
    },

    {
        title: 'Обмен',
        description: `Мы оценим ваш лот и предложим депозит в размере его
        стоимости на покупку нового лота на нашем сайте.`,
        type: CabinetSellTypes.EXCHANGE,
    },
];

export enum DeliveryTypes {
    cdek = 'CDEK',
    courier = 'Курьер',
    office = 'Лично в офис',
}

export const SELL_STEPS: {
    title: string;
    key: CabinetSellStepKeys;
    types: CabinetSellTypes[];
}[] = [
    {
        title: 'Вариант сотрудничества',
        key: CabinetSellStepKeys.COOPERATION,
        types: [CabinetSellTypes.SELL, CabinetSellTypes.EXCHANGE],
    },
    {
        title: 'Информация о товаре',
        key: CabinetSellStepKeys.INFO,
        types: [CabinetSellTypes.SELL, CabinetSellTypes.EXCHANGE],
    },
    {
        title: 'Фотографии',
        key: CabinetSellStepKeys.IMAGES,
        types: [CabinetSellTypes.SELL, CabinetSellTypes.EXCHANGE],
    },
    {
        title: 'Товар для обмена',
        key: CabinetSellStepKeys.PRODUCT,
        types: [CabinetSellTypes.EXCHANGE],
    },
    {
        title: 'Контактные данные',
        key: CabinetSellStepKeys.CONTACT,
        types: [CabinetSellTypes.SELL, CabinetSellTypes.EXCHANGE],
    },
    {
        title: 'Способ отправки товара',
        key: CabinetSellStepKeys.DELIVERY,
        types: [CabinetSellTypes.SELL, CabinetSellTypes.EXCHANGE],
    },
];
