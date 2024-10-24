'use client';

import React from 'react';
import { useFormikContext } from 'formik';

import { FormikDadataAddressInput, FormikDadataCountryInput } from '@/shared/form';

import { IOrderFormValues } from '../../types';

export const OrderFormLocation = () => {
    const { values } = useFormikContext<IOrderFormValues>();

    return (
        <div className="order-form__group">
            <h3 className="order-form__title">Страна и город доставки</h3>

            <div className="order-form__row">
                <div className="order-form__field order-form__field--half">
                    <FormikDadataCountryInput label="Страна" placeholder="Ваша страна" name="country" />
                </div>

                <div className="order-form__field order-form__field--half">
                    <FormikDadataAddressInput
                        label="Город"
                        placeholder="Ваш город"
                        name="city"
                        filterFromBound="city"
                        filterToBound="city"
                        filterLocations={[{ country: values.country }]}
                    />
                </div>
            </div>
        </div>
    );
};
