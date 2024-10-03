import React from 'react';

import { NoSsr } from '@/shared/ui';
import { CabinetHistoryOrders } from '@/screens';
import { PrivateLayout } from '@/components/layouts/PrivateLayout/PrivateLayout';

const CabinetHistoryPage = () => (
    <NoSsr>
        <PrivateLayout>
            <CabinetHistoryOrders />
        </PrivateLayout>
    </NoSsr>
);

export default CabinetHistoryPage;
