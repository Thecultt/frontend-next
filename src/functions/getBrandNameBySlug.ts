import { IBrands } from '@/models/IBrand';

export const getBrandNameBySlug = (brands: IBrands['brands'], brandSlug: string) =>
    Object.values(brands)
        .reduce((prev, curr) => [...prev, ...curr], [])
        .find(({ slug }) => slug === brandSlug);
