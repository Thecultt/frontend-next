'use client';

import React from 'react';
import { Form, Formik, Field } from 'formik';

import { EXTERNAL_LINKS } from '@/constants/routes';

import { FormUserType, IFormValues, INITIAL_VALUES, SCHEMA } from './validate';

interface Props {
    onSubmit: (values: IFormValues) => void;
}

const FooterEmailSubscribeForm: React.FC<Props> = ({ onSubmit }) => (
    <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={SCHEMA}
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
    >
        {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="footer-email-form">
                <div className="footer-email-form-input">
                    <Field className="footer-email-form-input__field" name="email" placeholder="Ваша почта" />
                    <button type="submit" className="footer-email-form-input__btn">
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="1.46973" width="27" height="27" rx="13.5" stroke="#838383" />
                            <path
                                d="M11 20.9697L17 14.9697L11 8.96973"
                                stroke="#202020"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                <div className="footer-email-form-radio">
                    <label className="footer-email-form-radio-item">
                        <Field
                            name="type"
                            type="radio"
                            className="footer-email-form-radio-item__field"
                            value={FormUserType.Seller}
                        />

                        <p className="footer-email-form-radio-item__label">
                            <span className="footer-email-form-radio-item__label__text">Продавец</span>
                        </p>
                    </label>

                    <label className="footer-email-form-radio-item">
                        <Field
                            name="type"
                            type="radio"
                            className="footer-email-form-radio-item__field"
                            value={FormUserType.Buyer}
                        />

                        <p className="footer-email-form-radio-item__label">
                            <span className="footer-email-form-radio-item__label__text">Покупатель</span>
                        </p>
                    </label>
                </div>

                <p className="footer-email-form__subtitle">
                    Подписываясь на рассылку,{' '}
                    <a href={EXTERNAL_LINKS.advertisingConsent} target="_blank" rel="noreferrer">
                        вы соглашаетесь получать
                    </a>{' '}
                    информационные письма и персональные предложения на указанную почту.
                </p>
            </Form>
        )}
    </Formik>
);

export default FooterEmailSubscribeForm;
