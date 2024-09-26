'use client';

import React from 'react';
import Link from 'next/link';
import { Field } from 'redux-form';
import { createTextMask } from 'redux-form-input-masks';
import axios from 'axios';

import { useAuthUser } from '@/hooks/useAuthUser';
import { useDebounce } from '@/hooks/useDebounce';
import { useOrder } from '@/hooks/order/useOrder';
import { RenderInput, RenderCheckbox } from '@/components';
import { JEWELRY_PASSPORT_SUM } from '@/constants/app';
import { APP_ROUTE } from '@/constants/routes';

interface Props {
    emailValue: string;
}

const OrderFormContact: React.FC<Props> = ({ emailValue }) => {
    const { isLoggedIn, user } = useAuthUser();
    const { isJewelry, cartSum } = useOrder();

    const emailValueDebounce = useDebounce(emailValue);

    const [isExistsEmail, setIsExistsEmail] = React.useState(false);
    const [isSending, setIsSending] = React.useState(false);

    React.useEffect(() => {
        if (emailValueDebounce && emailValueDebounce !== '') {
            setIsSending(true);

            axios
                .post(`${process.env.NEXT_PUBLIC_API_DOMEN}/email_check/`, { email: emailValue })
                .then(() => {
                    setIsExistsEmail(false);
                    setIsSending(false);
                })
                .catch(() => {
                    setIsExistsEmail(true);
                    setIsSending(false);
                });
        }
    }, [emailValueDebounce]);

    return (
        <div className="order-form-block">
            <h3 className="order-form-block__title">Контактная информация</h3>

            <div className="order-form-block-inputs-wrapper">
                {isLoggedIn ? (
                    <div className="order-form-block-input order-form-block-input-fake" style={{ width: '100%' }}>
                        <p className="order-form-block-input-fake__title">{user.email}</p>
                    </div>
                ) : (
                    <>
                        <div className="order-form-block-input" style={{ width: '100%' }}>
                            <Field component={RenderInput} type="text" name="email" label="Почта" />
                        </div>

                        {/* TODO: Отрефакторить */}
                        {!(/[А-Яа-яЁё]/i.test(emailValue) || /\s/.test(emailValue)) &&
                            (emailValueDebounce && emailValueDebounce !== '' ? (
                                !isSending ? (
                                    isExistsEmail ? (
                                        <div className="order-form-block-loggedin">
                                            <svg
                                                width="38"
                                                height="39"
                                                viewBox="0 0 38 39"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    y="0.501038"
                                                    width="38"
                                                    height="37.9979"
                                                    rx="18.9989"
                                                    fill="#F2F5F4"
                                                />
                                                <path
                                                    d="M19.0015 18.501C21.2106 18.501 23.0015 16.7102 23.0015 14.501C23.0015 12.2919 21.2106 10.501 19.0015 10.501C16.7923 10.501 15.0015 12.2919 15.0015 14.501C15.0015 16.7102 16.7923 18.501 19.0015 18.501Z"
                                                    stroke="#285141"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M27 28.4989V26.4989C27 25.438 26.5786 24.4206 25.8284 23.6705C25.0783 22.9203 24.0609 22.4989 23 22.4989H15C13.9391 22.4989 12.9217 22.9203 12.1716 23.6705C11.4214 24.4206 11 25.438 11 26.4989V28.4989"
                                                    stroke="#285141"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>

                                            <div className="order-form-block-loggedin-text">
                                                <h4 className="order-form-block-loggedin-text__title">
                                                    У вас уже есть учетная запись,{' '}
                                                    <Link href={`${APP_ROUTE.order}?redirect=/order#reglog`}>
                                                        авторизоваться
                                                    </Link>
                                                </h4>

                                                <p className="order-form-block-loggedin-text__subtitle">
                                                    Вы сможете добавлять товары в избранное, оформить доставку с
                                                    примеркой (по Москве) и отследить статус заказа в личном кабинете.
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="order-form-block-notloggedin">
                                            <p className="order-form-block-notloggedin__text">
                                                *У вас пока нет учётной записи, после оформления заказа она будет
                                                автоматически создана.
                                            </p>

                                            <div className="order-form-block-notloggedin-checkbox">
                                                <Field
                                                    component={RenderCheckbox}
                                                    type="checkbox"
                                                    name="promo"
                                                    label="Согласен (-а) получать информационные письма и персональные предложения на указанную почту"
                                                    gray
                                                    small
                                                />
                                            </div>
                                        </div>
                                    )
                                ) : null
                            ) : null)}
                    </>
                )}

                <div className="order-form-block-input" style={{ width: '49%' }}>
                    <Field component={RenderInput} type="text" name="name" label="Получатель ФИО" />
                </div>

                <div className="order-form-block-input" style={{ width: '49%' }}>
                    <Field
                        component={RenderInput}
                        name="phone"
                        label="Телефон"
                        // {...createTextMask({
                        // 	pattern: "+9 999 999 99-99",
                        // 	guide: false,
                        // 	stripMask: false,
                        // })}
                    />
                </div>

                {isJewelry && cartSum >= JEWELRY_PASSPORT_SUM && (
                    <div className="order-form-block-input" style={{ width: '100%' }}>
                        <Field
                            component={RenderInput}
                            type="text"
                            name="passport"
                            label="Серия и номер паспорта"
                            {...createTextMask({
                                pattern: '9999 999999',
                                guide: false,
                                stripMask: false,
                            })}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderFormContact;
