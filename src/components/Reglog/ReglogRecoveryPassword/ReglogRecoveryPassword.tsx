'use client';

import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { RenderInput } from '@/components';
import { Button } from '@/shared/ui';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { selectAuthEmail, selectRecoveryPasswordIsLoading } from '@/redux/slices/auth/selectors';
import { useHash } from '@/hooks/useHash';
import { ReglogStateTypesNotLogin } from '@/types/reglog';

const ReglogRecoveryPassword: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
    invalid,
    submitting,
}) => {
    const { changeHash } = useHash();

    const email = useAppSelector(selectAuthEmail);
    const recoveryPasswordIsLoading = useAppSelector(selectRecoveryPasswordIsLoading);

    React.useEffect(() => {
        if (email) {
            initialize({
                email,
            });
        } else {
            changeHash(ReglogStateTypesNotLogin.REGLOG);
        }
    }, []);

    return (
        <form className="reglog-content-form reglog-content-form-login" onSubmit={handleSubmit}>
            <h3 className="reglog-content-form__title">Забыли пароль?</h3>

            <p className="reglog-content-form__description">
                Подтвердите адрес эл. почты, связанный с вашим аккаунтом, на который мы вышлем ссылку для изменения
                пароля.
            </p>

            <div className="reglog-content-form-input-wrapper">
                <div className="reglog-content-form-input">
                    <h4 className="reglog-content-form-input__title">Ваша почта</h4>

                    <Field component={RenderInput} label="Ваша почта" name="email" type="text" disabled />
                </div>
            </div>

            <div className="reglog-content-form-btn">
                <Button
                    type="submit"
                    label="Отправить ссылку для сброса"
                    disabled={recoveryPasswordIsLoading || invalid || submitting}
                    wide
                />
            </div>

            <p className="reglog-content-form__subtitle">
                В личном кабинете вы сможете отследить статус вашей продажи/заказа
            </p>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'recovery-password-form',
})(ReglogRecoveryPassword);
