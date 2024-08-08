import { Dispatch } from 'redux';

import $api from '@/http';
import {
    CinemaArtisticActions,
    CinemaArtisticActionTypes,
    ICinemaArtisticAuction,
} from '@/redux/types/ICinemaArtistic';

export const fetchCinemaArtisticAuctionItems = () => async (dispatch: Dispatch<CinemaArtisticActions>) => {
    const {
        data: { auctions },
    } = await $api.get<{ auctions: ICinemaArtisticAuction[] }>(`/auctions`);

    dispatch({
        type: CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_ITEMS,
        payload: auctions,
    });
};
