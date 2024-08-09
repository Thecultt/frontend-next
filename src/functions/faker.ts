import { faker } from '@faker-js/faker';
import { ICinemaArtisticAuction } from '@/redux/types/ICinemaArtistic';

export const getFakeAuctionProducts = (length = 20): Promise<ICinemaArtisticAuction[]> =>
    new Promise((res) => {
        const items: ICinemaArtisticAuction[] = Array.from({ length }).map(() => ({
            id: faker.number.int(),
            title: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            images: Array.from({ length: 5 }).map(() => faker.image.urlPicsumPhotos()),
            current_bid: faker.commerce.price(),
            release_year: faker.date.birthdate({ mode: 'year' }).toDateString(),
            color: 'Черный',
            set: 'Пыльник',
            size: '30 см.',
            type: 'Сумка',
            film: '«Идеальное убийство», 1998',
        }));

        res(items);
    });
