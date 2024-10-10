'use client';

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Form, Formik } from 'formik';

import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { selectAuthEmail, selectCheckEmailIsLoading } from '@/redux/slices/auth/selectors';
import { SEARCH_PARAMS_KEYS } from '@/constants/keys';
import { APP_ROUTE } from '@/constants/routes';
import { Button } from '@/shared/ui';
import { FormikInput } from '@/shared/form';

import { ICheckEmailFormValues } from '../types';
import { SCHEMA } from './validate';

interface Props {
    onSubmit: (form: ICheckEmailFormValues) => void;
}

const ReglogCheckEmail: React.FC<Props> = ({ onSubmit }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const redirectParam = searchParams.get(SEARCH_PARAMS_KEYS.redirect);

    const checkEmailIsLoading = useAppSelector(selectCheckEmailIsLoading);
    const email = useAppSelector(selectAuthEmail);

    const initialValues: ICheckEmailFormValues = {
        email: email ?? '',
    };

    const handleSubmit = (values: ICheckEmailFormValues) => {
        onSubmit(values);
    };

    return (
        <Formik initialValues={initialValues} validationSchema={SCHEMA} onSubmit={handleSubmit} enableReinitialize>
            {({ isValid, isSubmitting }) => (
                <Form className="reglog-content-form reglog-content-form-register">
                    {redirectParam === APP_ROUTE.order || pathname === APP_ROUTE.order ? (
                        <>
                            <h3 className="reglog-content-form__title">Войдите в аккаунт, чтобы продолжить</h3>

                            <p className="reglog-content-form__description">
                                Для завершения процедуры оформления заказа необходима авторизация или регистрация на
                                сайте.
                            </p>
                        </>
                    ) : (
                        <h3 className="reglog-content-form__title">Вход/Регистрация</h3>
                    )}

                    <div className="reglog-content-form-input-wrapper">
                        <div className="reglog-content-form-input">
                            <FormikInput label="Ваша почта" name="email" type="email" theme="grey" />
                        </div>
                    </div>

                    <div className="reglog-content-form-btn">
                        <Button
                            type="submit"
                            label="Продолжить"
                            disabled={checkEmailIsLoading || !isValid || isSubmitting}
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

export default ReglogCheckEmail;
