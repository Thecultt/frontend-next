import React from 'react';

import { NoSsr } from '@/shared/ui';
import { CabinetSetting } from '@/screens';
import { PrivateLayout } from '@/components/layouts/PrivateLayout/PrivateLayout';

const CabinetSettingPage = () => (
    <NoSsr>
        <PrivateLayout>
            <CabinetSetting />
        </PrivateLayout>
    </NoSsr>
);

export default CabinetSettingPage;
