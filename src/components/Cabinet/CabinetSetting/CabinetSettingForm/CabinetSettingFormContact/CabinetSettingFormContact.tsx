'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';

import { getClassNames } from '@/functions/getClassNames';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAuthUser } from '@/hooks/useAuthUser';
import { updateClientAttributes } from '@/redux/slices/user/asyncActions';
import { setIsNotificationServerSuccess } from '@/redux/actions/notifications_server';
import { FormikInput } from '@/shared/form';
import { CabinetSettingFormEditButtons } from '@/components';

import { ICabinetSettingFormContactValues } from '../types';
import { INITIAL_VALUES } from './constants';
import { SCHEMA } from './validate';

const CabinetSettingFormContact: React.FC = () => {
    const dispatch = useDispatch();
    const appDispatch = useAppDispatch();

    const { user } = useAuthUser();

    const [isEdit, setIsEdit] = React.useState(false);

    const handleSubmit = (data: ICabinetSettingFormContactValues) => {
        appDispatch(updateClientAttributes(data))
            .unwrap()
            .then(() => {
                setIsEdit(false);
            });

        // TODO - Вынести в slice
        dispatch(setIsNotificationServerSuccess(true, 'Изменения сохранены успешно') as any);
    };

    const initialValues: ICabinetSettingFormContactValues = {
        ...INITIAL_VALUES,

        email: user.email ?? '',
        phone: user.phone ?? '',
        username_telegram: user.username_telegram ?? '',
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
                        title="Контактные данные"
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
                                <FormikInput
                                    label="Почта"
                                    placeholder="Ваша почта"
                                    name="email"
                                    theme="grey"
                                    readOnly
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                                <FormikInput
                                    label="Номер телефона"
                                    placeholder="Ваш номер телефона"
                                    name="phone"
                                    theme="grey"
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                                <FormikInput
                                    label="Ник в Telegram"
                                    placeholder="Укажите ваш ник в Telegram"
                                    name="username_telegram"
                                    theme="grey"
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
