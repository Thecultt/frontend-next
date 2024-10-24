'use client';

import React from 'react';

import {
    CabinetSettingFormInfo,
    CabinetSettingFormContact,
    CabinetSettingFormAddress,
    CabinetSettingFormPayment,
} from '@/components/';

const CabinetSettingForm: React.FC = () => (
    <>
        {/* <CabinetSettingPasswordRecovery /> */}
        {/* <CabinetSettingPaymentBlock onSubmit={onSubmit} /> */}

        <CabinetSettingFormInfo />
        <CabinetSettingFormContact />
        <CabinetSettingFormAddress />
        <CabinetSettingFormPayment />
    </>
);

export default CabinetSettingForm;
