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
import { UserIcon } from '@/assets/icons';

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

            <div className="order-form__email">
                <div className="order-form__field">
                    <FormikInput
                        label="Почта"
                        placeholder="Ваша почта"
                        name="email"
                        type="email"
                        disabled={isLoggedIn}
                    />
                </div>

                {!isLoggedIn && !!debouncedValue && emailIsValid && (
                    <div className="order-form__email-extra">
                        {isSending ? (
                            <Skeleton className="order-form__email-loader" radius={12} dark />
                        ) : isExistsEmail ? (
                            <Link
                                href={`${APP_ROUTE.order}#${ReglogStateTypesNotLogin.LOGIN}`}
                                prefetch={false}
                                scroll={false}
                                className="order-form-not-auth-exists"
                            >
                                <div className="order-form-not-auth-exists__icon-wrapper">
                                    <UserIcon className="order-form-not-auth-exists__icon" />
                                </div>

                                <div className="order-form-not-auth-exists__content">
                                    <h4 className="order-form-not-auth-exists__title">
                                        У вас уже есть учетная запись, <span>авторизоваться</span>
                                    </h4>

                                    <p className="order-form-not-auth-exists__subtitle">
                                        Вы сможете добавлять товары в избранное, оформить доставку с примеркой (по
                                        Москве) и отследить статус заказа в личном кабинете.
                                    </p>
                                </div>
                            </Link>
                        ) : (
                            <div className="order-form-not-auth">
                                <p className="order-form-not-auth__text">
                                    *У вас пока нет учётной записи, после оформления заказа она будет автоматически
                                    создана.
                                </p>

                                <div className="order-form-not-auth__checkbox">
                                    <FormikCheckbox name="promo" size="m" wide defaultChildrenStyles>
                                        Согласен (-а) получать информационные письма и персональные предложения на
                                        указанную почту
                                    </FormikCheckbox>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

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
