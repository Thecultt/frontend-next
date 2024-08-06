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
import { GENDER_IDS, GENDERS } from '@/constants/catalog';

const CabinetSetting: React.FC = () => {
    const dispatch = useDispatch();

    const { isLoaded, logout } = useAuthUser();

    const onSubmit = (data: any) => {
        if (data.gender && data.gender === GENDERS.female) {
            data.gender = GENDER_IDS.female;
        }

        if (data.gender && data.gender === GENDERS.male) {
            data.gender = GENDER_IDS.male;
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
