'use client';

import React from 'react';
import Link from 'next/link';
import { Form, Formik, FormikHelpers } from 'formik';

import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { useHash } from '@/hooks/useHash';
import { ReglogStateTypesNotLogin } from '@/types/reglog';
import { selectAuthEmail, selectLoginIsLoading } from '@/redux/slices/auth/selectors';
import { Button } from '@/shared/ui';
import { FormikInput } from '@/shared/form';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { login } from '@/redux/slices/auth/asyncActions';

import { ILoginFormValues } from '../types';

import { SCHEMA } from './validate';
import { INITIAL_VALUES } from './constants';

const ReglogLogin: React.FC = () => {
    const dispatch = useAppDispatch();
    const { changeHash } = useHash();

    const loginIsLoading = useAppSelector(selectLoginIsLoading);
    const email = useAppSelector(selectAuthEmail);

    const handleSubmit = (values: ILoginFormValues, { setFieldError }: FormikHelpers<ILoginFormValues>) => {
        dispatch(login({ username: email, password: values.password }))
            .unwrap()
            .catch(() => {
                setFieldError('password', 'Неверный пароль');
            });
    };

    React.useEffect(() => {
        if (!email) {
            changeHash(ReglogStateTypesNotLogin.REGLOG);
        }
    }, []);

    return (
        <Formik initialValues={INITIAL_VALUES} validationSchema={SCHEMA} onSubmit={handleSubmit}>
            {({ isValid, dirty }) => (
                <Form className="reglog-content-form reglog-content-form-login">
                    <div className="reglog-content-form-input-wrapper">
                        <div className="reglog-content-form-input">
                            <FormikInput
                                label="Пароль"
                                name="password"
                                type="password"
                                theme="grey"
                                autoComplete="current-password"
                            />
                        </div>
                    </div>

                    <div className="reglog-content-form-btn">
                        <Button type="submit" label="Продолжить" disabled={loginIsLoading || !isValid || !dirty} wide />
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
                </Form>
            )}
        </Formik>
    );
};

export default ReglogLogin;
