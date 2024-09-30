import { IBrand } from '@/models/IBrand';
import { BrandsState, BrandsActions, BrandsActionTypes } from '../types/IBrands';

const initialState: BrandsState = {
    isLoaded: false,
    allBrands: {},
    brands: {},

    letter: '',
    search: '',
};

const brands = (state = initialState, action: BrandsActions) => {
    if (action.type === BrandsActionTypes.SET_BRANDS) {
        return {
            ...state,
            isLoaded: true,
            allBrands: action.payload,
            brands: action.payload,
        };
    }

    if (action.type === BrandsActionTypes.SET_BRANDS_LETTER) {
        return {
            ...state,
            brands: { [action.payload]: state.allBrands[action.payload] },
            letter: action.payload,
            search: '',
        };
    }

    if (action.type === BrandsActionTypes.SET_BRANDS_SEARCH) {
        const newBrands: { [key: string]: IBrand[] } = {};

        Object.keys(state.allBrands).map((key) => {
            state.allBrands[key].map((brand) => {
                if (brand.word.toLowerCase().indexOf(action.payload) !== -1) {
                    if (key in newBrands) {
                        newBrands[key] = [...newBrands[key], brand];
                    } else {
                        newBrands[key] = [brand];
                    }
                }
            });
        });

        return {
            ...state,
            brands: newBrands,
            search: action.payload,
            letter: '',
        };
    }

    return state;
};

export default brands;
