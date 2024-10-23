'use client';

import React from 'react';
import Link from 'next/link';
import { useFormikContext } from 'formik';

import { useOrder } from '@/hooks/order/useOrder';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAuthUser } from '@/hooks/useAuthUser';
import { useDebounce } from '@/hooks/useDebounce';
import { setEmail } from '@/redux/slices/auth/slice';
import { authAPI } from '@/services/api';
import { JEWELRY_PASSPORT_SUM } from '@/constants/app';
import { APP_ROUTE } from '@/constants/routes';
import { ReglogStateTypesNotLogin } from '@/types/reglog';
import { FormikCheckbox, FormikInput } from '@/shared/form';
import { Skeleton } from '@/shared/ui';

import { IOrderFormValues } from '../../types';

export const OrderFormContacts = () => {
    const dispatch = useAppDispatch();

    const { values, errors } = useFormikContext<IOrderFormValues>();

    const { isLoggedIn } = useAuthUser();
    const { isJewelry, cartSum } = useOrder();

    const debouncedValue = useDebounce(values.email);

    const [isExistsEmail, setIsExistsEmail] = React.useState(false);
    const [isSending, setIsSending] = React.useState(false);

    const emailIsValid = !errors.email;

    React.useEffect(() => {
        if (!isLoggedIn && debouncedValue) {
            setIsSending(true);

            authAPI
                .checkEmail(debouncedValue)
                .then(() => {
                    setIsExistsEmail(false);
                    setIsSending(false);
                })
                .catch(() => {
                    setIsExistsEmail(true);
                    setIsSending(false);
                });

            dispatch(setEmail(debouncedValue));
        }
    }, [debouncedValue, isLoggedIn]);

    return (
        <div className="order-form__group">
            <h3 className="order-form__title">Контактная информация</h3>

            <div className="order-form__row">
                <div className="order-form__field">
                    <FormikInput
                        label="Почта"
                        placeholder="Ваша почта"
                        name="email"
                        type="email"
                        disabled={isLoggedIn}
                    />
                </div>
            </div>

            {!isLoggedIn &&
                !!debouncedValue &&
                emailIsValid &&
                (isSending ? (
                    <Skeleton className="order-form__loader" radius={12} dark />
                ) : isExistsEmail ? (
                    <div className="order-form-not-auth-exists">
                        <svg
                            className="order-form-not-auth-exists__icon"
                            viewBox="0 0 38 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect y="0.501038" width="38" height="37.9979" rx="18.9989" fill="#F2F5F4" />
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

                        <div className="order-form-not-auth-exists__content">
                            <h4 className="order-form-not-auth-exists__title">
                                У вас уже есть учетная запись,{' '}
                                <Link
                                    href={`${APP_ROUTE.order}#${ReglogStateTypesNotLogin.LOGIN}`}
                                    prefetch={false}
                                    scroll={false}
                                >
                                    авторизоваться
                                </Link>
                            </h4>

                            <p className="order-form-not-auth-exists__subtitle">
                                Вы сможете добавлять товары в избранное, оформить доставку с примеркой (по Москве) и
                                отследить статус заказа в личном кабинете.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="order-form-not-auth">
                        <p className="order-form-not-auth__text">
                            *У вас пока нет учётной записи, после оформления заказа она будет автоматически создана.
                        </p>

                        <div className="order-form-not-auth__checkbox">
                            <FormikCheckbox name="promo" size="m" wide defaultChildrenStyles>
                                Согласен (-а) получать информационные письма и персональные предложения на указанную
                                почту
                            </FormikCheckbox>
                        </div>
                    </div>
                ))}

            <div className="order-form__row">
                <div className="order-form__field order-form__field--half">
                    <FormikInput label="Имя" placeholder="Ваше имя" name="name" />
                </div>

                <div className="order-form__field order-form__field--half">
                    <FormikInput label="Номер телефона" placeholder="Ваш номер телефона" name="phone" type="tel" />
                </div>
            </div>

            {isJewelry && cartSum >= JEWELRY_PASSPORT_SUM && (
                <div className="order-form__row">
                    <div className="order-form__field">
                        <FormikInput
                            label="Серия и номер паспорта"
                            name="passport"
                            maskProps={{
                                mask: '9999 999999',
                                maskChar: '',
                                alwaysShowMask: false,
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
