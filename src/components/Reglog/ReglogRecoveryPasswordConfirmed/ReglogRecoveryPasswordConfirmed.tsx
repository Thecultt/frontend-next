'use client';

import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { RenderInput } from '@/components';
import { Button } from '@/shared/ui';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { selectRecoveryPasswordIsLoading } from '@/redux/slices/auth/selectors';

import { validate } from './validate';

const ReglogRecoveryPassword: React.FC<{} & InjectedFormProps<{}, {}>> = ({ handleSubmit, invalid, submitting }) => {
    const recoveryPasswordIsLoading = useAppSelector(selectRecoveryPasswordIsLoading);

    return (
        <form className="reglog-content-form reglog-content-form-login" onSubmit={handleSubmit}>
            <h3 className="reglog-content-form__title">Забыли пароль?</h3>

            <div className="reglog-content-form-input-wrapper">
                <div className="reglog-content-form-input">
                    <h4 className="reglog-content-form-input__title">Новый пароль</h4>

                    <Field
                        component={RenderInput}
                        label="Новый пароль"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                    />
                </div>

                <div className="reglog-content-form-input">
                    <h4 className="reglog-content-form-input__title">Повтор пароля</h4>

                    <Field
                        component={RenderInput}
                        label="Повтор пароля"
                        name="password_repeat"
                        type="password"
                        autoComplete="new-password"
                    />
                </div>
            </div>

            <div className="reglog-content-form-btn">
                <Button
                    type="submit"
                    label="Войти в учётную запись"
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
    validate,
})(ReglogRecoveryPassword);
