export interface CinemaArtisticState {
    isLoadedItems: boolean;
    items: object[];

    isLoadedPage: boolean;
    item: object;
}

export enum CinemaArtisticActionTypes {
    SET_CINEMA_ARTISTIC_ITEMS = 'SET_CINEMA_ARTISTIC_ITEMS',

    SET_CINEMA_ARTISTIC_IS_LOADED_PAGE = 'SET_CINEMA_ARTISTIC_IS_LOADED_PAGE',
    SET_CINEMA_ARTISTIC_ITEM = 'SET_CINEMA_ARTISTIC_ITEM',
}

interface setCinemaArtisticItems {
    type: CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_ITEMS;
    payload: object[];
}

interface setCinemaArtisticIsLoadedPage {
    type: CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_IS_LOADED_PAGE;
    payload: boolean;
}

interface setCinemaArtisticItem {
    type: CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_ITEM;
    payload: object;
}

export type CinemaArtisticActions = setCinemaArtisticItems | setCinemaArtisticIsLoadedPage | setCinemaArtisticItem;
