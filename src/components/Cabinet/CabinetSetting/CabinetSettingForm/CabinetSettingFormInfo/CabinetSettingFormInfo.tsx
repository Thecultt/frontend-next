'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';

import { getClassNames } from '@/functions/getClassNames';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAuthUser } from '@/hooks/useAuthUser';
import { updateClientAttributes } from '@/redux/slices/user/asyncActions';
import { setIsNotificationServerSuccess } from '@/redux/actions/notifications_server';
import { GENDERS, GENDER_IDS } from '@/constants/catalog';
import { FormikInput, FormikRadio } from '@/shared/form';
import { CabinetSettingFormEditButtons } from '@/components';

import { ICabinetSettingFormInfoValues } from '../types';
import { INITIAL_VALUES } from './constants';
import { SCHEMA } from './validate';

const CabinetSettingFormInfo: React.FC = () => {
    const dispatch = useDispatch();
    const appDispatch = useAppDispatch();

    const [isEdit, setIsEdit] = React.useState(false);

    const { user } = useAuthUser();

    const handleSubmit = (data: ICabinetSettingFormInfoValues) => {
        appDispatch(updateClientAttributes(data))
            .unwrap()
            .then(() => {
                setIsEdit(false);
            });

        // TODO - Вынести в slice
        dispatch(setIsNotificationServerSuccess(true, 'Изменения сохранены успешно') as any);
    };

    const initialValues: ICabinetSettingFormInfoValues = {
        ...INITIAL_VALUES,

        name: user.name ?? '',
        middlename: user.middlename ?? '',
        lastname: user.lastname ?? '',
        dr: user.dr ?? '',
        gender: user.gender ?? GENDER_IDS.female,
    };

    return (
        <Formik initialValues={initialValues} validationSchema={SCHEMA} onSubmit={handleSubmit} enableReinitialize>
            {({ isValid, dirty }) => (
                <Form
                    className={getClassNames('cabinet-setting-block', {
                        active: isEdit,
                    })}
                >
                    <CabinetSettingFormEditButtons
                        title="Основные данные"
                        isValid={isValid}
                        dirty={dirty}
                        isEdit={isEdit}
                        setIsEdit={setIsEdit}
                    />

                    <div
                        className={getClassNames('cabinet-setting-block-form', {
                            active: isEdit,
                        })}
                    >
                        <div className="cabinet-setting-block-form-input-wrapper">
                            <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                                <FormikInput label="Имя" placeholder="Ваше имя" name="name" theme="grey" />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                                <FormikInput label="Фамилия" placeholder="Ваша фамилия" name="lastname" theme="grey" />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                                <FormikInput
                                    label="Отчество"
                                    placeholder="Ваше отчество"
                                    name="middlename"
                                    theme="grey"
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                                <FormikInput
                                    label="Дата рождения"
                                    placeholder="Ваша дата рождения"
                                    name="dr"
                                    theme="grey"
                                    maskProps={{
                                        mask: '99.99.9999',
                                        alwaysShowMask: false,
                                        maskChar: '',
                                    }}
                                />
                            </div>
                        </div>

                        <div className="cabinet-setting-block-form-radio-wrapper">
                            <div className="cabinet-setting-block-form-radio">
                                <FormikRadio value={GENDER_IDS.female} name="gender" defaultChildrenStyles>
                                    {GENDERS.female}
                                </FormikRadio>
                            </div>
                            <div className="cabinet-setting-block-form-radio">
                                <FormikRadio value={GENDER_IDS.male} name="gender" defaultChildrenStyles>
                                    {GENDERS.male}
                                </FormikRadio>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default CabinetSettingFormInfo;
