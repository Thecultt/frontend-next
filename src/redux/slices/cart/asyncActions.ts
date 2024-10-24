import { createAsyncThunk } from '@reduxjs/toolkit';

import { CartItem } from '@/models/ICartItem';
import { RootState } from '@/redux/store';
import { catalogAPI } from '@/services/api';

export const checkAvailabilityCartItems = createAsyncThunk(
    'cart/checkAvailabilityCartItems',
    async (items: CartItem[], { getState, rejectWithValue }) => {
        try {
            const requestItems = !items.length ? (getState() as RootState).cart.items : items;

            if (!requestItems.length) {
                return [];
            }

            const result = await Promise.all(
                requestItems.map(async (item) => {
                    const { data } = await catalogAPI.getProductByArticle(item.article);
                    const canBuy = !!data.availability && !data.is_trial;

                    return {
                        id: data.id,
                        checked: !canBuy ? false : item.checked,
                        article: data.article,
                        category: data.category,
                        subcategory: data.subcategory,
                        image: data.images[0],
                        manufacturer: data.manufacturer,
                        name: data.name,
                        price: data.price ?? 0,
                        old_price: data.old_price,
                        availability: data.availability,
                        is_trial: data.is_trial,
                        condition: data.condition,
                        is_jewelry: data.is_jewelry,
                    } as CartItem;
                }),
            );

            return result;
        } catch (e) {
            console.error('checkAvailabilityCartItems', e);
            return rejectWithValue(e);
        }
    },
);
