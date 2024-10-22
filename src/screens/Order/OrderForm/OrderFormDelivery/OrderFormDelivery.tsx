'use client';

import React from 'react';
import Link from 'next/link';
import { useFormikContext } from 'formik';
import { useUnmount } from 'usehooks-ts';

import {
    DELIVERY_ITEM,
    GLOBAL_DELIVERY_ITEMS,
    IDeliveryItem,
    RUSSIA_DELIVERY_ITEMS,
    RUSSIA_MOSCOW_DELIVERY_ITEMS,
    SNG_COUNTRIES,
    SNG_COUNTRIES_WITH_RU,
    SNG_DELIVERY_ITEMS,
} from '@/constants/delivery';
import { ReglogStateTypesNotLogin } from '@/types/reglog';
import { useAuthUser } from '@/hooks/useAuthUser';
import { FormikRadio } from '@/shared/form';
import { isMoscow, isRussia } from '@/functions/locations';

import { IOrderFormValues } from '../../types';

export const OrderFormDelivery = () => {
    const { values, initialValues, setFieldValue } = useFormikContext<IOrderFormValues>();
    const { isLoggedIn } = useAuthUser();

    const [deliveryItems, setDeliveryItems] = React.useState<IDeliveryItem[]>([]);

    const currentCountryLowerCase = values.country.toLocaleLowerCase();
    const currentCityLowerCase = values.city.toLocaleLowerCase();

    React.useEffect(() => {
        if (!currentCountryLowerCase || !currentCityLowerCase) {
            return;
        }

        if (isRussia(currentCountryLowerCase)) {
            if (isMoscow(currentCityLowerCase)) {
                setDeliveryItems(RUSSIA_MOSCOW_DELIVERY_ITEMS);
                setFieldValue('delivery', DELIVERY_ITEM.pickup.id);
                return;
            }

            setDeliveryItems(RUSSIA_DELIVERY_ITEMS);
            setFieldValue('delivery', DELIVERY_ITEM.russiaFree.id);
            return;
        }

        if (SNG_COUNTRIES.includes(currentCountryLowerCase)) {
            setDeliveryItems(SNG_DELIVERY_ITEMS);
            setFieldValue('delivery', DELIVERY_ITEM.sng.id);
            return;
        }

        if (!SNG_COUNTRIES_WITH_RU.includes(currentCountryLowerCase)) {
            setDeliveryItems(GLOBAL_DELIVERY_ITEMS);
            setFieldValue('delivery', DELIVERY_ITEM.global.id);
            return;
        }
    }, [currentCountryLowerCase, currentCityLowerCase]);

    useUnmount(() => {
        setFieldValue('delivery', initialValues.delivery);
    });

    return (
        <div className="order-form__group">
            <h3 className="order-form__title">Варианты доставки</h3>

            {deliveryItems.map((item) => (
                <div className="order-form__column" key={item.id}>
                    <div className="order-form__field">
                        <FormikRadio
                            name="delivery"
                            value={item.id}
                            disabled={!isLoggedIn && item.id === DELIVERY_ITEM.withFittingMoscow.id}
                            defaultChildrenStyles
                            wide
                        >
                            {item.title}
                        </FormikRadio>
                    </div>

                    {values.delivery === item.id && (
                        <p
                            className="order-form__field-description"
                            dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                    )}

                    {isRussia(currentCountryLowerCase) &&
                        isMoscow(currentCityLowerCase) &&
                        !isLoggedIn &&
                        item.id === DELIVERY_ITEM.withFittingMoscow.id && (
                            <p className="order-form__field-description">
                                Доступно только авторизованным пользователям -{' '}
                                <Link href={`#${ReglogStateTypesNotLogin.LOGIN}`} scroll={false} prefetch={false}>
                                    Войти в аккаунт
                                </Link>
                            </p>
                        )}
                </div>
            ))}
        </div>
    );
};
