import { PublicFavoritesState, PublicFavoritesActions, PublicFavoritesActionTypes } from '../types/IPublicFavorites';

const initialState: PublicFavoritesState = {
    items: {},
    name: '',
    isLoaded: false,
};

const favorites = (state = initialState, action: PublicFavoritesActions) => {
    if (action.type === PublicFavoritesActionTypes.SET_PUBLIC_FAVORITES_ITEMS) {
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

    if (action.type === PublicFavoritesActionTypes.SET_PUBLIC_FAVORITES_NAME) {
        return {
            ...state,
            name: action.payload,
        };
    }

    return state;
};

export default favorites;
