'use client';

import React from 'react';

import { Button, Input } from '@/shared/ui';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useHash } from '@/hooks/useHash';
import { selectAuthEmail, selectRecoveryPasswordIsLoading } from '@/redux/slices/auth/selectors';
import { recoveryPassword } from '@/redux/slices/auth/asyncActions';
import { ReglogStateTypesNotLogin } from '@/types/reglog';

const ReglogRecoveryPassword: React.FC = () => {
    const dispatch = useAppDispatch();
    const { changeHash } = useHash();

    const email = useAppSelector(selectAuthEmail);
    const recoveryPasswordIsLoading = useAppSelector(selectRecoveryPasswordIsLoading);

    const handleClick = () => {
        dispatch(
            recoveryPassword({
                email,
                callback: () => {
                    changeHash(ReglogStateTypesNotLogin.RECOVERY_PASSWORD_SUCCESS);
                },
            }),
        );
    };

    React.useEffect(() => {
        if (!email) {
            changeHash(ReglogStateTypesNotLogin.REGLOG);
        }
    }, []);

    return (
        <div className="reglog-content-form reglog-content-form-login">
            <div className="reglog-content-form-input-wrapper">
                <div className="reglog-content-form-input">
                    <Input label="Ваша почта" theme="grey" value={email} readOnly />
                </div>
            </div>

            <div className="reglog-content-form-btn">
                <Button
                    label="Отправить ссылку для сброса"
                    disabled={recoveryPasswordIsLoading || !email}
                    onClick={handleClick}
                    wide
                />
            </div>

            <p className="reglog-content-form__subtitle">
                В личном кабинете вы сможете отследить статус вашей продажи/заказа
            </p>
        </div>
    );
};

export default ReglogRecoveryPassword;
