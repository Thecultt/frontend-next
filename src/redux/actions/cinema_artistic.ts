import { Dispatch } from 'redux';

import $api from '@/http';
import {
    CinemaArtisticActions,
    CinemaArtisticActionTypes,
    ICinemaArtisticAuction,
} from '@/redux/types/ICinemaArtistic';
import { getFakeAuctionProducts } from '@/functions/faker';

import { RootState } from '../reducers';

export const fetchCinemaArtisticAuctionItems = () => async (dispatch: Dispatch<CinemaArtisticActions>) => {
    try {
        // TODO
        // const {
        //     data: { auctions },
        // } = await $api.get<{ auctions: ICinemaArtisticAuction[] }>(`/auctions`);

        const auctions = await getFakeAuctionProducts();

        dispatch({
            type: CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_ITEMS,
            payload: auctions,
        });
    } catch (e) {
        dispatch({
            type: CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_ITEMS,
            payload: [],
        });
        console.error(e);
    }
};

export const getCinemaAuctionProductById =
    (id: number) => async (dispatch: Dispatch<CinemaArtisticActions>, getState: () => RootState) => {
        const {
            cinema_artistic: { items },
        } = getState();

        const foundItem = items.find((item) => item.id === id);

        if (foundItem) {
            dispatch({
                type: CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_ITEM,
                payload: foundItem,
            });

            return;
        }

        try {
            const { data } = await $api.get<ICinemaArtisticAuction>(`/auctions/${id}`);

            dispatch({
                type: CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_ITEM,
                payload: data,
            });
        } catch (e) {
            dispatch({
                type: CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_ITEM,
                payload: null,
            });
            console.error(e);
        }
    };
