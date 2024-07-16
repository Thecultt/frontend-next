import type { Metadata } from 'next/types';

import NoSsr from '@/components/NoSsr/NoSsr';
import { CabinetSetting } from '@/screens';
import { APP_TITLE } from '@/constants/app';
import { PrivateLayout } from '@/components/layouts/PrivateLayout/PrivateLayout';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const CabinetSettingPage = () => (
    <NoSsr>
        <PrivateLayout>
            <CabinetSetting />
        </PrivateLayout>
    </NoSsr>
);

export default CabinetSettingPage;
