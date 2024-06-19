import { FavoritesState, FavoritesActions, FavoritesActionTypes } from '../types/IFavorites';

const initialState: FavoritesState = {
    items: {},
    isLoaded: false,
};

const favorites = (state = initialState, action: FavoritesActions) => {
    if (action.type === FavoritesActionTypes.SET_FAVORITES_ITEMS) {
        const newObject: any = {};

        action.payload.map((item) => {
            newObject[item.id] = item;
        });

        return {
            ...state,
            items: newObject,
            isLoaded: true,
        };
    }

    return state;
};

export default favorites;
