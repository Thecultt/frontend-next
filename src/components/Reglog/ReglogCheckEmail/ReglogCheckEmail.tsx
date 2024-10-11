'use client';

import React from 'react';
import { Form, Formik } from 'formik';

import { useHash } from '@/hooks/useHash';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { selectAuthEmail, selectCheckEmailIsLoading } from '@/redux/slices/auth/selectors';
import { checkEmail } from '@/redux/slices/auth/asyncActions';
import { Button } from '@/shared/ui';
import { FormikInput } from '@/shared/form';

import { ICheckEmailFormValues } from '../types';
import { SCHEMA } from './validate';

const ReglogCheckEmail: React.FC = () => {
    const dispatch = useAppDispatch();
    const { changeHash } = useHash();

    const checkEmailIsLoading = useAppSelector(selectCheckEmailIsLoading);
    const email = useAppSelector(selectAuthEmail);

    const initialValues: ICheckEmailFormValues = {
        email: email ?? '',
    };

    const handleSubmit = (values: ICheckEmailFormValues) => {
        dispatch(
            checkEmail({
                email: values.email,
                callback: changeHash,
            }),
        );
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SCHEMA}
            onSubmit={handleSubmit}
            validateOnMount
            enableReinitialize
        >
            {({ isValid }) => (
                <Form className="reglog-content-form reglog-content-form-register">
                    <div className="reglog-content-form-input-wrapper">
                        <div className="reglog-content-form-input">
                            <FormikInput label="Ваша почта" name="email" type="email" theme="grey" />
                        </div>
                    </div>

                    <div className="reglog-content-form-btn">
                        <Button type="submit" label="Продолжить" disabled={checkEmailIsLoading || !isValid} wide />
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
