import type { Metadata } from 'next/types';

import NoSsr from '@/components/NoSsr/NoSsr';
import { CabinetWaitingList } from '@/screens';
import { APP_TITLE, APP_DESCRIPTION } from '@/constants/app';
import { PrivateLayout } from '@/components/layouts/PrivateLayout/PrivateLayout';

export const metadata: Metadata = {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
};

const CabinetWaitingPage = () => (
    <NoSsr>
        <PrivateLayout>
            <CabinetWaitingList />
        </PrivateLayout>
    </NoSsr>
);

export default CabinetWaitingPage;
