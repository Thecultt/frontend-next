'use client';

import React from 'react';

import {
    SellInfoMain,
    SellInfoSteps,
    SellInfoCooperation,
    SellInfoVipService,
    SellInfoService,
    SellInfoCategories,
    SellInfoCommission,
    SellInfoCommissionService,
    SellInfoLots,
} from '@/components';

const SellInfo: React.FC = () => {
    return (
        <section className="sell-info">
            <div className="container">
                <div className="sell-info-wrapper">
                    <SellInfoMain />

                    <SellInfoSteps />

                    <SellInfoCooperation />

                    <SellInfoVipService />

                    <SellInfoService />

                    <SellInfoCategories />

                    {/* <SellInfoProcess /> */}

                    <SellInfoCommission />

                    <SellInfoCommissionService />

                    <SellInfoLots />
                </div>
            </div>
        </section>
    );
};

export default SellInfo;
