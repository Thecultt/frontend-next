import React from 'react';

import NoSsr from '@/components/NoSsr/NoSsr';
import { CabinetSellsList } from '@/screens';
import { PrivateLayout } from '@/components/layouts/PrivateLayout/PrivateLayout';

const CabinetSellsPage = () => (
    <NoSsr>
        <PrivateLayout>
            <CabinetSellsList />
        </PrivateLayout>
    </NoSsr>
);

export default CabinetSellsPage;
