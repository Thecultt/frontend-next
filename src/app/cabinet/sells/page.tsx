import type { Metadata } from 'next/types';

import NoSsr from '@/components/NoSsr/NoSsr';
import { CabinetSellsList } from '@/screens';
import { APP_TITLE } from '@/constants/app';

export const metadata: Metadata = {
    title: APP_TITLE,
};

const CabinetSellsPage = () => (
    <NoSsr>
        <CabinetSellsList />
    </NoSsr>
);

export default CabinetSellsPage;
