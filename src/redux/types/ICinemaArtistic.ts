export interface ICinemaArtisticAuction {
    id: number;
    color: string | null;
    current_bid: string | null;
    description: string | null;
    images: string[] | null;
    release_year: string | null;
    set: string | null;
    size: string | null;
    title: string | null;
    type: string | null;
    film: string | null;
}

export interface CinemaArtisticState {
    isLoadedItems: boolean;
    items: ICinemaArtisticAuction[];
    isLoadedPage: boolean;
    item: ICinemaArtisticAuction | null;
    formIsLoading: boolean;
}

export enum CinemaArtisticActionTypes {
    SET_CINEMA_ARTISTIC_ITEMS = 'SET_CINEMA_ARTISTIC_ITEMS',

    SET_CINEMA_ARTISTIC_IS_LOADED_PAGE = 'SET_CINEMA_ARTISTIC_IS_LOADED_PAGE',
    SET_CINEMA_ARTISTIC_ITEM = 'SET_CINEMA_ARTISTIC_ITEM',

    SET_CINEMA_FORM_LOADING = 'SET_CINEMA_FORM_LOADING',
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
    payload: ICinemaArtisticAuction | null;
}

interface setCinemaFormLoading {
    type: CinemaArtisticActionTypes.SET_CINEMA_FORM_LOADING;
    payload: boolean;
}

export type CinemaArtisticActions =
    | setCinemaArtisticItems
    | setCinemaArtisticIsLoadedPage
    | setCinemaArtisticItem
    | setCinemaFormLoading;
