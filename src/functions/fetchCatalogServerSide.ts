import { catalogAPI } from '@/services/api';
import { ICatalogPageProps } from '@/types/catalog';
import { parseCatalogSearchParams } from './parseCatalogSearchParams';

export const fetchCatalogServerSide = (props: ICatalogPageProps) =>
    catalogAPI.getCatalog(parseCatalogSearchParams(props));
