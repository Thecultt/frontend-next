import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';

import { getClassNames } from '@/functions/getClassNames';
import { useAppDispatch } from '@/hooks/redux/useAppDispatch';
import { useAuthUser } from '@/hooks/useAuthUser';
import { updateClientAttributes } from '@/redux/slices/user/asyncActions';
import { setIsNotificationServerSuccess } from '@/redux/actions/notifications_server';
import { FormikDadataCountryInput, FormikDadataAddressInput, FormikInput, FormikTextarea } from '@/shared/form';

import { ICabinetSettingFormAdressValues } from '../types';
import { INITIAL_VALUES } from './constants';
import { SCHEMA } from './validate';

const CabinetSettingFormAddress: React.FC = () => {
    const dispatch = useDispatch();
    const appDispatch = useAppDispatch();

    const { user } = useAuthUser();

    const [isEdit, setIsEdit] = React.useState(false);

    const handleSubmit = (data: ICabinetSettingFormAdressValues) => {
        appDispatch(updateClientAttributes(data))
            .unwrap()
            .then(() => {
                setIsEdit(false);
            });

        // TODO - Вынести в slice
        dispatch(setIsNotificationServerSuccess(true, 'Изменения сохранены успешно') as any);
    };

    const initialValues: ICabinetSettingFormAdressValues = {
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
            {({ isValid, dirty, values: { country, city } }) => (
                <Form
                    className={getClassNames('cabinet-setting-block', {
                        active: isEdit,
                    })}
                >
                    <div className="cabinet-setting-block-title">
                        <h3 className="cabinet-setting-block-title__title">Адрес</h3>

                        {isEdit ? (
                            dirty ? (
                                <button
                                    type="submit"
                                    className={getClassNames('cabinet-setting-block-title__btn', {
                                        disabled: !isValid,
                                    })}
                                >
                                    Сохранить
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="cabinet-setting-block-title__btn"
                                    onClick={() => setIsEdit(false)}
                                >
                                    Отменить
                                </button>
                            )
                        ) : (
                            <button
                                type="button"
                                className="cabinet-setting-block-title__btn"
                                onClick={() => setIsEdit(true)}
                            >
                                Изменить
                            </button>
                        )}
                    </div>

                    <div
                        className={getClassNames('cabinet-setting-block-form', {
                            active: isEdit,
                        })}
                    >
                        <div className="cabinet-setting-block-form-input-wrapper">
                            <div className="cabinet-setting-block-form-input" style={{ width: '49%' }}>
                                <FormikDadataCountryInput
                                    label="Страна"
                                    placeholder="Ваша страна"
                                    name="country"
                                    theme="grey"
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
                                />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '32%' }}>
                                <FormikInput label="Дом" placeholder="Ваш дом" name="house" theme="grey" />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '32%' }}>
                                <FormikInput label="Квартира" placeholder="Ваша квартира" name="flat" theme="grey" />
                            </div>

                            <div className="cabinet-setting-block-form-input" style={{ width: '100%' }}>
                                <FormikTextarea
                                    label="Комментарий"
                                    placeholder="Комментарий"
                                    name="comment"
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

export default CabinetSettingFormAddress;
