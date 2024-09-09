import { CabinetSellTypes } from '@/redux/types/ICabinetSell';

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
    jewelry: 'Ювелирные украшения',
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

export enum DELIVERY_TYPES {
    cdek = 'CDEK',
    courier = 'Курьер',
    office = 'Лично в офис',
}
