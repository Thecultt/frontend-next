'use client';

import React from 'react';
import { Form, Formik } from 'formik';

import { getClassNames } from '@/functions/getClassNames';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAuthUser } from '@/hooks/useAuthUser';
import { updateClientAttributes } from '@/redux/slices/user/asyncActions';
import { FormikInput } from '@/shared/form';
import { CabinetSettingFormEditButtons } from '@/components';

import { ICabinetSettingFormContactValues } from '../types';
import { INITIAL_VALUES } from './constants';
import { SCHEMA } from './validate';

const CabinetSettingFormContact: React.FC = () => {
    const dispatch = useAppDispatch();

    const [isEdit, setIsEdit] = React.useState(false);
    const { user, updateIsLoading } = useAuthUser();

    const formIsDisabled = !isEdit || updateIsLoading;

    const handleSubmit = (data: ICabinetSettingFormContactValues) => {
        dispatch(updateClientAttributes(data))
            .unwrap()
            .then(() => {
                setIsEdit(false);
            });
    };

    const initialValues: ICabinetSettingFormContactValues = {
        ...INITIAL_VALUES,
        email: user.email ?? '',
        phone: user.phone ?? '',
        username_telegram: user.username_telegram ?? '',
    };

    return (
        <Formik initialValues={initialValues} validationSchema={SCHEMA} onSubmit={handleSubmit} enableReinitialize>
            {({ isValid, dirty, resetForm }) => (
                <Form className="cabinet-setting-block">
                    <CabinetSettingFormEditButtons
                        title="Контактные данные"
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
                                <FormikInput
                                    label="Почта"
                                    placeholder="Ваша почта"
                                    name="email"
                                    theme="grey"
                                    disabled={formIsDisabled}
                                    readOnly
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                                <FormikInput
                                    label="Номер телефона"
                                    placeholder="Ваш номер телефона"
                                    name="phone"
                                    theme="grey"
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                                <FormikInput
                                    label="Ник в Telegram"
                                    placeholder="Укажите ваш ник в Telegram"
                                    name="username_telegram"
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

export default CabinetSettingFormContact;
