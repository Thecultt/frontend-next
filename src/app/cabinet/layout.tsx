'use client';

import { CabinetMenu } from '@/components';
import NoSsr from '@/components/NoSsr/NoSsr';

const CabinetLayout = ({ children }: { children: React.ReactNode }) => (
    <section className="cabinet">
        <div className="container">
            <div className="cabinet-wrapper">
                <NoSsr>
                    <CabinetMenu />
                </NoSsr>

                {children}
            </div>
        </div>
    </section>
);

export default CabinetLayout;
