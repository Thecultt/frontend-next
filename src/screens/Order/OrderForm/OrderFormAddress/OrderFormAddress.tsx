'use client';

import React from 'react';
import { useFormikContext } from 'formik';

import { FormikDadataAddressInput, FormikInput, FormikTextarea } from '@/shared/form';

import { IOrderFormValues } from '../../types';

export const OrderFormAddress = () => {
    const { values } = useFormikContext<IOrderFormValues>();

    return (
        <div className="order-form__group">
            <h3 className="order-form__title">Адрес</h3>

            <div className="order-form__row">
                <div className="order-form__field order-form__field--half">
                    <FormikDadataAddressInput
                        label="Улица"
                        name="street"
                        filterFromBound="street"
                        filterToBound="street"
                        filterLocations={[{ country: values.country, city: values.city }]}
                    />
                </div>

                <div className="order-form__field order-form__field--quarter">
                    <FormikInput label="Дом" name="house" />
                </div>

                <div className="order-form__field order-form__field--quarter">
                    <FormikInput label="Квартира" name="flat" />
                </div>
            </div>

            <div className="order-form__row">
                <FormikTextarea label="Комментарий" name="comment" />
            </div>
        </div>
    );
};
