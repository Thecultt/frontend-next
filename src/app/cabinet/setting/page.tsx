import type { Metadata } from 'next/types';

import NoSsr from '@/components/NoSsr/NoSsr';
import { CabinetSetting } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const CabinetSettingPage = () => (
    <NoSsr>
        <CabinetSetting />
    </NoSsr>
);

export default CabinetSettingPage;
