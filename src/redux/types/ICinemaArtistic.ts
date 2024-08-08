export interface ICinemaArtisticAuction {
    id: number;
    color: string | null;
    current_bid: string | null;
    description: string | null;
    image: string | null;
    release_year: string | null;
    set: string | null;
    size: string | null;
    title: string | null;
    type: string | null;
}

export interface CinemaArtisticState {
    isLoadedItems: boolean;
    items: ICinemaArtisticAuction[];
    isLoadedPage: boolean;
    item: ICinemaArtisticAuction | null;
}

export enum CinemaArtisticActionTypes {
    SET_CINEMA_ARTISTIC_ITEMS = 'SET_CINEMA_ARTISTIC_ITEMS',

    SET_CINEMA_ARTISTIC_IS_LOADED_PAGE = 'SET_CINEMA_ARTISTIC_IS_LOADED_PAGE',
    SET_CINEMA_ARTISTIC_ITEM = 'SET_CINEMA_ARTISTIC_ITEM',
}

interface setCinemaArtisticItems {
    type: CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_ITEMS;
    payload: ICinemaArtisticAuction[];
}

interface setCinemaArtisticIsLoadedPage {
    type: CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_IS_LOADED_PAGE;
    payload: boolean;
}

interface setCinemaArtisticItem {
    type: CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_ITEM;
    payload: ICinemaArtisticAuction;
}

export type CinemaArtisticActions = setCinemaArtisticItems | setCinemaArtisticIsLoadedPage | setCinemaArtisticItem;
