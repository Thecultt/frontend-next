export interface IBrand {
    word: string;
    slug: string;
}

export interface IBrands {
    brands: { [letter: string]: IBrand[] };
}
