export type Conditions = 'Новое' | 'Отличное' | 'Хорошее';

export type ProductPageParams = {
    article?: string;
};

export interface IProductPageProps {
    params: ProductPageParams;
    searchParams: { [key: string]: string | string[] | undefined };
}
