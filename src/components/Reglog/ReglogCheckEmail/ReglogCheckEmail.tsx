'use client';

import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { useSearchParams } from 'next/navigation';

import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { selectAuthEmail, selectCheckEmailIsLoading } from '@/redux/slices/auth/selectors';
import { SEARCH_PARAMS_KEYS } from '@/constants/keys';
import { APP_ROUTE } from '@/constants/routes';
import { RenderInput } from '@/components';
import { Button } from '@/shared/ui';

import validate from './validate';

const ReglogCheckEmail: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
    invalid,
    submitting,
}) => {
    const searchParams = useSearchParams();
    const redirectParam = searchParams.get(SEARCH_PARAMS_KEYS.redirect);

    const checkEmailIsLoading = useAppSelector(selectCheckEmailIsLoading);
    const email = useAppSelector(selectAuthEmail);

    React.useEffect(() => {
        if (email) {
            initialize({
                email,
            });
        }
    }, []);

    return (
        <form className="reglog-content-form reglog-content-form-register" onSubmit={handleSubmit}>
            {redirectParam === APP_ROUTE.order ? (
                <>
                    <h3 className="reglog-content-form__title">Войдите в аккаунт, чтобы продолжить</h3>

                    <p className="reglog-content-form__description">
                        Для завершения процедуры оформления заказа необходима авторизация или регистрация на сайте.
                    </p>
                </>
            ) : (
                <h3 className="reglog-content-form__title">Вход/Регистрация</h3>
            )}

            <div className="reglog-content-form-input-wrapper">
                <div className="reglog-content-form-input">
                    <h4 className="reglog-content-form-input__title">Ваша почта</h4>

                    <Field component={RenderInput} label="Ваша почта" name="email" type="text" />
                </div>
            </div>

            <div className="reglog-content-form-btn">
                <Button type="submit" label="Продолжить" disabled={checkEmailIsLoading || invalid || submitting} wide />
            </div>

            <p className="reglog-content-form__subtitle">
                В личном кабинете вы сможете отследить статус вашей продажи/заказа
            </p>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'reglog-check-email-form',
    validate,
})(ReglogCheckEmail);
