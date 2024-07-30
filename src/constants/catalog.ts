import { SortType } from '@/redux/types/IProducts';

export const CATEGORY_NAMES = {
    bags: 'Сумки',
    accessories: 'Аксессуары',
    shoes: 'Обувь',
    decorations: 'Украшения',
};

export const CATEGORIES = Object.values(CATEGORY_NAMES);

export const SORT: Record<SortType, SortType> = {
    a: 'a',
    price: 'price',
    '-price': '-price',
    popular: 'popular',
    shuffle: 'shuffle',
};

export const SORT_TITLES: { type: SortType; title: string }[] = [
    {
        type: SORT.shuffle,
        title: 'умолчанию',
    },
    {
        type: SORT.a,
        title: 'новизне',
    },
    {
        type: SORT.price,
        title: 'возрастанию цены',
    },
    {
        type: SORT['-price'],
        title: 'убыванию цены',
    },
    {
        type: SORT.popular,
        title: 'популярности',
    },
];

export const SELECTIONS_IDS = {
    summerBags: 4,
    itBags: 5,
    investmentsBags: 6,
    juliaKatkalo: 12,
} as const;

export const GENDERS = {
    male: 'Мужской',
    female: 'Женский',
} as const;

export const GENDER_IDS = {
    male: 2,
    female: 1,
} as const;
