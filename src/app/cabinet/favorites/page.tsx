import React from 'react';

import NoSsr from '@/components/NoSsr/NoSsr';
import { CabinetFavorites } from '@/screens';
import { PrivateLayout } from '@/components/layouts/PrivateLayout/PrivateLayout';

const CabinetFavoritesPage = () => (
    <NoSsr>
        <PrivateLayout>
            <CabinetFavorites />
        </PrivateLayout>
    </NoSsr>
);

export default CabinetFavoritesPage;
