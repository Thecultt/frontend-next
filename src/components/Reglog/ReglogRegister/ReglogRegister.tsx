'use client';

import React from 'react';
import Link from 'next/link';
import { Form, Formik } from 'formik';

import { Button } from '@/shared/ui';
import { FormikCheckbox, FormikInput } from '@/shared/form';
import { useHash } from '@/hooks/useHash';
import { useAppSelector } from '@/hooks/redux/useAppSelector';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { register } from '@/redux/slices/auth/asyncActions';
import { selectAuthEmail, selectRegisterIsLoading } from '@/redux/slices/auth/selectors';
import { APP_ROUTE, EXTERNAL_LINKS } from '@/constants/routes';
import { ReglogStateTypesNotLogin } from '@/types/reglog';

import { IRegisterFormValues } from '../types';

import { SCHEMA } from './validate';
import { INITIAL_VALUES } from './constants';

const ReglogRegister: React.FC = () => {
    const dispatch = useAppDispatch();
    const { changeHash } = useHash();

    const email = useAppSelector(selectAuthEmail);
    const registerIsLoading = useAppSelector(selectRegisterIsLoading);

    const initialValues: IRegisterFormValues = {
        ...INITIAL_VALUES,
        email,
    };

    const handleSubmit = ({ policyCheckbox: _, ...values }: IRegisterFormValues) => {
        dispatch(register(values));
    };

    React.useEffect(() => {
        if (!email) {
            changeHash(ReglogStateTypesNotLogin.REGLOG);
        }
    }, []);

    return (
        <Formik initialValues={initialValues} validationSchema={SCHEMA} onSubmit={handleSubmit} enableReinitialize>
            {({ isValid, dirty }) => (
                <Form className="reglog-content-form reglog-content-form-register">
                    <div className="reglog-content-form-input-wrapper">
                        <div className="reglog-content-form-input">
                            <FormikInput label="Имя" placeholder="Ваше имя" name="name" theme="grey" />
                        </div>

                        <div className="reglog-content-form-input">
                            <FormikInput label="Фамилия" placeholder="Ваша фамилия" name="lastname" theme="grey" />
                        </div>

                        <div className="reglog-content-form-input">
                            <FormikInput
                                label="Почта"
                                placeholder="Ваша почта"
                                name="email"
                                type="email"
                                theme="grey"
                                readOnly
                            />
                        </div>

                        <div className="reglog-content-form-input">
                            <FormikInput
                                label="Пароль"
                                placeholder="Придумайте пароль"
                                name="password"
                                type="password"
                                theme="grey"
                                autoComplete="new-password"
                            />
                        </div>
                    </div>

                    <div className="reglog-content-form-checkbox-wrapper">
                        <div className="reglog-content-form-checkbox">
                            <FormikCheckbox name="policyCheckbox" wide defaultChildrenStyles>
                                Я принимаю{' '}
                                <Link href={APP_ROUTE.help.theCultt} target="_blank">
                                    условия продажи
                                </Link>{' '}
                                и даю свое согласие на{' '}
                                <a href={EXTERNAL_LINKS.personalData} target="_blank" rel="noreferrer">
                                    обработку персональных данных
                                </a>
                            </FormikCheckbox>
                        </div>

                        <div className="reglog-content-form-checkbox">
                            <FormikCheckbox name="promoCheckbox" wide defaultChildrenStyles>
                                Согласен (-а){' '}
                                <a href={EXTERNAL_LINKS.advertisingConsent} target="_blank" rel="noreferrer">
                                    получать
                                </a>{' '}
                                информационные письма и персональные предложения на указанную почту
                            </FormikCheckbox>
                        </div>
                    </div>

                    <div className="reglog-content-form-btn">
                        <Button
                            type="submit"
                            label="Продолжить"
                            disabled={registerIsLoading || !isValid || !dirty}
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

export default ReglogRegister;
