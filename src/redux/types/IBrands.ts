export interface BrandsState {
    isLoaded: boolean;
    allBrands: { [key: string]: string[] };
    brands: { [key: string]: string[] };

    letter: string;
    search: string;
}

export enum BrandsActionTypes {
    SET_BRANDS = 'SET_BRANDS',
    SET_BRANDS_LETTER = 'SET_BRANDS_LETTER',
    SET_BRANDS_SEARCH = 'SET_BRANDS_SEARCH',
}

interface setBrands {
    type: BrandsActionTypes.SET_BRANDS;
    payload: { [key: string]: string[] };
}

interface setBrandsLetter {
    type: BrandsActionTypes.SET_BRANDS_LETTER;
    payload: string;
}

interface setBrandsSearch {
    type: BrandsActionTypes.SET_BRANDS_SEARCH;
    payload: string;
}

export type BrandsActions = setBrands | setBrandsLetter | setBrandsSearch;
