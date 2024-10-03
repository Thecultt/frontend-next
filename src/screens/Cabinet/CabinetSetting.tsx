'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import {
    PageLoader,
    CabinetSettingInfoBlock,
    CabinetSettingContactBlock,
    CabinetSettingAddressBlock,
    CabinetSettingPaymentBlock,
} from '@/components';
import { Button } from '@/shared/ui';
import { sendUpdateUser } from '@/redux/actions/user';
import { useAuthUser } from '@/hooks/useAuthUser';

const CabinetSetting: React.FC = () => {
    const dispatch = useDispatch();

    const { isLoaded, logout } = useAuthUser();

    const onSubmit = (data: any) => {
        dispatch(sendUpdateUser(data) as any);
    };

    return (
        <div className="cabinet-content cabinet-setting">
            {isLoaded ? (
                <>
                    <CabinetSettingInfoBlock onSubmit={onSubmit} />
                    <CabinetSettingContactBlock onSubmit={onSubmit} />
                    {/* <CabinetSettingPasswordRecovery /> */}
                    {/* <CabinetSettingBrandBlock /> */}
                    <CabinetSettingAddressBlock onSubmit={onSubmit} />
                    <CabinetSettingPaymentBlock onSubmit={onSubmit} />
                </>
            ) : (
                <PageLoader />
            )}

            <Button label="Выйти из профиля" theme="light" onClick={logout} />
        </div>
    );
};

export default CabinetSetting;
