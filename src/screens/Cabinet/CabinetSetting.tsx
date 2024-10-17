'use client';

import React from 'react';
import { useDispatch } from 'react-redux';

import { CabinetSettingForm } from '@/components';
import { Button, PageLoader } from '@/shared/ui';
import { useAuthUser } from '@/hooks/useAuthUser';

const CabinetSetting: React.FC = () => {
    const dispatch = useDispatch();

    const { isLoaded, logout } = useAuthUser();

    // const onSubmit = (data: any) => {
    //     dispatch(sendUpdateUser(data) as any);
    // };

    return (
        <div className="cabinet-content cabinet-setting">
            {isLoaded ? <CabinetSettingForm /> : <PageLoader />}

            <Button label="Выйти из профиля" theme="light" onClick={logout} />
        </div>
    );
};

export default CabinetSetting;
