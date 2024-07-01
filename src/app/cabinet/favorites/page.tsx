import type { Metadata } from 'next/types';

import NoSsr from '@/components/NoSsr/NoSsr';
import { CabinetFavorites } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const CabinetFavoritesPage = () => (
    <NoSsr>
        <CabinetFavorites />
    </NoSsr>
);

export default CabinetFavoritesPage;
