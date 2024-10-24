'use client';

import React from 'react';
import { Form, Formik } from 'formik';

import { getClassNames } from '@/functions/getClassNames';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAuthUser } from '@/hooks/useAuthUser';
import { updateClientAttributes } from '@/redux/slices/user/asyncActions';
import { FormikDadataCountryInput, FormikDadataAddressInput, FormikInput, FormikTextarea } from '@/shared/form';
import { CabinetSettingFormEditButtons } from '@/components';

import { ICabinetSettingFormAddressValues } from '../types';
import { INITIAL_VALUES } from './constants';
import { SCHEMA } from './validate';

const CabinetSettingFormAddress: React.FC = () => {
    const dispatch = useAppDispatch();

    const [isEdit, setIsEdit] = React.useState(false);
    const { user, updateIsLoading } = useAuthUser();

    const formIsDisabled = !isEdit || updateIsLoading;

    const handleSubmit = (data: ICabinetSettingFormAddressValues) => {
        dispatch(updateClientAttributes(data))
            .unwrap()
            .then(() => {
                setIsEdit(false);
            });
    };

    const initialValues: ICabinetSettingFormAddressValues = {
        ...INITIAL_VALUES,
        country: user.country ?? '',
        city: user.city ?? '',
        street: user.street ?? '',
        house: user.house ?? '',
        flat: user.flat ?? '',
        comment: user.comment ?? '',
    };

    return (
        <Formik initialValues={initialValues} validationSchema={SCHEMA} onSubmit={handleSubmit} enableReinitialize>
            {({ isValid, dirty, values: { country, city }, resetForm }) => (
                <Form className="cabinet-setting-block">
                    <CabinetSettingFormEditButtons
                        title="Адрес"
                        isValid={isValid}
                        dirty={dirty}
                        isEdit={isEdit}
                        isLoading={updateIsLoading}
                        setIsEdit={setIsEdit}
                        onReset={resetForm}
                    />

                    <div
                        className={getClassNames('cabinet-setting-block-form', {
                            active: !formIsDisabled,
                        })}
                    >
                        <div className="cabinet-setting-block-form-input-wrapper">
                            <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                                <FormikDadataCountryInput
                                    label="Страна"
                                    placeholder="Ваша страна"
                                    name="country"
                                    theme="grey"
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                                <FormikDadataAddressInput
                                    label="Город"
                                    placeholder="Ваш город"
                                    name="city"
                                    filterFromBound="city"
                                    filterToBound="city"
                                    filterLocations={[{ country }]}
                                    theme="grey"
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '32%' }}>
                                <FormikDadataAddressInput
                                    label="Улица"
                                    placeholder="Ваша улица"
                                    name="street"
                                    filterFromBound="street"
                                    filterToBound="street"
                                    filterLocations={[{ country, city }]}
                                    theme="grey"
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '32%' }}>
                                <FormikInput
                                    label="Дом"
                                    placeholder="Ваш дом"
                                    name="house"
                                    theme="grey"
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '32%' }}>
                                <FormikInput
                                    label="Квартира"
                                    placeholder="Ваша квартира"
                                    name="flat"
                                    theme="grey"
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                                <FormikTextarea
                                    label="Комментарий"
                                    placeholder="Комментарий"
                                    name="comment"
                                    theme="grey"
                                    disabled={formIsDisabled}
                                />
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default CabinetSettingFormAddress;
