import type { Metadata } from 'next/types';

import NoSsr from '@/components/NoSsr/NoSsr';
import { CabinetWaitingList } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const CabinetWaitingPage = () => (
    <NoSsr>
        <CabinetWaitingList />
    </NoSsr>
);

export default CabinetWaitingPage;
