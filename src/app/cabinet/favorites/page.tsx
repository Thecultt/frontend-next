import type { Metadata } from 'next/types';

import NoSsr from '@/components/NoSsr/NoSsr';
import { CabinetFavorites } from '@/screens';
import { APP_TITLE } from '@/constants/app';
import { PrivateLayout } from '@/components/layouts/PrivateLayout/PrivateLayout';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const CabinetFavoritesPage = () => (
    <NoSsr>
        <PrivateLayout>
            <CabinetFavorites />
        </PrivateLayout>
    </NoSsr>
);

export default CabinetFavoritesPage;
