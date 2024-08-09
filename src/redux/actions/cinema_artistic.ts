import { Dispatch } from 'redux';

import $api from '@/http';
import {
    CinemaArtisticActions,
    CinemaArtisticActionTypes,
    ICinemaArtisticAuction,
} from '@/redux/types/ICinemaArtistic';
import { Noop } from '@/types/functions';
import { IStatus } from '@/types/api';

export const fetchCinemaArtisticAuctionItems = () => async (dispatch: Dispatch<CinemaArtisticActions>) => {
    try {
        const {
            data: { auctions },
        } = await $api.get<{ auctions: ICinemaArtisticAuction[] }>(`/auctions`);

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

export const getCinemaAuctionProductById = (id: number) => async (dispatch: Dispatch<CinemaArtisticActions>) => {
    try {
        dispatch({
            type: CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_IS_LOADED_PAGE,
            payload: false,
        });

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

interface ISendFormAuctionRequest {
    bid: string;
    fio: string;
    phone: string;
}

export const sendFormAuctionProduct =
    (id: string, form: ISendFormAuctionRequest, onSuccess?: Noop) =>
    async (dispatch: Dispatch<CinemaArtisticActions>) => {
        try {
            dispatch({
                type: CinemaArtisticActionTypes.SET_CINEMA_FORM_LOADING,
                payload: true,
            });

            const { data } = await $api.post<IStatus>(`/auctions/${id}/bet`, form);

            if (data.status !== 'ok') {
                throw new Error();
            }

            onSuccess?.();
        } catch (e) {
            console.error(e);
        } finally {
            dispatch({
                type: CinemaArtisticActionTypes.SET_CINEMA_FORM_LOADING,
                payload: false,
            });
        }
    };
