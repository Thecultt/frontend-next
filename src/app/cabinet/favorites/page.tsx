import React from 'react';

import { NoSsr } from '@/shared/ui';
import { PrivateLayout } from '@/components/layouts/PrivateLayout/PrivateLayout';
import { CabinetFavorites } from '@/screens';

const CabinetFavoritesPage = () => (
    <NoSsr>
        <PrivateLayout>
            <CabinetFavorites />
        </PrivateLayout>
    </NoSsr>
);

export default CabinetFavoritesPage;
