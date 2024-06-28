import type { Metadata } from 'next/types';

import NoSsr from '@/components/NoSsr/NoSsr';
import { CabinetHistoryOrders } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const CabinetHistoryPage = () => (
    <NoSsr>
        <CabinetHistoryOrders />
    </NoSsr>
);

export default CabinetHistoryPage;
