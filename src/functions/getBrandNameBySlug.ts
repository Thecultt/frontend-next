import { IBrands } from '@/redux/types/IBrands';

export const getBrandNameBySlug = (brands: IBrands['brands'], brandSlug: string) =>
    Object.values(brands)
        .reduce((prev, curr) => [...prev, ...curr], [])
        .find(({ slug }) => slug === brandSlug);
