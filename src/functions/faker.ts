import { faker } from '@faker-js/faker';
import { ICinemaArtisticAuction } from '@/redux/types/ICinemaArtistic';

export const getFakeAuctionProducts = (length = 20): Promise<ICinemaArtisticAuction[]> =>
    new Promise((res) => {
        const items: ICinemaArtisticAuction[] = Array.from({ length }).map(() => ({
            id: faker.number.int(),
            title: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            image: faker.image.url(),
            color: null,
            current_bid: null,
            release_year: null,
            set: null,
            size: null,
            type: null,
        }));

        res(items);
    });
