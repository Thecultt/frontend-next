import React from 'react';

import { Popup, CabinetSettingPasswordRecoveryForm } from '@/components';

const CabinetSettingPasswordRecovery: React.FC = () => {
    const [stateAdd, setStateAdd] = React.useState(false);

    const onClickChangePassword = () => {
        setStateAdd(true);
    };

    return (
        <>
            <Popup state={stateAdd} setState={() => setStateAdd(false)}>
                <CabinetSettingPasswordRecoveryForm />
            </Popup>

            <div className="cabinet-setting-password-recovery">
                <h4 className="cabinet-setting-password-recovery__title">Забыли или хотите поменять пароль?</h4>

                <button className="cabinet-setting-password-recovery__btn" onClick={onClickChangePassword}>
                    Поменять пароль
                </button>
            </div>
        </>
    );
};

export default CabinetSettingPasswordRecovery;
