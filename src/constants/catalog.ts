import { SortType } from '@/redux/types/IProducts';
import { AvailabilityType } from '@/types/catalog';

export const CATEGORY_NAMES = {
    bags: 'Сумки',
    accessories: 'Аксессуары',
    shoes: 'Обувь',
    decorations: 'Украшения',
    jewelry: 'Ювелирные изделия',
};

export const CATEGORIES = [
    CATEGORY_NAMES.bags,
    // TODO jewelry on hold
    // CATEGORY_NAMES.jewelry,
    CATEGORY_NAMES.accessories,
    CATEGORY_NAMES.shoes,
    CATEGORY_NAMES.decorations,
];

export const CATEGORY_SLUGS = {
    new: 'new',
    popular: 'popular',
    sale: 'sale',
    bags: 'sumki',
    accessories: 'aksessuary',
    shoes: 'obuv',
    decorations: 'ukrasheniia',
    jewelry: 'iuvelirnye-izdeliia',
};

export const CATEGORY_SLUG_NAMES = {
    [CATEGORY_SLUGS.bags]: CATEGORY_NAMES.bags,
    [CATEGORY_SLUGS.accessories]: CATEGORY_NAMES.accessories,
    [CATEGORY_SLUGS.shoes]: CATEGORY_NAMES.shoes,
    [CATEGORY_SLUGS.decorations]: CATEGORY_NAMES.decorations,
    [CATEGORY_SLUGS.jewelry]: CATEGORY_NAMES.jewelry,

    [CATEGORY_SLUGS.new]: 'Новинки',
    [CATEGORY_SLUGS.popular]: 'Популярное',
    [CATEGORY_SLUGS.sale]: 'THE CULTT SALE',
};

export const CATEGORY_NAME_SLUGS = {
    [CATEGORY_NAMES.bags]: CATEGORY_SLUGS.bags,
    [CATEGORY_NAMES.accessories]: CATEGORY_SLUGS.accessories,
    [CATEGORY_NAMES.shoes]: CATEGORY_SLUGS.shoes,
    [CATEGORY_NAMES.decorations]: CATEGORY_SLUGS.decorations,
    [CATEGORY_NAMES.jewelry]: CATEGORY_SLUGS.jewelry,
};

export const ALL_CATEGORY_SLUGS = Object.values(CATEGORY_SLUGS);

export const FILTER_CATEGORY_SLUGS = [
    CATEGORY_SLUGS.bags,
    CATEGORY_SLUGS.accessories,
    CATEGORY_SLUGS.shoes,
    CATEGORY_SLUGS.decorations,
    CATEGORY_SLUGS.jewelry,
];

export const FAKE_CATEGORY_SLUGS = [CATEGORY_SLUGS.new, CATEGORY_SLUGS.popular, CATEGORY_SLUGS.sale];

export const AVAILABILITY = {
    available: 'Доступно',
    notAvailable: 'Нет в наличии',
    fitting: 'На примерке',
} as const;

export const AVAILABILITY_IDS: Record<AvailabilityType, string> = {
    [AVAILABILITY.available]: '1',
    [AVAILABILITY.notAvailable]: '0',
    [AVAILABILITY.fitting]: '-1',
};

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
    autumnBags: 15,
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

export const CONDITIONS = {
    new: 'Новое',
    excellent: 'Отличное',
    good: 'Хорошее',
} as const;

export const CATALOG_PRODUCTS_LIMIT = 20;
