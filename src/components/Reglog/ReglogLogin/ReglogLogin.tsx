'use client';

import React from 'react';
import Link from 'next/link';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { useHash } from '@/hooks/useHash';
import { ReglogStateTypesNotLogin } from '@/types/reglog';
import { selectAuthEmail, selectLoginIsLoading } from '@/redux/slices/auth/selectors';
import { Button } from '@/shared/ui';
import { RenderInput } from '@/components';

import validate from './validate';

const ReglogLogin: React.FC<{} & InjectedFormProps<{}, {}>> = ({ handleSubmit, invalid, submitting }) => {
    const { changeHash } = useHash();

    const loginIsLoading = useAppSelector(selectLoginIsLoading);
    const email = useAppSelector(selectAuthEmail);

    React.useEffect(() => {
        if (!email) {
            changeHash(ReglogStateTypesNotLogin.REGLOG);
        }
    }, []);

    return (
        <form className="reglog-content-form reglog-content-form-login" onSubmit={handleSubmit}>
            <h3 className="reglog-content-form__title">Вход</h3>

            <div className="reglog-content-form-input-wrapper">
                <div className="reglog-content-form-input">
                    <h4 className="reglog-content-form-input__title">Пароль</h4>

                    <Field component={RenderInput} label="Пароль" name="password" type="password" />
                </div>
            </div>

            <div className="reglog-content-form-btn">
                <Button type="submit" label="Продолжить" disabled={loginIsLoading || invalid || submitting} wide />
                <Link
                    href={`#${ReglogStateTypesNotLogin.RECOVERY_PASSWORD}`}
                    className="reglog-content-form-btn__link"
                    scroll={false}
                    prefetch={false}
                >
                    Забыли пароль?
                </Link>
            </div>

            <p className="reglog-content-form__subtitle">
                В личном кабинете вы сможете отследить статус вашей продажи/заказа
            </p>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'login-form',
    validate,
})(ReglogLogin);
