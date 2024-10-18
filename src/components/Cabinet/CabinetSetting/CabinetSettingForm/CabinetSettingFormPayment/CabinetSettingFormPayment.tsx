'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';

import { getClassNames } from '@/functions/getClassNames';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAuthUser } from '@/hooks/useAuthUser';
import { updateClientAttributes } from '@/redux/slices/user/asyncActions';
import { setIsNotificationServerError, setIsNotificationServerSuccess } from '@/redux/actions/notifications_server';
import { FormikDadataBankInput, FormikInput } from '@/shared/form';
import { CabinetSettingFormEditButtons } from '@/components';

import { ICabinetSettingFormPaymentValues } from '../types';
import { INITIAL_VALUES } from './constants';
import { SCHEMA } from './validate';

const CabinetSettingFormPayment: React.FC = () => {
    const dispatch = useDispatch();
    const appDispatch = useAppDispatch();

    const [isEdit, setIsEdit] = React.useState(false);
    const { user, updateIsLoading } = useAuthUser();

    const formIsDisabled = !isEdit || updateIsLoading;

    const handleSubmit = (data: ICabinetSettingFormPaymentValues) => {
        appDispatch(updateClientAttributes(data))
            .unwrap()
            .then(() => {
                // TODO - Вынести в slice
                dispatch(setIsNotificationServerSuccess(true, 'Изменения сохранены успешно') as any);
                setIsEdit(false);
            })
            .catch(() => {
                // TODO - Вынести в slice
                dispatch(setIsNotificationServerError(true, 'Не удалось сохранить изменения') as any);
            });
    };

    const initialValues: ICabinetSettingFormPaymentValues = {
        ...INITIAL_VALUES,
        pasport: user.pasport ?? '',
        bik: user.bik ?? '',
        inn: user.inn ?? '',
        rs: user.rs ?? '',
        issued_by: user.issued_by ?? '',
        issued_date: user.issued_date ?? '',
        issued_code: user.issued_code ?? '',
        place_of_birth: user.place_of_birth ?? '',
        dr: user.dr ?? '',
        citizenship: user.citizenship ?? '',
        registration_address: user.registration_address ?? '',
    };

    return (
        <Formik initialValues={initialValues} validationSchema={SCHEMA} onSubmit={handleSubmit} enableReinitialize>
            {({ isValid, dirty, resetForm }) => (
                <Form className="cabinet-setting-block">
                    <CabinetSettingFormEditButtons
                        title="Реквизиты получателя"
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
                            <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                                <FormikInput
                                    label="Серия и номер паспорта"
                                    placeholder="Серия и номер паспорта"
                                    name="pasport"
                                    theme="grey"
                                    maskProps={{
                                        mask: '9999 999999',
                                        alwaysShowMask: false,
                                        maskChar: '',
                                    }}
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                                <FormikDadataBankInput
                                    label="БИК банка"
                                    placeholder="БИК банка"
                                    name="bik"
                                    theme="grey"
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                                <FormikInput
                                    label="ИНН получателя"
                                    placeholder="ИНН получателя"
                                    name="inn"
                                    theme="grey"
                                    maskProps={{
                                        mask: '999999999999',
                                        alwaysShowMask: false,
                                        maskChar: '',
                                    }}
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                                <FormikInput
                                    label="Расчетный счёт"
                                    placeholder="Расчетный счёт"
                                    name="rs"
                                    theme="grey"
                                    maskProps={{
                                        mask: '99999999999999999999',
                                        alwaysShowMask: false,
                                        maskChar: '',
                                    }}
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                                <FormikInput
                                    label="Кем выдан паспорт"
                                    placeholder="Кем выдан паспорт"
                                    name="issued_by"
                                    theme="grey"
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                                <FormikInput
                                    label="Дата выдачи паспорта"
                                    placeholder="Дата выдачи паспорта"
                                    name="issued_date"
                                    theme="grey"
                                    maskProps={{
                                        mask: '99.99.9999',
                                        alwaysShowMask: false,
                                        maskChar: '',
                                    }}
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                                <FormikInput
                                    label="Код подразделения"
                                    placeholder="Код подразделения"
                                    name="issued_code"
                                    theme="grey"
                                    maskProps={{
                                        mask: '999-999',
                                        alwaysShowMask: false,
                                        maskChar: '',
                                    }}
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                                <FormikInput
                                    label="Место рождения"
                                    placeholder="Место рождения"
                                    name="place_of_birth"
                                    theme="grey"
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                                <FormikInput
                                    label="Дата рождения"
                                    placeholder="Дата рождения"
                                    name="dr"
                                    theme="grey"
                                    maskProps={{
                                        mask: '99.99.9999',
                                        alwaysShowMask: false,
                                        maskChar: '',
                                    }}
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                                <FormikInput
                                    label="Гражданство"
                                    placeholder="Гражданство"
                                    name="citizenship"
                                    theme="grey"
                                    disabled={formIsDisabled}
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                                <FormikInput
                                    label="Адрес регистрации"
                                    placeholder="Адрес регистрации"
                                    name="registration_address"
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

export default CabinetSettingFormPayment;
