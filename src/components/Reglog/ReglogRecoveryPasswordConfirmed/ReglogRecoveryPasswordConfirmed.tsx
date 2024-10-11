'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Form, Formik } from 'formik';

import { Button } from '@/shared/ui';
import { FormikInput } from '@/shared/form';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { selectRecoveryPasswordIsLoading } from '@/redux/slices/auth/selectors';
import { recoveryPasswordConfirm } from '@/redux/slices/auth/asyncActions';
import { SEARCH_PARAMS_KEYS } from '@/constants/keys';

import { IRecoveryPasswordFormValues } from '../types';

import { SCHEMA } from './validate';
import { INITIAL_VALUES } from './constants';

const ReglogRecoveryPassword: React.FC = () => {
    const dispatch = useAppDispatch();

    const searchParams = useSearchParams();
    const code = searchParams.get(SEARCH_PARAMS_KEYS.code);

    const recoveryPasswordIsLoading = useAppSelector(selectRecoveryPasswordIsLoading);

    const handleSubmit = (values: IRecoveryPasswordFormValues) => {
        if (!code) {
            return;
        }

        dispatch(recoveryPasswordConfirm({ password: values.password, code }));
    };

    return (
        <Formik initialValues={INITIAL_VALUES} validationSchema={SCHEMA} onSubmit={handleSubmit}>
            {({ isValid, dirty }) => (
                <Form className="reglog-content-form reglog-content-form-login">
                    <div className="reglog-content-form-input-wrapper">
                        <div className="reglog-content-form-input">
                            <FormikInput
                                label="Новый пароль"
                                name="password"
                                type="password"
                                theme="grey"
                                autoComplete="new-password"
                            />
                        </div>

                        <div className="reglog-content-form-input">
                            <FormikInput
                                label="Повтор пароля"
                                name="password_repeat"
                                type="password"
                                theme="grey"
                                autoComplete="new-password"
                            />
                        </div>
                    </div>

                    <div className="reglog-content-form-btn">
                        <Button
                            type="submit"
                            label="Войти в учётную запись"
                            disabled={recoveryPasswordIsLoading || !isValid || !dirty}
                            wide
                        />
                    </div>

                    <p className="reglog-content-form__subtitle">
                        В личном кабинете вы сможете отследить статус вашей продажи/заказа
                    </p>
                </Form>
            )}
        </Formik>
    );
};

export default ReglogRecoveryPassword;
