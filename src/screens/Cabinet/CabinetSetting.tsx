'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { sendUpdateUser } from '@/redux/actions/user';
import {
    PageLoader,
    CabinetSettingInfoBlock,
    CabinetSettingContactBlock,
    CabinetSettingAddressBlock,
    CabinetSettingPaymentBlock,
} from '@/components';
import { useAuthUser } from '@/hooks/useAuthUser';

const CabinetSetting: React.FC = () => {
    const dispatch = useDispatch();

    const { isLoaded, logout } = useAuthUser();

    const onSubmit = (data: any) => {
        if (data.gender && data.gender === 'Женский') {
            data.gender = 1;
        }

        if (data.gender && data.gender === 'Мужской') {
            data.gender = 2;
        }

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

            <button className="btn-regular cabinet-setting__logout" onClick={logout}>
                Выйти из профиля
            </button>
        </div>
    );
};

export default CabinetSetting;
