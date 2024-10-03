import React from 'react';

import { NoSsr } from '@/shared/ui';
import { CabinetWaitingList } from '@/screens';
import { PrivateLayout } from '@/components/layouts/PrivateLayout/PrivateLayout';

const CabinetWaitingPage = () => (
    <NoSsr>
        <PrivateLayout>
            <CabinetWaitingList />
        </PrivateLayout>
    </NoSsr>
);

export default CabinetWaitingPage;
