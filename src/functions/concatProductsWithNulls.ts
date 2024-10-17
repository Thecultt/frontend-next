import { Product } from '@/models/IProduct';

export const concatProductsWithNulls = (items: Product[]): Array<Product | null> => {
    if (items.length === 0) {
        return [];
    }

    if (items.length < 6) {
        return [...items, null];
    }

    const newItems: Array<Product | null> = [...items];

    for (let i = 5; i < newItems.length; i += 6) {
        if (i !== newItems.length) {
            newItems.splice(i, 0, null);
        }
    }

    return newItems;
};
