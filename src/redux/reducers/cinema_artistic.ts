import { CinemaArtisticState, CinemaArtisticActionTypes, CinemaArtisticActions } from '../types/ICinemaArtistic';

const initialState: CinemaArtisticState = {
    isLoadedItems: false,
    items: [],
    isLoadedPage: false,
    item: null,
    formIsLoading: false,
};

const cinema_artistic = (state = initialState, action: CinemaArtisticActions) => {
    if (action.type === CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_ITEMS) {
        return {
            ...state,
            isLoadedItems: true,
            items: action.payload,
        };
    }

    if (action.type === CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_IS_LOADED_PAGE) {
        return {
            ...state,
            isLoadedPage: action.payload,
        };
    }

    if (action.type === CinemaArtisticActionTypes.SET_CINEMA_ARTISTIC_ITEM) {
        return {
            ...state,
            isLoadedPage: true,
            item: action.payload,
        };
    }

    if (action.type === CinemaArtisticActionTypes.SET_CINEMA_FORM_LOADING) {
        return {
            ...state,
            formIsLoading: action.payload,
        };
    }

    return state;
};

export default cinema_artistic;
